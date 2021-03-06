import { DATA, toDayOfWeek, toWeekOfYear, toDayOfYear, makeOffsetString, parseOffsetString, pad, signedpad, epochMSNS, DateTimeLike } from './Shared'

import { Instant }  from './Instant'
import { OffsetDateTime } from './OffsetDateTime'
import { CivilDate } from './CivilDate'
import { CivilTime } from './CivilTime'
import { CivilDateTime } from './CivilDateTime'
import { CivilYearMonth } from './CivilYearMonth'

type ZonedInfo = {
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number,
  second: number,
  millisecond: number,
  microsecond: number,
  nanosecond: number,
  timeZone: string,
  offsetMilliSeconds: number,
  offset: string,
  dayOfWeek: number,
  dayOfYear: number,
  weekOfYear: number,
}

export class ZonedDateTime {
  [Symbol.toStringTag] = 'ZonedDateTime'
  static EARLIER = Symbol('earlier')
  static LATER = Symbol('later')

  private [DATA]: { instant: Instant } & ZonedInfo

  constructor(instant: Instant, ianaZone: string) {
    if (!(instant instanceof Instant)) throw new Error('invalid argument: instant');
    this[DATA] = Object.assign({}, { instant }, getZonedInfo(instant[DATA].ms, instant[DATA].ns, ianaZone))
  }
  get instant() {
    return this[DATA].instant;
  }
  get offset() {
    return this[DATA].offset;
  }
  get timeZone() {
    return this[DATA].timeZone;
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
    const { year, month, day, hour, minute, second, millisecond, microsecond, nanosecond } = Object.assign({}, this, dateTimeLike);
    return new CivilDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond).withZone(this.timeZone);
  }

  getOffsetDateTime() {
    return new OffsetDateTime(this.instant, this.offset);
  }
  getCivilDateTime() {
    return new CivilDateTime(this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond, this.microsecond, this.nanosecond)
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
    const { year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, timeZone, offset } = this;
    const date = `${signedpad(year,4)}-${pad(month,2)}-${pad(day,2)}`;
    const time = `${pad(hour,2)}:${pad(minute,2)}:${pad(second,2)}`;
    const subs = `${pad(millisecond,3)}${pad(microsecond,3)}${pad(nanosecond,3)}`;
    return `${date}T${time}.${subs}${offset}[${timeZone}]`;
  }
  toJSON() {
    return this.toString();
  }

  static fromString(isoString: string) {
    const { offset, timeZone, ...datetime } = parseZonedISO(isoString);
    const offsetMilliseconds = parseOffsetString(offset);
    let { ms, ns } = epochMSNS(datetime);
    ms -= offsetMilliseconds;

    const instant = Object.create(Instant.prototype);
    instant[DATA] = { ms, ns };

    const zoned = new ZonedDateTime(instant, timeZone);
    if (zoned.offset !== makeOffsetString(offsetMilliseconds)) throw new Error('invalid iso string (bad offset)');
    return zoned;
  }
  static isValidTimezone(timeZone: string) {
    try {
      new Intl.DateTimeFormat('en-ISO', { timeZone });
      return true;
    } catch(e) {
      return false;
    }
  }
}

const ISORE = /^([+-]?\d{4}\d*)-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T([01][0-9]|2[0-3]):([0-5][0-9])(?::([0-5][0-9]))?(?:\.(\d{3}|\d{6}|\d{9}))?([+-]\d{2}:?\d{2})\[([\w_\/]+)\]$/;
function parseZonedISO(isoString: string) {
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
  const timeZone = match[9];
  return { year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, offset, timeZone };
}

const FMTOPTS = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  millisecond: 'numeric',
  hour12: false
};
function getZonedInfo(ms: number, ns: number, timeZone: string): ZonedInfo {
  const fmt = new Intl.DateTimeFormat('en-iso', Object.assign({}, FMTOPTS, { timeZone }));
  const agg = fmt.formatToParts(new Date(ms)).reduce((agg, cur)=>{
    switch(cur.type) {
      case 'year': agg.year = +cur.value; break;
      case 'month': agg.month = +cur.value; break;
      case 'day': agg.day = +cur.value; break;
      case 'hour': agg.hour = +cur.value; break;
      case 'minute': agg.minute = +cur.value; break;
      case 'second': agg.second = +cur.value; break;
    }
    return agg;
  }, {} as { [key: string]: any });
  agg.millisecond = ms % 1e3;
  agg.microsecond = Math.floor(ns / 1e3);
  agg.nanosecond = Math.floor(ns % 1e3);
  agg.timeZone = fmt.resolvedOptions().timeZone;
  const equiv = Date.UTC(agg.year, agg.month - 1, agg.day, agg.hour, agg.minute, agg.second, agg.millisecond);
  agg.offsetMilliSeconds = equiv - ms;
  agg.offset = makeOffsetString(agg.offsetMilliSeconds);
  agg.dayOfWeek = toDayOfWeek(agg.year, agg.month, agg.day);
  agg.dayOfYear = toDayOfYear(agg.year, agg.month, agg.day);
  agg.weekOfYear = toWeekOfYear(agg.year, agg.month, agg.day);
  return agg as ZonedInfo;
}