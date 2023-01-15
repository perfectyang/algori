const list = [
  {
    state: 2,
    children: [
      {
        state: "2-1",
      },
      {
        state: "2-2",
        children: [
          {
            state: "2-2-1",
          },
        ],
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
];

const getTarget = (arr, id) => {
  let target;
  const recurse = (arr, id, path = []) => {
    for (let i = 0; i < arr.length; i++) {
      let cur = arr[i];
      const ob = { ...cur, children: null };
      delete ob.children;
      path.push(ob);
      if (cur.state === id) {
        target = JSON.parse(JSON.stringify(path));
        return;
      }
      if (cur.children) {
        recurse(cur.children ?? [], id, path);
      }
      path.pop();
    }
  };
  recurse(arr, id);
  return target;
};

const ret = getTarget(list, "3-2");

console.log("ret", JSON.stringify(ret, 2));
