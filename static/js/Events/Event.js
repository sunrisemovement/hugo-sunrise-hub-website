// @ts-check

import DayOfYear from './DayOfYear.js'
import TimeOfDay from './TimeOfDay.js'

const MILLIS_IN_A_DAY = 1000 * 60 * 60 * 24

/**
 * @typedef {Object} Coordinate
 * @property {number} latitude
 * @property {number} longitude
 */

export default class Event {
  /**
   * @param {Object} data
   * @param {string} data.title
   * @param {string} data.start
   * @param {string} data.end
   * @param {string} data.details
   * @param {boolean} data.is_accessibe
   * @param {Object} data.location
   * @param {string} data.location.name
   * @param {string} data.location.address
   * @param {Object} data.location.coordinates
   * @param {number} data.location.coordinates.latitude
   * @param {number} data.location.coordinates.longitude
   */
  constructor({
    title,
    start,
    end,
    details,
    is_accessibe,
    location,
  }) {
    const startDate = new Date(start)
    const endDate = new Date(end)

    /**
     * @private
     * @type string
     */
    this._title = title

    /**
     * @private
     * @type DayOfYear
     */
    this._date = new DayOfYear(
      startDate.getFullYear(),
      startDate.getMonth(),
      startDate.getDate()
    )

    /**
     * @private
     * @type TimeOfDay
     */
    this._start = new TimeOfDay(startDate.valueOf() % MILLIS_IN_A_DAY)
    
    /**
     * @private
     * @type TimeOfDay
     */
    this._end = new TimeOfDay(endDate.valueOf() % MILLIS_IN_A_DAY)

    /**
     * @private
     * @type string
     */
    this._place = location.name

    /**
     * @private
     * @type string
     */
    this._address = location.address

    /**
     * @private
     * @type Coordinate
     */
    this._coordinate = location.coordinates

    /**
     * @private
     * @type boolean
     */
    this._isAccessible = is_accessibe

    /**
     * @private
     * @type 
     */
  }
  
  /**
   * @pubilc
   * @type string
   */
  get title() { return this._title }

  /**
   * @public
   * @type DayOfYear
   */
  get date() { return this._date }

  /**
   * @public
   * @type TimeOfDay
   */
  get start() { return this._start }

  /**
   * @public
   * @type TimeOfDay
   */
  get end() { return this._end }

  /**
   * @public
   * @type string
   */
  get place() { return this._place }

  /**
   * @public
   * @type string
   */
  get address() { return this._address }

  /**
   * @public
   * @type Coordinate
   */
  get coordinate() { return this._coordinate }

  /**
   * @public
   * @type boolean
   */
  get isAccessible() { return this._isAccessible }
}