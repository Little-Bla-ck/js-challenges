// 参数 数组长度、最小范围、最大范围
function randomUniqueArr(len = 100, min = 0, max = 200) {
  const res = []
  while (res.length !== len) {
    const value = Math.floor(Math.random() * (max - min)) + min
    if (res.includes(value)) continue
    res.push(value)
  }
  return res
}

console.log(randomUniqueArr(30, 0, 100));
