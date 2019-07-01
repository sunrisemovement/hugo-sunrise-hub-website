export type Format =
  | 'iso8601'
  | 'full'

export default class TimeOfDay {
  constructor(
    private millis: number
  ) {}

  /**
   * @public
   * @param {Format|undefined} format
   * @returns string
   */
  public toString(format?: Format): string {
    switch(format) {
      case 'full': {
        const date = new Date(this.millis)
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
        return `<TimeOfDay millis=${this.millis}>`
    }
  }
}