import { DATA, calculate, pad, TimeLike } from './Shared'
import { castDuration, DurationLike } from './Duration'

export class CivilTime {
  [DATA]: Required<TimeLike>
  [Symbol.toStringTag] = 'CivilTime'

  constructor(
    hours: number,
    minutes: number,
    seconds = 0,
    milliseconds = 0,
    microseconds = 0,
    nanoseconds = 0
  ) {
    this[DATA] = calculate({}, { hours, minutes, seconds, milliseconds, microseconds, nanoseconds}, false)
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

  with(timeLike: TimeLike = {}) {
    const { hour, minute, second, millisecond, microsecond, nanosecond } = Object.assign({}, this, timeLike)
    return new CivilTime(hour, minute, second, millisecond, microsecond, nanosecond);
  }
  plus(durationLike: DurationLike = {}) {
    const duration = castDuration(durationLike);
    const { hour, minute, second, millisecond, microsecond, nanosecond } = calculate(this, duration, false);
    return new CivilTime(hour, minute, second, millisecond, microsecond, nanosecond);
  }
  minus(durationLike: DurationLike = {}) {
    const duration = castDuration(durationLike);
    const { hour, minute, second, millisecond, microsecond, nanosecond } = calculate(this, duration, true);
    return new CivilTime(hour, minute, second, millisecond, microsecond, nanosecond);
  }
  difference(other: TimeLike = {}) {
    const [ one, two ] = [ this, new CivilTime(0,0).with(other) ].sort(compare)
    let hours = two.hour - one.hour
    let minutes = two.minute - one.minute
    let seconds = two.second - one.second
    let milliseconds = two.millisecond - one.millisecond
    let microseconds = two.microsecond - one.microsecond
    let nanoseconds = two.nanosecond - one.nanosecond

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

    return castDuration({
      hours, minutes, seconds,
      milliseconds, microseconds, nanoseconds
    })
  }

  toString() {
    const { hour, minute, second, millisecond, microsecond, nanosecond } = this;
    const subs = `${`000${millisecond}`.slice(-3)}${`000${microsecond}`.slice(-3)}${`000${nanosecond}`.slice(-3)}`;
    return `${pad(hour,2)}:${pad(minute,2)}:${pad(second,2)}.${subs}`;
  }
  toJSON() {
    return this.toString();
  }

  static fromString(timeString: string) {
    const { hour, minute, second, millisecond, microsecond, nanosecond } = parseISO(timeString);
    return new CivilTime(hour, minute, second, millisecond, microsecond, nanosecond);
  }
}

const ISORE = /^([01][0-9]|2[0-3]):([0-5][0-9])(?::([0-5][0-9]))?(?:\.(\d{3}|\d{6}|\d{9}))?$/;
function parseISO(isoStr: string) {
  const match = ISORE.exec(isoStr);
  if (!match) throw new Error('invalid argument');
  const hour = +match[1];
  const minute = +match[2];
  const second = +`00${match[3] || ''}`.slice(-2);
  const subs = +`${match[4] || ''}000000000`.slice(0, 9);
  const nanosecond = Math.floor(subs / 1e0) % 1000;
  const microsecond = Math.floor(subs / 1e3) % 1000;
  const millisecond = Math.floor(subs / 1e6) % 1000;
  return { hour, minute, second, millisecond, microsecond, nanosecond };
}

function compare(one: CivilTime, two: CivilTime) {
  if (one.hour !== two.hour) return two.hour - one.hour;
  if (one.minute !== two.minute) return two.minute - one.minute;
  if (one.second !== two.second) return two.second - one.second;
  if (one.millisecond !== two.millisecond) return two.millisecond - one.millisecond;
  if (one.microsecond !== two.microsecond) return two.microsecond - one.microsecond;
  if (one.nanosecond !== two.nanosecond) return two.nanosecond - one.nanosecond;
  return 0;
}