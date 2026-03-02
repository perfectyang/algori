class Tries {
  constructor() {
    this.node = {};
  }
  insert(word) {
    let node = this.node;
    for (const w of word) {
      if (!node[w]) {
        node[w] = {};
      }
      node = node[w];
    }
    node.endOfWord = true;
  }
  search(word) {
    let node = this.node;
    for (const w of word) {
      if (!node[w]) {
        return false;
      }
      node = node[w];
    }
    return node.endOfWord;
  }

  print() {
    return JSON.stringify(this.node, null, 2);
  }
}

const strTries = new Tries();
strTries.insert("abc");
strTries.insert("b");
strTries.insert("bcd");
strTries.insert("c");
strTries.insert("d");

// tries.insert('没朋友在这里')
// tries.insert('aac')
console.log(strTries.print());
// console.log(tries.search('aac'))

// const target = "55";
// tries.insert(target);
// const originText = "5554555";

// function searchTarget() {
//   const len = target.length;
//   const totalLen = originText.length;
//   let i = 0;
//   const result = [];
//   while (i < totalLen) {
//     const tmp = originText.substr(i, len);
//     const bool = tries.search(tmp);
//     console.log(bool);
//     if (bool) {
//       result.push("<b>" + tmp + "</b>");
//       i = i + len;
//     } else {
//       result.push(originText[i]);
//       i++;
//     }
//     if (i + len >= totalLen) {
//       break;
//     }
//   }
//   return result;
// }
// // const res = searchTarget()
// // console.log('res', res.join(''))

// function Test() {
//   let i = 0;
//   while (i < 5) {
//     i++;
//     if (i == 2) {
//       continue;
//     }
//     console.log("i", i);
//   }
//   return "b";
// }
// console.log("aaaa", Test());
