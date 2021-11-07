// 从某个字符串中高亮某个字符
function renderHightText(originText, target) {
  if (!target || !originText) {
    return originText;
  }
  const moveLen = target.length;
  const totalLen = originText.length;
  const result = [];
  let i = 0;
  while ((i + moveLen) <= totalLen) {
    const matchText = originText.substr(i, moveLen);
    if (matchText.indexOf(target) > -1) {
      i += moveLen;
      result.push(`<b>${matchText}</b>`);
    } else {
      result.push(originText[i]);
      i += 1;
    }
    if ((i + moveLen) > totalLen) {
      result.push(originText.slice(i));
    }
  }
  return result.join('');
}

const originText = '555'
const target = '5555'
const result = renderHightText(originText, target)

console.log(result)

