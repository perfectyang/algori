function processTasks(...tasks) {
  let isRunning = false;
  let result = [];
  let i = 0;
  let prom = null;

  return {
    start() {
      return new Promise(async (resolve, reject) => {
        if (prom) {
          prom.then(resolve, reject);
          return;
        }
        if (isRunning) {
          return;
        }
        isRunning = true;

        while (i < tasks.length) {
          try {
            console.log(i, "执行中");
            result.push(await tasks[i]);
            console.log(i, "执行完成");
          } catch (err) {
            isRunning = false;
            reject(err);
            prom = Promise.reject(err);
            return;
          }
          i++;
          // 但是当我们执行的是最后一个任务的话中断也没有意义了，所以 i 必须小于 tasks.length
          if (!isRunning && i < tasks.length) {
            console.log("执行被中断");
            return;
          }
        }
        // 执行完
        isRunning = false; // 重置 isRunning 的状态
        resolve(result);
        prom = Promise.resolve(result); // 成功的时候保存状态
      });
    },
    pause() {
      isRunning = false;
    },
  };
}

const tasks = [];
// 生成几个异步函数
for (let i = 0; i < 5; i++) {
  tasks.push(
    () =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(i);
        }, 1000);
      }),
  );
}
const processor = processTasks(...tasks);
