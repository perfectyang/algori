function compose(middleware) {
  // 如果传入的不是数组，则抛出错误
  if (!Array.isArray(middleware))
    throw new TypeError("Middleware stack must be an array!");
  // 数组中有一项不为函数，则抛出错误
  for (const fn of middleware) {
    if (typeof fn !== "function")
      throw new TypeError("Middleware must be composed of functions!");
  }

  /**
   * @param {Object} context
   * @return {Promise}
   * @api public
   */
  // compose函数被调用后，返回的是以下这个匿名函数
  // 该函数接收两个参数，结合koa源码中的 callback 方法和 handleRequest 方法 可以看出
  // 第一个参数context 就是koa的请求上下文ctx对象
  // 第二个参数next 是所有中间件执行完后，框架使用者来最后处理请求和返回的回调函数
  // 这个匿名函数返回一个promise
  return function (context, next) {
    // last called middleware #
    let index = -1; // 初始下标为-1
    return dispatch(0);
    function dispatch(i) {
      console.log(i, index);
      // 正常情况下在这里: i > index;
      // 下面这一行是为了确保在一个中间件中next只调用一次 若是两次执行next()就会报出这个错误 将状态rejected
      if (i <= index)
        return Promise.reject(new Error("next() called multiple times"));
      index = i;
      let fn = middleware[i];
      // 当满足 i === middleware.length 条件时 说明所有中间件实际上已经执行完毕了
      // 此时的fn === undefined 这里将其再赋值为 next 函数（此next函数指的是42行的参数next而不是koa中间件的next)
      if (i === middleware.length) fn = next;
      if (!fn) return Promise.resolve(); // 自此开始中间件回执
      try {
        return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
        // 上面一行实际上等价于
        /*
        return Promise.resolve(fn(context, function () {
          return dispatch(i + 1)
        }))
        */

        // 所以koa中间件函数中的第二个参数 next实际上就是以下匿名函数：
        /*
        function () {
          return dispatch(i + 1)
        }
        */

        // 所以在中间件中执行到 await next() 这一句的时候
        // await next() => await dispatch(i + 1) => await Promise.resolve(middleware[i + 1])
      } catch (err) {
        return Promise.reject(err);
      }
    }
  };
}

const fake1 = (context, next) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
      context.name = context.name + "1";
      console.log("first", context, next);
      next();
    }, 1000);
  });
};

const fake2 = (context, next) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
      context.name = context.name + "2";
      console.log("second", context, next);
      next();
    }, 2000);
  });
};

const simpleCompose = (middleware) => {
  return (ctx, done) => {
    let idx = -1;
    dispatch(0);
    function dispatch(i) {
      idx = i;
      const fn = middleware[idx];
      if (!fn) return done(ctx);
      return Promise.resolve(fn(ctx, dispatch.bind(null, idx + 1)));
    }
  };
};

const run = simpleCompose([fake1, fake2]);

run({ name: "context" }, (ctx) => {
  console.log("done", ctx);
});
