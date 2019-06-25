//@ts-check

import DayOfYear from './DayOfYear.js'

/**
 * @augments Iterable<DayOfYear>
 */
export default class DayRange {
  /**
   * @param {DayOfYear} start
   * @param {DayOfYear} end 
   */
  constructor(start, end) {
    /**
     * @private
     * @type DayOfYear
     */
    this._final = end.tomorrow()
    this._current = start
  }

  /**
   * @returns Iterator<DayOfYear>
   */
  *[Symbol.iterator]() {
    while(!this._current.equals(this._final)) {
      yield this._current
      this._current = this._current.tomorrow()
    }
  }
}