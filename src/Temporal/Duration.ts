import { DATA, daysInMonth } from './Shared'

export type DurationOptions = {
  years?: number,
  months?: number,
  days?: number,
  hours: number,
  minutes: number,
  seconds: number,
  milliseconds: number,
  microseconds: number,
  nanoseconds: number,
}

export type DurationLike = Partial<DurationOptions>

export class Duration {
  private [DATA]: DurationOptions

  [Symbol.toStringTag] = 'Duration'

  private constructor() {
    throw new TypeError('durations can not be constructed')
  }
  get years() {
    return this[DATA].years
  }
  get months() {
    return this[DATA].months
  }
  get days() {
    return this[DATA].days
  }
  get hours() {
    return this[DATA].hours
  }
  get minutes() {
    return this[DATA].minutes
  }
  get seconds() {
    return this[DATA].seconds
  }
  get milliseconds() {
    return this[DATA].milliseconds
  }
  get microseconds() {
    return this[DATA].microseconds
  }
  get nanoseconds() {
    return this[DATA].nanoseconds
  }
}

export function castDuration(durationLike: DurationLike, base?: any): Duration {
  if (durationLike instanceof Duration) return durationLike

  let years = typeof durationLike.years !== 'undefined' && Number.isFinite(durationLike.years) ? Math.abs(durationLike.years) : undefined
  let months = typeof durationLike.months !== 'undefined' && Number.isFinite(durationLike.months) ? Math.abs(durationLike.months) : undefined
  let days = typeof durationLike.days !== 'undefined' && Number.isFinite(durationLike.days) ? Math.abs(durationLike.days) : 0
  let hours = typeof durationLike.hours !== 'undefined' && Number.isFinite(durationLike.hours) ? Math.abs(durationLike.hours) : 0
  let minutes = typeof durationLike.minutes !== 'undefined' && Number.isFinite(durationLike.minutes) ? Math.abs(durationLike.minutes) : 0
  let seconds = typeof durationLike.seconds !== 'undefined' && Number.isFinite(durationLike.seconds) ? Math.abs(durationLike.seconds) : 0
  let milliseconds = typeof durationLike.milliseconds !== 'undefined' && Number.isFinite(durationLike.milliseconds) ? Math.abs(durationLike.milliseconds) : 0
  let microseconds = typeof durationLike.microseconds !== 'undefined' && Number.isFinite(durationLike.microseconds) ? Math.abs(durationLike.microseconds) : 0
  let nanoseconds = typeof durationLike.nanoseconds !== 'undefined' && Number.isFinite(durationLike.nanoseconds) ? Math.abs(durationLike.nanoseconds) : 0

  while (nanoseconds >= 1e3) { microseconds+=1; nanoseconds-=1e3 }
  while (microseconds >= 1e3) { milliseconds+=1; microseconds-=1e3 }
  while (milliseconds >= 1e3) { seconds+=1; milliseconds-=1e3 }
  while (seconds >= 60) { minutes+=1; seconds-=60 }
  while (minutes >= 60) { hours+=1; minutes-=60 }
  while (hours >= 24) {  days+= 1; hours-=24 }

  if (base && ((typeof months !== 'undefined' && Number.isFinite(months)) || (typeof years !== 'undefined' && Number.isFinite(years)))) {
    years = years || 0
    months = months || 0
    let { year, month } = base
    if (!Number.isFinite(month)) throw new Error('invalid base')
    while (days > daysInMonth(year, month)) {
      days -= daysInMonth(year, month)
      months += 1
      month += 1
      if (month > 12) { month = 1; year = year && (year + 1) }
    }
    while (months > 12) { months -= 12; years += 1 }
  } else {
    years = undefined
    months = undefined
  }

  const duration = Object.create(Duration.prototype)
  duration[DATA] = {
    years, months, days,
    hours, minutes, seconds,
    milliseconds, microseconds, nanoseconds
  }
  return duration
}