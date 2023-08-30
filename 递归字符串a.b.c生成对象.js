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

// const demo = "a.b.c.d.e.f";
// const ret = cutString(demo, "perfectyang");
// console.log(JSON.stringify(ret, 2));

class GenerateOb {
  constructor() {
    this.node = {};
  }
  insert(word, value) {
    let node = this.node;
    const len = word.length - 1;
    word.forEach((w, idx) => {
      if (!node[w]) {
        node[w] = {};
      }
      if (idx === len) {
        node[w] = value;
      } else {
        node = node[w];
      }
    });
  }
}

const strTries = new GenerateOb();

const obTest = {
  "a.b.c.d": "perfectyang",
  "a.b.c.f": "perfectyang",
  "a.b.d": "same",
  "a.d.xx": "ehheje",
  "b.e": "ae",
};

const generate = (ob) => {
  Object.keys(ob).forEach((cur) => {
    const str = cur.split(".");
    strTries.insert(str, ob[cur]);
  });
};

generate(obTest);
console.log(JSON.stringify(strTries.node, 2));

// ------------根据路径生成对象数组
function isObject(value) {
  const type = typeof value;
  return value != null && (type === "object" || type === "function");
}

const MAX_SAFE_INTEGER = 9007199254740991;
const reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length) {
  const type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return (
    !!length &&
    (type === "number" || (type !== "symbol" && reIsUint.test(value))) &&
    value > -1 &&
    value % 1 == 0 &&
    value < length
  );
}

// {} 'a.b[0].c'  1
function baseSet(object, _path, value) {
  const path = _path.split("."); // ['a', 'b', '0', 'c']
  const length = path.length;
  const lastIndex = length - 1;
  let index = -1;
  let nested = object; // {}
  while (nested != null && ++index < length) {
    const key = path[index];
    let newValue = value;
    if (index != lastIndex) {
      const objValue = nested[key];
      newValue = undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : isIndex(path[index + 1])
          ? []
          : {};
      }
    }
    nested[key] = newValue;
    nested = nested[key];
  }
  return object;
}

const result = [];
const info = {
  "0.b.0.c": 1,
  "0.b.0.d": 33,
  "0.b.1.c": 1,
  "1.b.0.c": 1,
  "1.b.0.d": 33,
  "1.b.1.c": 1,
};

Object.entries(info).forEach(([key, value]) => {
  baseSet(result, key, value);
});

console.log(JSON.stringify(result));
