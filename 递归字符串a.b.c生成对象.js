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
        console.log("len", len, w, value);
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
console.log(strTries.node);
