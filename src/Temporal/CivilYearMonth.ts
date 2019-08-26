import { DATA, DateLike, calculate, signedpad, pad } from './Shared'
import { DurationLike, castDuration } from './Duration'
import { CivilDate } from './CivilDate'

type CivilYearMonthData = {
  year: number,
  month: number,
}

export class CivilYearMonth {
  get [Symbol.toStringTag]() { return 'CivilYearMonth' }

  private [DATA]: CivilYearMonthData

  constructor(year: number, month: number) {
    if (!Number.isFinite(year)) throw new Error('invalid argument: year')
    if (!Number.isFinite(month) || (month < 1) || (month > 12)) throw new Error('invalid argument: month')
    this[DATA] = { year, month }
  }
  get year() {
    return this[DATA].year
  }
  get month() {
    return this[DATA].month
  }

  with(dateLike: DateLike = {}) {
    const { year, month } = Object.assign({}, this, dateLike)
    return new CivilYearMonth(year, month)
  }
  plus(durationLike: DurationLike = {}) {
    const duration = castDuration(durationLike, this)
    const { year, month } = calculate(this.withDay(1), duration, false)
    return new CivilYearMonth(year, month)
  }
  minus(durationLike = {}) {
    const duration = castDuration(durationLike, this)
    const { year, month } = calculate(this.withDay(1), duration, true)
    return new CivilYearMonth(year, month)
  }
  difference(other: CivilYearMonth) {
    const [ one, two ] = [ this, other ].sort(compare)
    
    let months = two.month - one.month
    let years = two.year - one.year
    
    while (months < 0) { months += 12; years -= 1; }
    while (months > 12) { months -= 12; years += 1; }

    return castDuration({ years, months }, this)
  }
  withDay(day = 1) {
    return new CivilDate(this.year, this.month, day);
  }
  
  toString() {
    const { year, month } = this;
    return `${signedpad(year, 4)}-${pad(month, 2)}`;
  }
  toJSON() {
    return this.toString();
  }

  static fromString(isoString: string) {
    const { year, month } = parseISO(isoString);
    return new CivilYearMonth(year, month);
  }
}

const ISORE = /^([+-]?\d{4}\d*)-(0[1-9]|1[0-2])$/;
function parseISO(isoStr: string) {
  const match = ISORE.exec(isoStr);
  if (!match) throw new Error('invalid argument');
  const year = +match[1];
  const month = +match[2];
  return { year, month };
}

function compare(one: CivilYearMonth, two: CivilYearMonth) {
  if (one.year !== two.year) return one.year - two.year;
  if (one.month !== two.month) return one.month - two.month;
  return 0;
}