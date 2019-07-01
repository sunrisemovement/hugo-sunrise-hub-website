import DayOfYear from './DayOfYear.js'

export default class DayRange implements Iterable<DayOfYear> {
  private final: DayOfYear
  private current: DayOfYear

  constructor(
    start: DayOfYear,
    end: DayOfYear
  ) {
    this.final = end.tomorrow()
    this.current = start
  }

  *[Symbol.iterator]() {
    while(!this.current.equals(this.final)) {
      yield this.current
      this.current = this.current.tomorrow()
    }
  }
}