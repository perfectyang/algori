const hasValue = (val) => {
  return !["null", "undefined", null, undefined, ""].includes(val);
};
const judageType = (val) =>
  val === undefined ||
  val === null ||
  val === "" ||
  ["[]", "{}"].includes(JSON.stringify(val));

const filterObject = (ob) => {
  console.log("ob", ob);
  const val = Array.isArray(ob) ? ob.filter((key) => hasValue(key)) : ob;
  console.log("val", val);
  return Object.keys(val).length > 0
    ? Object.keys(val).reduce(
        (acc, key) => {
          const value = val[key];
          if (!judageType(value)) {
            acc[key] = typeof value === "object" ? filterObject(value) : value;
          }
          return acc;
        },
        Array.isArray(val) ? [] : {}
      )
    : undefined;
};

const ret = filterObject({
  a: {
    b: {
      c: [undefined, { name: "bbb" }],
      // d: "2",
    },
  },
});
console.log("ret", JSON.stringify(ret));
