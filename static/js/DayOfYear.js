//@ts-check

/**
 * @typedef {('iso8601' | 'full')} Format
 */

export default class DayOfYear {
  /**
   * @param {number} year
   * @param {number} month
   * @param {number} day
   */
  constructor(year, month, day) {
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
     * @type number
     */
    this._day = day

    /**
     * @private
     * @type (DayOfYear|null)
     */
    this._nearestPreviousSunday = null
    
    /**
     * @private
     * @type (DayOfYear|null)
     */
    this._nearestNextSaturday = null
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
   * @type number
   */
  get day() { return this._day }

  /**
   * @public
   * @param {DayOfYear} other
   * @returns boolean
   */
  equals(other) {
    return this._year === other._year
      && this._month === other._month
      && this._day === other._day
  }

  /**
   * @public
   * @param {DayOfYear} other
   * @returns number
   */
  compare(other) {
    if (this._year < other._year) return -1
    else if (this._year > other._year) return 1
    else {
      if (this._month < other._month) return -1
      else if (this._month > other._month) return 1
      else {
        if (this._day < other._day) return -1
        else if (this._day > other._day) return 1
        else return 0
      }
    }
  }

  /**
   * @public
   * @returns DayOfYear
   */
  nearestPreviousSunday() {
    if (!this._nearestPreviousSunday) {
      const date = this._toDate()
      date.setDate(date.getDate() - date.getDay())
      this._nearestPreviousSunday = this._fromDate(date)
    }
    return this._nearestPreviousSunday
  }

  /**
   * @public
   * @returns DayOfYear
   */
  nearestNextSaturday() {
    if (!this._nearestNextSaturday) {
      const date = this._toDate()
      date.setDate(date.getDate() + (6 - date.getDay()))
      this._nearestNextSaturday = this._fromDate(date)
    }
    return this._nearestNextSaturday
  }

  /**
   * @public
   * @returns DayOfYear
   */
  tomorrow() {
    const date = this._toDate()
    date.setDate(date.getDate() + 1)
    return this._fromDate(date)
  }

  /**
   * @public
   * @param {Format=} format
   */
  toString(format) {
    switch (format) {
      case 'full':
        const date = this._toDate()
        const formatter = new Intl.DateTimeFormat('en-US', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })
        return formatter.format(date)
      case 'iso8601':
        return `${this._year}-${(this._month + 1).toString().padStart(2, '0')}-${this._day.toString().padStart(2, '0')}`
      default:
        return `<DayOfYear year=${this._year} month=${this._month}, day=${this._day}>`
    }
  }

  /**
   * @private
   * @returns Date
   */
  _toDate() {
    return new Date(this._year, this._month, this._day)
  }

  /**
   * @param {Date} date
   * @returns DayOfYear
   */
  _fromDate(date) {
    return new DayOfYear(date.getFullYear(), date.getMonth(), date.getDate())
  }
}