import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

// 扩展utc
dayjs.extend(utc)
// 时间格式化的字符串
const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'

export function formatUtcString(
  utcString: string,
  format: string = DATE_TIME_FORMAT
) {
  return dayjs.utc(utcString).utcOffset(8).format(format)
}

// 时间戳
// export function formatTimestamp(
//   timestamp: number,
//   format: string = DATE_TIME_FORMAT
// ) {
//   return ''
// }
