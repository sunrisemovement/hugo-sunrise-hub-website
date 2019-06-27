//@ts-check

import DayOfYear from './DayOfYear.js'

export default class MonthOfYear {
  /**
   * @param {number} year 
   * @param {number} month 
   */
  constructor(year, month) {
    /**
     * @private
     * @type number
     */
    this._year = year

    /**
     * @private
     * @type number
     */
    this._month = month

    /**
     * @private
     * @type DayOfYear|null
     */
    this._first = null

    /**
     * @private
     * @type DayOfYear|null
     */
    this._last = null
  }

  /**
   * @public
   * @type number
   */
  get year() { return this._year }

  /**
   * @public
   * @type number
   */
  get month() { return this._month }

  /**
   * @public
   * @returns DayOfYear
   */
  firstDay() {
    if (!this._first) {
      const date = new Date(this._year, this._month, 1)
      this._first = new DayOfYear(date.getFullYear(), date.getMonth(), date.getDate())
    }
    return this._first
  }

  /**
   * @public
   * @returns DayOfYear
   */
  lastDay() {
    if (!this._last) {
      const date = new Date(this._year, this._month, 1)
      date.setMonth(date.getMonth() + 1)
      date.setDate(0)
      this._last = new DayOfYear(date.getFullYear(), date.getMonth(), date.getDate())
    }
    return this._last
  }

  /**
   * @public
   * @param {DayOfYear} day
   * @returns boolean
   */
  contains(day) {
    return this._year === day.year && this._month === day.month
  }

  /**
   * @public
   * @param {number} amount
   * @returns MonthOfYear
   */
  add(amount) {
    const date = new Date(this._year, this._month, 1)
    date.setMonth(date.getMonth() + amount)
    return new MonthOfYear(date.getFullYear(), date.getMonth())
  }
  
  /**
   * @public
   * @returns string
   */
  formatForSwitcher() {
    const formatter = new Intl.DateTimeFormat('en-US', {
      month: 'long',
      year: 'numeric'
    })
    const date = new Date(this._year, this._month)
    return formatter.format(date)
  }

  /**
   * @public
   * @returns MonthOfYear
   */
  static now() {
    const date = new Date()
    return new MonthOfYear(date.getFullYear(), date.getMonth())
  }
}