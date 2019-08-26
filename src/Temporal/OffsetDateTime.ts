import { DATA, epochMSNS, makeOffsetString, parseOffsetString, toDayOfWeek, toWeekOfYear, toDayOfYear, pad, calculate, DateTimeLike } from './Shared'
import { castDuration } from './Duration'
import { Instant }  from './Instant'
import { CivilDate } from './CivilDate'
import { CivilTime } from './CivilTime'
import { CivilYearMonth } from './CivilYearMonth'
import { ZonedDateTime } from './ZonedDateTime'
import { CivilDateTime } from './CivilDateTime'

export class OffsetDateTime {
  [Symbol.toStringTag] = 'OffsetDateTime'

  private [DATA]: {
    year: number,
    month: number,
    day: number,
    hour: number,
    minute: number,
    second: number,
    millisecond: number,
    microsecond: number,
    nanosecond: number,
    dayOfWeek: number,
    dayOfYear: number,
    weekOfYear: number,
    offset: string,
    offsetMilliSeconds: number,
    instant: Instant,
  }

  constructor(instant: Instant, offsetString: string) {
    if (!(instant instanceof Instant)) throw new Error('invalid argument: instant');
    this[DATA] = Object.assign({}, { instant }, getOffsetInfo(instant[DATA].ms, instant[DATA].ns, offsetString))
  }
  get instant() {
    return this[DATA].instant
  }
  get offset() {
    return this[DATA].offset
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
  get hour() {
    return this[DATA].hour
  }
  get minute() {
    return this[DATA].minute
  }
  get second() {
    return this[DATA].second
  }
  get millisecond() {
    return this[DATA].millisecond
  }
  get microsecond() {
    return this[DATA].microsecond
  }
  get nanosecond() {
    return this[DATA].nanosecond
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

  with(dateTimeLike: DateTimeLike = {}) {
    const { year, month, day, hour, minute, second, millisecond, microsecond, nanosecond } = Object.assign({}, this, dateTimeLike)
    let { ms, ns } = epochMSNS({ year, month, day, hour, minute, second, millisecond, microsecond, nanosecond });
    ms -= this[DATA].offsetMilliSeconds;
    const instant = Object.create(Instant.prototype);
    instant[DATA] = { ms, ns };
    return new OffsetDateTime(instant, this.offset.toString());
  }
  plus(durationLike = {}) {
    const duration = castDuration(durationLike, this);
    const { year, month, day, hour, minute, second, millisecond, microsecond, nanosecond } = calculate(this, duration, false);
    let { ms, ns } = epochMSNS({ year, month, day, hour, minute, second, millisecond, microsecond, nanosecond });
    ms -= this[DATA].offsetMilliSeconds;
    const instant = Object.create(Instant.prototype);
    instant[DATA] = { ms, ns };
    return new OffsetDateTime(instant, this.offset);
  }
  minus(durationLike = {}) {
    const duration = castDuration(durationLike, this);
    const { year, month, day, hour, minute, second, millisecond, microsecond, nanosecond } = calculate(this, duration, true);
    let { ms, ns } = epochMSNS({ year, month, day, hour, minute, second, millisecond, microsecond, nanosecond });
    ms -= this[DATA].offsetMilliSeconds;
    const instant = Object.create(Instant.prototype);
    instant[DATA] = { ms, ns };
    return new OffsetDateTime(instant, this.offset);
  }

  withZone(ianaZone: string) {
    const zoned = new ZonedDateTime(this.instant, ianaZone);
    if (zoned.offset !== this.offset) throw new Error('invalid timezone for this offset');
    return zoned;
  }
  
  getCivilDateTime() {
    return new CivilDateTime(this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond, this.microsecond, this.nanosecond);
  }

  getCivilDate() {
    return new CivilDate(this.year, this.month, this.day)
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
    const { year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, offset } = this;
    const date = `${pad(year,4)}-${pad(month,2)}-${pad(day,2)}`;
    const time = `${pad(hour,2)}:${pad(minute,2)}:${pad(second,2)}`;
    const subs = `${pad(millisecond,3)}${pad(microsecond,3)}${pad(nanosecond,3)}`;
    return `${date}T${time}.${subs}${offset}`;
  }
  toJSON() {
    return this.toString();
  }

  static fromString(isoString: string) {
    const { offset, ...datetime } = parseOffsetISO(isoString);
    let { ms, ns } = epochMSNS(datetime);
    ms -= parseOffsetString(offset);
    const instant = Object.create(Instant.prototype);
    instant[DATA] = { ms, ns };
    return new OffsetDateTime(instant, offset);
  }
}

const ISORE = /^([+-]?\d{4}\d*)-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T([01][0-9]|2[0-3]):([0-5][0-9])(?::([0-5][0-9]))?(?:\.(\d{3}|\d{6}|\d{9}))?([+-]\d{2}:?\d{2})$/;
function parseOffsetISO(isoString: string) {
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
  const offset = match[8];
  return { year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, offset };
}

function getOffsetInfo(ms: number, ns: number, offset: string) {
  const offsetMilliSeconds = parseOffsetString(offset);
  const date = new Date(ms + offsetMilliSeconds);
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  const hour = date.getUTCHours();
  const minute = date.getUTCMinutes();
  const second = date.getUTCSeconds();
  const millisecond = date.getUTCMilliseconds();
  const microsecond = Math.floor(ns / 1e3);
  const nanosecond = Math.floor(ns % 1e3);
  const dayOfWeek = toDayOfWeek(year, month, day);
  const dayOfYear = toDayOfYear(year, month, day);
  const weekOfYear = toWeekOfYear(year, month, day);
  offset = makeOffsetString(offsetMilliSeconds);
  return {
    year, month, day,
    hour, minute, second,
    millisecond, microsecond, nanosecond,
    dayOfWeek, dayOfYear, weekOfYear,
    offset, offsetMilliSeconds
  };
}