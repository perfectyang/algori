const skuAttributeIdsMap = {
  skuSeq: "18051243303647949558742079",
  skuAttributeIds: [
    {
      id: "16151243303647949558762079",
      valueId: "16251243303647949558772079"
    },
    {
      id: "16151243303647949558762079",
      valueId: "16251243303647949558822079"
    }
  ]
} 


const skuAttributeMap = {
  '16151243303647949558762079': {
    skuAttributeValueMap:  {
      '16251243303647949558772079': {
        value: {
          'zh-hans-cn': "M"
        }
      },
      '16251243303647949558822079': {
        value: {
          'zh-hans-cn': "S"
        }
      }
    }
  }
}


const data = {
    "skuList": [
        {
            "skuSeq": "18051243303647949558742079",
            "price": 10000,
            "originPrice": 0,
            "stock": 234229,
            "weight": 1,
            "weightUnit": "kg",
            "available": true,
            "shelves": true,
            "skuAttributeIds": [
                {
                    "id": "16151243303647949558762079",
                    "valueId": "16251243303647949558772079",
                    "attributeWeight": 1,
                    "attributeValueWeight": 1
                }
            ],
            "imageList": [],
            "soldOut": false,
            "allowOversold": false,
            "itemNo": "S",
            "infiniteStock": false,
            "spuSeq": "16051243282629956669902079",
            "discount": 0,
            "matchVip": false,
            "skuPrice": 10000,
            "showMemberMark": false
        },
        {
            "skuSeq": "18051243303647949558802079",
            "price": 10000,
            "originPrice": 0,
            "stock": 34474,
            "weight": 1,
            "weightUnit": "kg",
            "available": true,
            "shelves": true,
            "skuAttributeIds": [
                {
                    "id": "16151243303647949558762079",
                    "valueId": "16251243303647949558822079",
                    "attributeWeight": 1,
                    "attributeValueWeight": 2
                }
            ],
            "imageList": [],
            "soldOut": false,
            "allowOversold": false,
            "itemNo": "S-1",
            "infiniteStock": false,
            "spuSeq": "16051243282629956669902079",
            "discount": 0,
            "matchVip": false,
            "skuPrice": 10000,
            "showMemberMark": false
        },
        {
            "skuSeq": "18051243303647949558852079",
            "price": 10000,
            "originPrice": 0,
            "stock": 234538,
            "weight": 1,
            "weightUnit": "kg",
            "available": true,
            "shelves": true,
            "skuAttributeIds": [
                {
                    "id": "16151243303647949558762079",
                    "valueId": "16251243303647949558872079",
                    "attributeWeight": 1,
                    "attributeValueWeight": 3
                }
            ],
            "imageList": [],
            "soldOut": false,
            "allowOversold": false,
            "itemNo": "S-2",
            "infiniteStock": false,
            "spuSeq": "16051243282629956669902079",
            "discount": 0,
            "matchVip": false,
            "skuPrice": 10000,
            "showMemberMark": false
        }
    ],
    "skuAttributeMap": {
        "16151243303647949558762079": {
            "defaultName": "Size",
            "skuAttributeName": {
                "zh-hans-cn": "Size"
            },
            "skuAttributeValueMap": {
                "16251243303647949558772079": {
                    "defaultValue": "S",
                    "value": {
                        "zh-hans-cn": "S"
                    },
                    "attributeValueWeight": 1,
                    "imgUrl": "",
                    "hidden": false
                },
                "16251243303647949558822079": {
                    "defaultValue": "M",
                    "value": {
                        "zh-hans-cn": "M"
                    },
                    "attributeValueWeight": 2,
                    "imgUrl": "",
                    "hidden": false
                },
                "16251243303647949558872079": {
                    "defaultValue": "L",
                    "value": {
                        "zh-hans-cn": "L"
                    },
                    "attributeValueWeight": 3,
                    "imgUrl": "",
                    "hidden": false
                }
            },
            "attributeWeight": 1,
            "hidden": false,
            "hasColorBoard": false
        }
    }
}



const dataContruct = (skuAttributeIdsMap, skuAttributeMap) => {
   return {
    [skuAttributeIdsMap.skuSeq]: {
      list: skuAttributeIdsMap.skuAttributeIds.map((cur) => {
        const {skuAttributeValueMap} = skuAttributeMap[cur.id]
        const {value} = skuAttributeValueMap[cur.valueId]
        return Object.values(value)
      }).reduce((pre, next) => pre.concat(next), [])
    }
   }
}


const result = []
data.skuList.forEach((sku) => {
  result.push(dataContruct(sku, data.skuAttributeMap))
})

// const rs = dataContruct(data.skuList[0], data.skuAttributeMap)
console.log('rs', JSON.stringify(result, 2))