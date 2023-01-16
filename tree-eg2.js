// 将数据组装起来
const testJson = {
  state: "11",
  children: [
    {
      state: "222",
      children: [
        {
          state: "333",
        },
        {
          state: "444",
        },
      ],
    },
    {
      state: "7777",
      children: [
        {
          state: "5555",
        },
        {
          state: "6666",
        },
      ],
    },
  ],
};

let root2;

function register2(path, rootModule) {
  let newModule = {
    _raw: rootModule,
    _children: [],
    state: rootModule.state,
  };
  if (path.length === 0) {
    root2 = newModule;
  } else {
    let parent = path.slice(0, -1).reduce((root, current) => {
      return root._children[current];
    }, root2);
    console.log("newModule", newModule.state);
    const curIdx = path[path.length - 1];
    parent._children[curIdx] = newModule;
  }
  if (rootModule.children) {
    rootModule.children.forEach((child, idx) => {
      register2(path.concat(idx), child);
    });
  }
}

register2([], testJson);

console.log("root2", root2);
