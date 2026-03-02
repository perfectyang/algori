function recurse(target, prefix) {
  let texts = [];
  let map = [];
  for (const [key, value] of Object.entries(target)) {
    const name = prefix ? prefix + "." + key : key;
    if (typeof value === "object") {
      const { texts: sTexts, map: sMaps } = recurse(value, name);
      texts = texts.concat(sTexts);
      map = map.concat(sMaps);
    } else {
      texts.push(value);
      map.push({
        name,
        value,
      });
    }
  }
  return { texts, map };
}

const data = {
  empty: true,
  unknownSku: "1123",
  actualSellerSku: "123123",
  mappingSkus: [
    {
      id: "0.7575175723991803-id",
      sku: "SKINTIFIC-02",
      quantity: 2,
      gift: false,
    },
    {
      id: "0.7575175723991803-id",
      sku: "SKINTIFIC-01",
      quantity: 2,
      gift: false,
    },
    {
      id: "0.861613391585281-id",
      sku: "SKINTIFIC-02",
      quantity: 1,
      gift: true,
    },
    {
      id: "0.7593780708738294-id",
      quantity: 3,
      sku: "SKINTIFIC-03",
      gift: true,
    },
  ],
};

const nameList = (val, n) => {
  const a = [];
  a.length = n;
  a.fill(val);
  return a;
};

const handleSku = (list) => {
  return list.reduce((cur, next) => {
    const sku = next.sku.split("-");
    cur[Number(sku[1])] = {
      key: sku[1],
      name: sku[0],
      value: next.quantity,
    };
    return cur;
  }, {});
};
const constStr = (list, prefix = false) => {
  return list
    .reduce((cur, next, idx) => {
      const tmp = nameList(next.key, next.value);
      cur.push(
        idx === 0 && prefix ? [next.name, ...tmp].join("+") : tmp.join("+")
      );
      return cur;
    }, [])
    .join("+");
};

const skuList = data.mappingSkus.filter(
  (cur) => cur.sku !== undefined && cur.quantity !== undefined
);
const normalSkuList = handleSku(skuList.filter((cur) => !cur.gift));
const giftSkuList = handleSku(skuList.filter((cur) => cur.gift));
console.log(normalSkuList, "---------", giftSkuList);

const ret = [
  constStr(Object.values(normalSkuList), true),
  `(${constStr(Object.values(giftSkuList))})`,
];
console.log(ret.join("+"));
