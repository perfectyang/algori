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
          children: [
            {
              state: "3-1-1",
            },
          ],
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
  if (obj.children) {
    obj.children.forEach((cur) => trvaseDeep(cur));
  }
}

// 广度遍历
function trvaseBroad(node) {
  // console.log("node", node);
  let list = [];

  let tem = [node];
  let current = tem.pop();
  let total = 0;
  console.log("current", current);
  // list.push(current);

  while (current) {
    // 进来循环区
    tem = tem.concat(current.children || []);
    list = list.concat(tem);
    current = tem.pop();
    total++;
  }
  console.log("t", list);
}
// trvaseDeep(json);
// trvaseBroad(json);

function bfsPaths(root) {
  const paths = [];

  // 队列元素：{ node, path }，path 是从根到当前节点的节点信息数组
  const queue = [
    {
      node: root,
      path: [
        {
          state: root.state,
          childCount: root.children ? root.children.length : 0,
        },
      ],
    },
  ];

  while (queue.length > 0) {
    const { node, path } = queue.shift();

    const children = node.children;
    if (!children || children.length === 0) {
      // 到达叶子节点，记录完整路径
      paths.push(path);
    } else {
      // 将每个子节点加入队列，并更新路径
      for (const child of children) {
        const childInfo = {
          state: child.state,
          childCount: child.children ? child.children.length : 0,
        };
        queue.push({
          node: child,
          path: path.concat(childInfo),
        });
      }
    }
  }

  return paths;
}

/**
 * 将树中所有从根到叶子的路径按根节点的直接子节点分组
 * @param {Object} root - 树的根节点（需包含 state 和 children 属性）
 * @returns {Object} 分组结果，键为子节点的 state 值，值为该子树下的所有路径数组
 */
function groupPathsBySubtree(root) {
  const groups = {};

  // 队列元素：{ node, path }，path 是从根到当前节点的节点信息数组
  const queue = [
    {
      node: root,
      path: [
        {
          state: root.state,
          childCount: root.children ? root.children.length : 0,
        },
      ],
    },
  ];

  while (queue.length > 0) {
    const { node, path } = queue.shift();
    const children = node.children;

    if (!children || children.length === 0) {
      // 到达叶子节点，确定所属分组
      // 分组键：路径的第二个节点的 state（即根的第一个子节点），若根为叶子则用 'root'
      const key = path.length > 1 ? path[1].state : "root";
      if (!groups[key]) {
        groups[key] = [];
      }
      groups[key].push(path);
    } else {
      // 将每个子节点加入队列，并更新路径
      for (const child of children) {
        const childInfo = {
          state: child.state,
          childCount: child.children ? child.children.length : 0,
        };
        queue.push({
          node: child,
          path: path.concat(childInfo),
        });
      }
    }
  }

  return groups;
}
