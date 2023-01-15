const cutString = (str, value) => {
  const idx = str.lastIndexOf(".");
  if (idx > -1) {
    const prefix = str.substring(0, idx);
    const key = str.substring(idx + 1);
    const tmp = {
      [key]: value,
    };
    return cutString(prefix, tmp);
  } else {
    return {
      [str]: value,
    };
  }
};

const ob = {
  "a.b.c.d": "perfectyang",
  "a.b.d": "same",
  "a.d.xx": "ehheje",
  "b.e": "ae",
};

const readList = (ob) => {
  // const arr = []
  const newOb = [];
  Object.keys(ob).forEach((key) => {
    newOb.push(cutString(key, ob[key]));
  });
  return newOb;
};

// const getStr = (target) => {
//   const getNest = (key) => {
//     const idx = key.lastIndexOf(".");
//     const value = target[key];
//     console.log("key", key, value);
//     if (idx !== -1) {
//       delete target[key];
//       const prefixKey = key.substring(0, idx);
//       const restKey = key.substring(idx + 1);
//       if (typeof target[prefixKey] !== "object") {
//         target[prefixKey] = {
//           [restKey]: value,
//         };
//       } else {
//         target[prefixKey][restKey] = value;
//       }
//       console.log("prefixKey", prefixKey);
//       if (/\./.test(prefixKey)) {
//         console.log("埋来");
//         getNest(prefixKey);
//       }
//     }
//   };

//   // Object.keys(target).forEach((key) => {
//   //   getNest(key);
//   // });
//   for (const key in target) {
//     getNest(key);
//   }

//   return target;
// };

getStr(arr);
console.log("str", JSON.stringify(arr, 2));

// const demo = "a.b.c.d.e.f";
// const ret = cutString(demo, "perfectyang");
// console.log(JSON.stringify(ret, 2));
