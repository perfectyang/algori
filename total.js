const tree = [
  {
    id: 1,
    children: [
      {
        id: 2,
        depth: 4,
        children: [
          {
            id: 3,
          },
          {
            id: 4,
          },
        ],
      },
    ],
  },
];

const count = (tree) => {
  const tpl = {
    total: 0,
  };
  const sum = (arr, n) => {
    arr.forEach((cur) => {
      if (cur.depth === 4) {
        n.total += cur.children.length;
      } else {
        sum(cur.children, n);
      }
    });
  };
  sum(tree, tpl);
  return tpl.total;
};
// const t = count(tree);
// console.log("t", t);
const testData = [
  {
    editPlanId: 9,
    taskType: "ttvoice",
    subTypeId: 22103660744352,
    targetCount: 12,
    remark: null,
    id: 19,
    contentList: [
      {
        contentId: "",
        cutterId: 123,
      },
    ],
  },
  {
    editPlanId: 9,
    taskType: "ttvoice",
    subTypeId: 22103660744352,
    targetCount: 12,
    remark: null,
    id: 19,
    contentList: [
      {
        contentId: "asdf",
        cutterId: 123,
      },
    ],
  },
  // {
  //   editPlanId: 9,
  //   taskType: "ttvoice",
  //   subTypeId: 24849804399264,
  //   targetCount: 12,
  //   remark: null,
  //   id: 18,
  //   contentList: [{}],
  // },
  // {
  //   editPlanId: 9,
  //   taskType: "igvoice",
  //   subTypeId: 22103660744352,
  //   targetCount: 2,
  //   remark: null,
  //   id: 17,
  //   contentList: [{}],
  // },
  // {
  //   editPlanId: 9,
  //   taskType: "theme",
  //   subTypeId: 94,
  //   targetCount: 2,
  //   remark: null,
  //   id: 16,
  //   contentList: [{}],
  // },
  // {
  //   editPlanId: 9,
  //   taskType: "ttcontent",
  //   subTypeId: 22243348746400,
  //   targetCount: 2,
  //   remark: null,
  //   id: 15,
  //   contentList: [{}],
  // },
  // {
  //   editPlanId: 9,
  //   taskType: "ttcontent",
  //   subTypeId: 22103660744352,
  //   targetCount: 11,
  //   remark: null,
  //   id: 14,
  //   contentList: [{}],
  // },
  // {
  //   editPlanId: 9,
  //   taskType: "igcontent",
  //   subTypeId: 21924711699616,
  //   targetCount: 11,
  //   remark: null,
  //   id: 13,
  //   contentList: [{}],
  // },
];

const bool = testData.some((cur) => {
  const bl = cur.contentList.some((l) => !l.contentId || !l.cutterId);
  return bl;
});

console.log("every", bool);
