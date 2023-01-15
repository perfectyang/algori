const arr = [
  { id: 1, name: "部门1", pid: 0 },
  { id: 9, name: "部门9", pid: 0 },
  { id: 2, name: "部门2", pid: 1 },
  { id: 3, name: "部门3", pid: 1 },
  { id: 4, name: "部门4", pid: 3 },
  { id: 5, name: "部门5", pid: 2 },
  { id: 6, name: "部门6", pid: 5 },
];

const constructTree = (val, pid = 0) => {
  const data = [];
  val.forEach((cur) => {
    if (cur.pid === pid) {
      cur.children = constructTree(val, cur.id);
      data.push(cur);
    }
  });
  return data;
};

const ret = constructTree(arr);
console.log(JSON.stringify(ret, 2));

function tree(list) {
  const itemMap = {};
  const result = [];
  for (const ob of list) {
    const { id, pid } = ob;
    if (!itemMap[id]) {
      itemMap[id] = {
        ...ob,
        children: [],
      };
    }
    if (pid === 0) {
      result.push(itemMap[id]);
    } else {
      itemMap[pid].children.push(itemMap[id]);
    }
  }
  return result;
}

// const result = tree(arr);
// console.log(JSON.stringify(result, 2));

const treeList = [
  {
    id: 1,
    name: "部门1",
    pid: 0,
    children: [
      {
        id: 2,
        name: "部门2",
        pid: 1,
        children: [
          {
            id: 5,
            name: "部门5",
            pid: 2,
            depth: 4,
            selected: true,
            children: [
              {
                id: 6,
                name: "部门6",
                pid: 5,
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: 3,
        name: "部门3",
        pid: 1,
        children: [
          {
            id: 4,
            name: "部门4",
            pid: 3,
            depth: 4,
            selected: true,
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: 9,
    name: "部门9",
    pid: 0,
    children: [],
  },
];

const flatternTree = (list) => {
  const tmp = [];
  list.forEach((cur) => {
    const { children, ...ret } = cur;
    tmp.push(ret);
    if (children) {
      tmp.push(...flatternTree(children));
    }
  });
  return tmp;
};

// const ret2 = flatternTree(treeList);
// console.log(JSON.stringify(ret2, 2));
// 计算指定层，指定条件为true的数量
const lookDept = (list, level = 0, target = 2) => {
  let total = 0;
  console.log("level", level);
  list.forEach((cur) => {
    if (level === target && cur.selected) {
      console.log("cur", cur.name);
      total += 1;
    }
    if (cur.children) {
      level++;
      total += lookDept(cur.children, level, target);
      // 层级要回退
      level--;
    }
  });
  return total;
};
const n = lookDept(treeList);
console.log("n", n);
