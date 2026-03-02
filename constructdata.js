const data = [
  {
    id: "1",
    name: "面包",
  },

  {
    id: "2",
    name: "面包2",
  },

  {
    id: "3",
    name: "面包3",
  },
];

const drama = [
  {
    book: "剧本1---关联面包",
    productId: "1",
  },

  {
    book: "剧本2-----关联面包",
    productId: "1",
  },

  {
    book: "剧本3-----关联面包2",
    productId: "2",
  },
];

const dataMap = new Map();
data.forEach((cur) => {
  if (!dataMap.has(cur.id)) {
    dataMap.set(cur.id, { ...cur });
  }
});
const ret = drama.reduce((cur, next) => {
  if (dataMap.has(next.productId)) {
    const tmp = dataMap.get(next.productId);
    const cloneTmp = JSON.parse(JSON.stringify(tmp));
    delete cloneTmp.remark;
    const ob = {
      ...next,
      ...cloneTmp,
    };
    cur.push(ob);
    tmp.remark = true;
  }
  return cur;
}, []);

dataMap.forEach((val) => {
  if (!val.remark) {
    ret.push({
      ...val,
      book: "",
      productId: val.id,
    });
  }
});

console.log("ret", ret, dataMap);

const dataConversion = (data) => {
  const dataMap = new Map();
  data.forEach((cur) => {
    if (!dataMap.has(cur.id)) {
      dataMap.set(cur.id, { ...cur });
    }
  });
  const ret = drama.reduce((cur, next) => {
    if (dataMap.has(next.productId)) {
      const tmp = dataMap.get(next.productId);
      const cloneTmp = JSON.parse(JSON.stringify(tmp));
      delete cloneTmp.remark;
      const ob = {
        ...next,
        ...cloneTmp,
      };
      cur.push(ob);
      tmp.remark = true;
    }
    return cur;
  }, []);

  dataMap.forEach((val) => {
    if (!val.remark) {
      ret.push({
        ...val,
        book: "",
        productId: val.id,
      });
    }
  });
  return ret;
};
