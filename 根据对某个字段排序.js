const arr = [
  {
    id: 22103660744352,
    nameZh: "面膜",
    nameEn: "ytsdsfhsdf",
    category: "medium_long_tail",
    uid: 0.6316412453739269,
    drama: {
      storyboards: [],
      idStoryboards: [],
      enStoryboards: [],
      grade: "",
      status: "",
    },
  },
  {
    id: 22243348746400,
    nameZh: "泥面膜",
    nameEn: "a",
    category: "head",
    uid: 0.3919441115598643,
    drama: {
      storyboards: [],
      idStoryboards: [],
      enStoryboards: [],
      grade: "",
      status: "",
    },
  },
  {
    id: 23919992100512,
    nameZh: "手霜",
    nameEn: "342",
    category: "child",
    uid: 0.4830442361087892,
    drama: {
      storyboards: [],
      idStoryboards: [],
      enStoryboards: [],
      grade: "",
      status: "",
    },
  },
  {
    id: 23920000760992,
    nameZh: "护手霜原液",
    nameEn: "gfs",
    category: "new",
    uid: 0.1358812140382062,
    drama: {
      storyboards: [],
      idStoryboards: [],
      enStoryboards: [],
      grade: "",
      status: "",
    },
  },
  {
    id: 24849804399264,
    nameZh: "面霜",
    nameEn: "dagsf",
    category: "unshippment",
    uid: 0.8872676763021501,
    drama: {
      storyboards: [],
      idStoryboards: [],
      enStoryboards: [],
      grade: "",
      status: "",
    },
  },
  {
    id: 1370799357362176,
    nameZh: "视黄醇爽肤水",
    nameEn: "暂无",
    category: "new",
    uid: 0.3087140987288908,
    drama: {
      storyboards: [],
      idStoryboards: [],
      enStoryboards: [],
      grade: "",
      status: "",
    },
  },
  {
    id: 1370799400935424,
    nameZh: "精华油",
    nameEn: "Barrier Booster Facial Oil",
    category: "head",
    uid: 0.7061698552638542,
    drama: {
      storyboards: [],
      idStoryboards: [],
      enStoryboards: [],
      grade: "",
      status: "",
    },
  },
  {
    id: 1370799430467584,
    nameZh: "5X精华",
    nameEn: "5X CERAMIDE BARRIER REPAIR SERUM",
    category: "medium_long_tail",
    uid: 0.18395982163189672,
    drama: {
      storyboards: [],
      idStoryboards: [],
      enStoryboards: [],
      grade: "",
      status: "",
    },
  },
  {
    id: 1370799479029760,
    nameZh: "电动眼霜",
    nameEn: "360 Crystal Massager Lifting Eye Cream",
    category: "child",
    uid: 0.5082236648500944,
    drama: {
      storyboards: [],
      idStoryboards: [],
      enStoryboards: [],
      grade: "",
      status: "",
    },
  },
];

const constructData = (
  arr,
  list = ["head", "new", "medium_long_tail", "child", "unshippment"]
) => {
  const dataMap = new Map();
  arr.forEach((val) => {
    if (!dataMap.has(val.category)) {
      dataMap.set(val.category, new Set([{ ...val }]));
    } else {
      const tmp = dataMap.get(val.category);
      tmp.add({ ...val });
    }
  });
  return list
    .map((key) => dataMap.get(key))
    .reduce((cur, next) => {
      cur.push(...next);
      return cur;
    }, []);
};

const ret = constructData(arr);
console.log("ret", ret);
