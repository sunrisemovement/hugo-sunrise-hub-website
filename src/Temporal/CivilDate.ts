import { DATA, daysInMonth, toDayOfWeek, toDayOfYear, toWeekOfYear, calculate, pad, signedpad, TimeLike } from './Shared'
import { castDuration, DurationLike } from './Duration'
import { CivilYearMonth } from './CivilYearMonth'

export type DateInfo = {
  year: number,
  month: number,
  day: number,
  dayOfWeek: number,
  dayOfYear: number,
  weekOfYear: number,
}

export class CivilDate {
  [Symbol.toStringTag] = 'CivilDate'

  private [DATA]: DateInfo

  constructor(year: number, month: number, day: number) {
    this[DATA] = getDateInfo(year, month, day)
  }
  get year() {
    return this[DATA].year
  }
  get month() {
    return this[DATA].month
  }
  get day() {
    return this[DATA].day
  }
  get dayOfWeek() {
    return this[DATA].dayOfWeek
  }
  get dayOfYear() {
    return this[DATA].dayOfYear
  }
  get weekOfYear() {
    return this[DATA].weekOfYear
  }

  with(dateLike = {}) {
    const { year, month, day } = Object.assign({}, dateLike, this)
    return new CivilDate(year, month, day)
  }
  plus(durationLike = {}) {
    const duration = castDuration(durationLike, this)
    const { year, month, day } = calculate(this, duration, false)
    return new CivilDate(year, month, day)
  }
  minus(durationLike = {}) {
    const duration = castDuration(durationLike, this)
    const { year, month, day } = calculate(this, duration, true)
    return new CivilDate(year, month, day)
  }
  difference(other: CivilDate) {
    other = Object.assign({ year: 0, month: 1, day: 1}, other)
    const [ one, two ] = [ this, other ].sort(compare)
    let days = two.day - one.day
    let months = two.month - one.month
    let years = two.year - one.year
    
    let year = one.year
    let month = one.month
    let day = one.day

    while (days < 0) { days += daysInMonth(year, month); month-=1; months-=1 }
    while (days > daysInMonth(year, month)) { days-=daysInMonth(year, month); month+=1; months+=1 }
    while (months < 0) { months += 12; years -= 1 }
    while (months > 12) { months -= 12; years += 1 }

    return castDuration({ years, months, days }, this)
  }
  getCivilYearMonth() {
    return new CivilYearMonth(this.year, this.month);
  }
  toString() {
    const { year, month, day } = this
    return `${signedpad(year, 4)}-${pad(month, 2)}-${pad(day, 2)}`
  }
  toJSON() {
    return this.toString()
  }

  static fromString(isoString: string) {
    const { year, month, day } = parseISO(isoString)
    return new CivilDate(year, month, day)
  }
}

const ISORE = /^([+-]?\d{4}\d*)-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/
function parseISO(isoStr: string) {
  const match = ISORE.exec(isoStr)
  if (!match) throw new Error('invalid argument')
  const year = +match[1]
  const month = +match[2]
  const day = +match[3]
  return { year, month, day }
}

export function getDateInfo(year: number, month: number, day: number): DateInfo {
  if (!Number.isFinite(year)) throw new Error('invalid argument: year')
  if (!Number.isFinite(month) || (month < 1) || (month > 12)) throw new Error('invalid argument: month')
  if (!Number.isFinite(day) || (day < 1) || (month > daysInMonth(year, month))) throw new Error('invalid argument: day')
  const dayOfWeek = toDayOfWeek(year, month, day)
  const dayOfYear = toDayOfYear(year, month, day)
  const weekOfYear = toWeekOfYear(year, month, day)
  return {
    year, month, day,
    dayOfWeek, dayOfYear, weekOfYear
  }
}

function compare(one: CivilDate, two: CivilDate) {
  if (one.year !== two.year) return one.year - two.year
  if (one.month !== two.month) return one.month - two.month
  if (one.day !== two.day) return one.day - two.day
  return 0
}

((window as unknown) as any).CivilDate = CivilDate