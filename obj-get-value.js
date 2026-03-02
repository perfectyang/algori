// import isObject from "lodash/isObject";
// import set from 'lodash/isObject'

var data = [
  {
    question_name: "在这要要",
    option_list: [
      {
        option_value: "达要要要要",
      },
    ],
    get_id: "aaa",
    extra_logic: {
      name: "aaa",
      list_name: [
        {
          group_name: "在这要",
          list: [
            {
              name: "aaaa",
            },
            {
              name: "aaaa",
              options: [
                {
                  txt: "在这要要",
                  link: {
                    obj: "达薮薮薮薮工",
                  },
                },
              ],
            },
          ],
          list2: [
            {
              age: "aaaa",
            },
            {
              test: "aaaa",
            },
          ],
        },
      ],
    },
  },
];

function getTextsAndMap(data, prefix = "") {
  let texts = [];
  let map = [];
  for (const [key, value] of Object.entries(data)) {
    const name = prefix ? prefix + "." + key : key;
    if (typeof value === "object") {
      const { texts: sTexts, map: sMap } = getTextsAndMap(value, name);
      texts = texts.concat(sTexts);
      map = map.concat(sMap);
    } else {
      if (value) {
        texts.push(value);
        map.push(name);
      }
    }
  }
  return { texts, map };
}

function getTextsAndMap(data, prefix = "", recordMap = {}) {
  let texts = [];
  let map = [];
  for (const [key, value] of Object.entries(data)) {
    const name = prefix ? prefix + "." + key : key;
    if (typeof value === "object") {
      const { texts: sTexts, map: sMap } = getTextsAndMap(
        value,
        name,
        recordMap
      );
      texts = texts.concat(sTexts);
      map = map.concat(sMap);
    } else {
      if (value) {
        texts.push(value);
        map.push(name);
        recordMap[name] = value;
        // console.log("name", name, value);
      }
    }
  }
  return { texts, map, recordMap };
}

// const { texts, map } = getTextsAndMap(data);

// console.log("直实节点", texts, map);
// function recoveryByMap(src, dist, paths) {
//   paths.forEach((curpath, key) => {
//     // console.log('src', src) // 原数据
//     // console.log('curpath', curpath) // 数据的路径
//     // console.log('dist[key]', dist[key]) // 要赋值
//     // set(src, curpath, dist[key]); // 所用lodash赋值
//   });
//   return src;
// }
// recoveryByMap(data, texts, map);

const MapData = {
  keyword: {
    start: "1",
    end: "12",
    empty: "",
  },
  txt: undefined,
  text2: "asdf",
  filter: [],
  text: 0,
};
const { texts, map, recordMap: hashMap } = getTextsAndMap(MapData);

// 过滤对象或组数的中指定类型
const judageType = (val) =>
  val === undefined || val === "" || (Array.isArray(val) && val.length === 0);
const compObject = (ob) => {
  const val = Array.isArray(ob) ? ob.filter(Boolean) : ob;
  return Object.keys(val).reduce(
    (acc, key) => {
      const value = val[key];
      console.log("value", value, String(value) !== "[]");
      if (!judageType(value)) {
        acc[key] = typeof value === "object" ? compObject(value) : value;
      }
      return acc;
    },
    Array.isArray(val) ? [] : {}
  );
};

const ret = compObject(MapData);
console.log("ret", ret);

const tree = [
  {
    a: [
      {
        b: "a-b",
      },
      {
        c: "a-c",
      },
    ],
  },
];

// const { texts: a, map: b, recordMap: c } = getTextsAndMap(tree);
// console.log(a, b, c);

const path = { "0.a.0.b": "a-b", "0.a.1.c": "a-c" };
const pathArr = "0.a.0.b".split(".");
// [{ a: [{ b: "xxx" }] }];
// 0 ---> [] parent = []
// a ----> [{a: undefined}]
// 0 ---->  [{a: []}]
// b -----> [{a: [{b: undefined}]}]
let parent = null;
let pointer = null;
let i = 0;
const len = pathArr.length;
while (i < len) {
  const key = pathArr[i];
  if (!(i % 2)) {
    if (!parent) {
      parent = [];
    } else {
      parent.push(pointer);
    }
  } else {
    pointer = { [key]: undefined };
  }
  i++;
}
console.log(parent);

// console.log(pathArr);

// const cutString = (str, value) => {
//   const idx = str.lastIndexOf(".");
//   if (idx > -1) {
//     const prefix = str.substring(0, idx);
//     const key = str.substring(idx + 1);
//     const tmp = {
//         [key]: value,
//       };
//     return cutString(prefix, tmp);
//   } else {
//     return typeof Number(str) === "number"
//       ? []
//       : {
//           [str]: value,
//         };
//   }
// };

// const ob = {
//   "a.b.c.d": "perfectyang",
//   "a.b.d": "same",
//   "a.d.xx": "ehheje",
//   "b.e": "ae",
// };

// // const len = pathArr.length;
// // let i = 0;
// // let pointer = null;
// // let parent = null;
// // while (i < len) {
// //   const key = pathArr[i];
// //   console.log(pointer);
// //   if (typeof Number(key) === "number") {
// //     console.log(key);
// //     pointer = [];
// //   } else {
// //     const temp = { [key]: [] };
// //     pointer.push(temp);
// //     pointer = temp[key];
// //   }
// //   console.log(pointer);
// //   i++;
// // }
