import { DateTimeLike, CivilDate, DateLike, TimeLike } from '../../Temporal'

const orderedKeys: Array<keyof DateTimeLike> = [
  'year', 'month', 'day',
  'hour', 'minute', 'second',
  'millisecond', 'microsecond', 'nanosecond',
]

export const compare = (l: DateTimeLike, r: DateTimeLike) => {
  for (let k of orderedKeys) {
    if (typeof l[k] !== 'undefined' && typeof r[k] !== 'undefined' && l[k] !== r[k])
      return Math.sign(l[k]! - r[k]!)
  }
  return 0
}

export const fullDateString = (date: Required<DateLike>) => {
  const d = new Date(date.year, date.month - 1, date.day)
  const formatter = new Intl.DateTimeFormat('en-iso', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  return formatter.format(d)
}

export const fullTimeString = (time: Required<TimeLike>) => {
  const d = new Date(0, 0, 1, time.hour, time.minute)
  const formatter = new Intl.DateTimeFormat('en-iso', {
    hour12: true,
    hour: 'numeric',
    minute: '2-digit',
  })
  return formatter.format(d)
}