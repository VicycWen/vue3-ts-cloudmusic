export function formatPlayCount(num: number) {
  const units = ['万', '亿', '兆']
  let newNum = num,
    idx = -1
  while (newNum >= 10000) {
    newNum = num / 10000
    idx++
  }
  return idx === -1 ? num : newNum.toString().slice(0, 4) + units[idx]
}
