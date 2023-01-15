const groupBy = (arr, fn) => {
  return arr
    .map((cur) => {
      if (typeof fn === "function") {
        return fn(cur);
      } else {
        return cur[fn];
      }
    })
    .reduce((cur, key, idx) => {
      if (!cur[key]) {
        cur[key] = [arr[idx]];
      } else {
        cur[key].push(arr[idx]);
      }
      return cur;
    }, {});
};

const data = [
  {
    category: "product",
    name: "111",
  },

  {
    category: "su_product",
    name: "222",
  },

  {
    category: "su_product",
    name: "3333",
  },

  {
    category: "product",
    name: "111----222",
  },
];

const ret = groupBy(data, (cur) => cur.category);
console.log("ret", ret);
