import isObject from 'lodash/isObject'
// import set from 'lodash/isObject'


var data = [
  {
    question_name: '在这要要',
    option_list: [
      {
        option_value: '达要要要要'
      }
    ],
    get_id: 'aaa',
    extra_logic: {
      name: 'aaa',
      list_name: [
        {
          group_name: '在这要',
          list: [
            {
              name: 'aaaa'
            },
            {
              name: 'aaaa',
              options: [
                {
                  txt: '在这要要',
                  link: {
                    obj: '达薮薮薮薮工'
                  }
                }
              ]
            }
          ],
          list2: [
            {
              age: 'aaaa'
            },
            {
              test: 'aaaa'
            }
          ]
        }
      ]
    }
  }
]

function getTextsAndMap (data, prefix = '') {
  let texts = []
  let map = []
  for (const [ key, value ] of Object.entries(data)) {
    const name = prefix ? prefix + '.' + key : key
    if (isObject(value)) {
      const { texts: sTexts, map: sMap } = getTextsAndMap(value, name)
      texts = texts.concat(sTexts)
      map = map.concat(sMap)
    } else {
      texts.push(value)
      map.push(name)
    }
  }
  return { texts, map }
}



const {texts, map} = getTextsAndMap(data)

// console.log('直实节点', texts, map)
function recoveryByMap (src, dist, paths) {
  paths.forEach((curpath, key) => {
    // console.log('src', src) // 原数据
    // console.log('curpath', curpath) // 数据的路径
    // console.log('dist[key]', dist[key]) // 要赋值
    set(src, curpath, dist[key]) // 所用lodash赋值
  })
  return src
}
recoveryByMap(data, texts, map)