//@ts-check

/**
 * @typedef {'full'|'iso8601'} Format
 */

export default class TimeOfDay {
  /**
   * @param {number} millis
   */
  constructor(millis) {
    /**
     * @private
     * @type number
     */
    this._millis = millis
  }

  /**
   * @public
   * @param {Format|undefined} format
   * @returns string
   */
  toString(format) {
    switch(format) {
      case 'full': {
        const date = new Date(this._millis)
        const formatter = new Intl.DateTimeFormat('en-US', {
          hour12: true,
          hour: 'numeric',
          minute: '2-digit',
        })
        return formatter.format(date)
      }
      case 'iso8601': {
        throw new Error('not implemented')
      }
      default:
        return `<TimeOfDay millis=${this._millis}>`
    }
  }
}