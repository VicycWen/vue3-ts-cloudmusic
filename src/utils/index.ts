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
function pad(timeEl: number | string, total = 2, str = '0') {
  return timeEl.toString().padStart(total, str)
}

export function formaDate(ts: number, options = { type: 'MM-DD', locale: 'zh-CN' }) {
  if (!ts) return ''
  const { type, locale } = options
  const timer = new Date(ts)
  const year = timer.getFullYear()
  const month = timer.getMonth() + 1 // 由于月份从0开始，因此需加1
  const day = timer.getDate()
  const hour = timer.getHours()
  const minute = timer.getMinutes()
  const second = timer.getSeconds()
  // return `${pad(year, 4)}-${pad(month)}-${pad(day)} ${pad(hour)}:${pad(minute)}:${pad(second)}`
  return type.replace('MM', pad(month) + '月').replace('DD', pad(day) + '日').replace('-','')
}
