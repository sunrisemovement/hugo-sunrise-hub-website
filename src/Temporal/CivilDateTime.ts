import { DATA, calculate, signedpad, parseOffsetString, pad, daysInMonth, epochMSNS, possibleTimestamps, DateTimeLike } from './Shared'
import { castDuration, DurationLike } from './Duration'
import { Instant } from './Instant'
import { getDateInfo, CivilDate, DateInfo } from './CivilDate'
import { CivilTime } from './CivilTime'
import { ZonedDateTime } from './ZonedDateTime'
import { OffsetDateTime } from './OffsetDateTime'
import { CivilYearMonth } from './CivilYearMonth'

export class CivilDateTime {
  [Symbol.toStringTag] = 'CivilDateTime'
  private [DATA]: Required<DateTimeLike> & DateInfo

  constructor(
    year: number,
    month: number,
    day: number,
    hours: number,
    minutes: number,
    seconds=0,
    milliseconds=0,
    microseconds=0,
    nanoseconds=0,
  ) {
    let data = getDateInfo(year, month, day)
    this[DATA] = Object.assign(data, calculate(data, { hours, minutes, seconds, milliseconds, microseconds, nanoseconds}, false))
  }
  get year() {
    return this[DATA].year;
  }
  get month() {
    return this[DATA].month;
  }
  get day() {
    return this[DATA].day;
  }
  get hour() {
    return this[DATA].hour;
  }
  get minute() {
    return this[DATA].minute;
  }
  get second() {
    return this[DATA].second;
  }
  get millisecond() {
    return this[DATA].millisecond;
  }
  get microsecond() {
    return this[DATA].microsecond;
  }
  get nanosecond() {
    return this[DATA].nanosecond;
  }
  get dayOfWeek() {
    return this[DATA].dayOfWeek;
  }
  get dayOfYear() {
    return this[DATA].dayOfYear;
  }
  get weekOfYear() {
    return this[DATA].weekOfYear;
  }

  with(dateTimeLike: DateTimeLike = {}) {
    const { year, month, day, hour, minute, second, millisecond, microsecond, nanosecond } = Object.assign({}, this, dateTimeLike)
    return new CivilDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond)
  }
  plus(durationLike: DurationLike = {}) {
    const duration = castDuration(durationLike, this)
    const { year, month, day, hour, minute, second, millisecond, microsecond, nanosecond } = calculate(this, duration, false)
    return new CivilDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond)
  }
  minus(durationLike: DurationLike = {}) {
    const duration = castDuration(durationLike, this);
    const { year, month, day, hour, minute, second, millisecond, microsecond, nanosecond } = calculate(this, duration, true)
    return new CivilDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond)
  }
  difference(other: DateTimeLike = {}) {
    const o = Object.assign({ year: 0, month: 1, day: 1, hour: 0, minute: 0, second: 0, millisecond:0, microsecond: 0, nanosecond: 0}, other)
    const dto = new CivilDateTime(0,0,0,0,0).with(o)
    const [ one, two ] = [ this, dto ].sort(compare);
    
    let years = two.year - one.year;
    let months = two.month - one.month;
    let days = two.day - one.day;
    let hours = two.hour - one.hour;
    let minutes = two.minute - one.minute;
    let seconds = two.second - one.second;
    let milliseconds = two.millisecond - one.millisecond;
    let microseconds = two.microsecond - one.microsecond;
    let nanoseconds = two.nanosecond - one.nanosecond;
    
    let year = one.year;
    let month = one.month;
    let day = one.day;
    
    while (nanoseconds < 0) { nanoseconds += 1e3; microseconds -= 1; }
    while (nanoseconds >= 1e3) { nanoseconds -= 1e3; microseconds += 1; }

    while (microseconds < 0) { microseconds += 1e3; milliseconds -= 1; }
    while (microseconds >= 1e3) { microseconds -= 1e3; milliseconds += 1; }

    while (milliseconds < 0) { milliseconds += 1e3; seconds -= 1; }
    while (milliseconds >= 1e3) { milliseconds -= 1e3; seconds += 1; }

    while (seconds < 0) { seconds += 60; minutes -= 1; }
    while (seconds >= 60) { seconds -= 60; minutes += 1; }

    while (minutes < 0) { minutes += 60; hours -= 1; }
    while (minutes >= 60) { minutes -= 60; hours += 1; }

    while (hours < 0) { hours += 24; days -= 1; day -= 1; }
    while (hours >= 24) { hours -= 24; days += 1; day += 1; }

    while (day < 0) { day += daysInMonth(year, month); month -= 1; }
    while (day >= daysInMonth(year, month)) { day -= daysInMonth(year, month); month += 1; }

    while (days < 0) { days += daysInMonth(year, month); month-=1; months-=1; }
    while (days > daysInMonth(year, month)) { days-=daysInMonth(year, month); month+=1; months+=1; }

    while (months < 0) { months += 12; years -= 1; }
    while (months > 12) { months -= 12; years += 1; }

    return castDuration({
      years, months, days,
      hours, minutes, seconds,
      milliseconds, microseconds, nanoseconds
    }, this);
  }

  withZone(ianaZone: string, filter?: string | symbol) {
    const possible = possibleTimestamps(this[DATA], '' + ianaZone);
    const zoned = possible.map((info)=>{
      const instant = Object.create(Instant.prototype);
      instant[DATA] = info;
      return new ZonedDateTime(instant, ianaZone);
    });
    let found = undefined;
    switch(typeof filter) {
      case 'string':
        found = zoned.find((zoned) => (zoned.offset === filter));
        break;
      case 'symbol':
        switch(filter) {
          case ZonedDateTime.EARLIER: 
            found = zoned.shift();
            break;
          case ZonedDateTime.LATER:
            found = zoned.pop();
            break;
        }
        break;
      default:
        found = zoned.shift()
    }
    if (!found) {
      throw new Error(`invalid time ${this} in zone ${ianaZone}`);
    }
    return found;
  }
  withOffset(offset: string) {
    const offsetMilliSeconds = parseOffsetString(offset);
    const { year, month, day, hour, minute, second, millisecond, microsecond, nanosecond } = this;
    let { ms, ns } = epochMSNS({ year, month, day, hour, minute, second, millisecond, microsecond, nanosecond });
    ms -= offsetMilliSeconds;
    const instant = Object.create(Instant.prototype);
    instant[DATA] = { ms, ns };
    return new OffsetDateTime(instant, offset);
  }

  getCivilDate() {
    return new CivilDate(this.year, this.month, this.day);
  }
  getCivilTime() {
    return new CivilTime(this.hour, this.minute, this.second, this.millisecond, this.microsecond, this.nanosecond);
  }
  getCivilYearMonth() {
    return new CivilYearMonth(this.year, this.month);
  }
  // getCivilMonthDay() {
  //   return new CivilMonthDay(this.month, this.day);
  // }

  toString() {
    const { year, month, day, hour, minute, second, millisecond, microsecond, nanosecond } = this;
    const date = `${signedpad(year, 4)}-${pad(month, 2)}-${pad(day, 2)}`;
    const subs = `${`000${millisecond}`.slice(-3)}${`000${microsecond}`.slice(-3)}${`000${nanosecond}`.slice(-3)}`;
    const time = `${pad(hour,2)}:${pad(minute,2)}:${pad(second,2)}.${subs}`;
    return `${date}T${time}`;
  }
  toJSON() {
    return this.toString();
  }

  static fromString(isoStr: string) {
    const { year, month, day, hour, minute, second, millisecond, microsecond, nanosecond } = parseISO(isoStr);
    return new CivilDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond);
  }
}

const ISORE = /^([+-]?\d{4}\d*)-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T([01][0-9]|2[0-3]):([0-5][0-9])(?::([0-5][0-9]))?(?:\.(\d{3}|\d{6}|\d{9}))?$/;
function parseISO(isoString: string) {
  const match = ISORE.exec(isoString);
  if (!match) throw new Error('invalid argument');
  const year = +match[1];
  const month = +match[2];
  const day = +match[3];
  const hour = +match[4];
  const minute = +match[5];
  const second = match[6] ? +match[6] : 0;
  const nanoseconds = + `${match[7] || ''}000000000`.slice(0, 9);
  const millisecond = Math.floor(nanoseconds / 1e6) % 1e3;
  const microsecond = Math.floor(nanoseconds / 1e3) % 1e3;
  const nanosecond = Math.floor(nanoseconds / 1e0) % 1e3;
  return { year, month, day, hour, minute, second, millisecond, microsecond, nanosecond };
}

function compare(one: CivilDateTime, two: CivilDateTime) {
  if (one.year !== two.year) return one.year - two.year;
  if (one.month !== two.month) return one.month - two.month;
  if (one.day !== two.day) return one.day - two.day;
  if (one.hour !== two.hour) return one.hour - two.hour;
  if (one.minute !== two.minute) return one.minute - two.minute;
  if (one.second !== two.second) return one.second - two.second;
  if (one.millisecond !== two.millisecond) return one.millisecond - two.millisecond;
  if (one.microsecond !== two.microsecond) return one.microsecond - two.microsecond;
  if (one.nanosecond !== two.nanosecond) return one.nanosecond - two.nanosecond;
  return 0;
}