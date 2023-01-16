const json = {
  state: 1,
  children: [
    {
      state: 2,
      children: [
        {
          state: "2-1",
        },
        {
          state: "2-2",
        },
      ],
    },
    {
      state: 3,
      children: [
        {
          state: "3-1",
        },
        {
          state: "3-2",
        },
      ],
    },
  ],
};

// 深度遍历树

function trvaseDeep(obj) {
  console.log(obj.state);
  if (obj.children) {
    obj.children.forEach((cur) => trvaseDeep(cur));
  }
}

// 广度遍历
function trvaseBroad(node) {
  let tem = [node];
  let current = tem.pop();
  let total = 0;
  while (current) {
    // 进来循环区
    console.log("current", current.state);
    tem = tem.concat(current.children || []);
    current = tem.pop();
    total++;
  }
  console.log("t", total);
}
// trvaseDeep(json);
trvaseBroad(json);
