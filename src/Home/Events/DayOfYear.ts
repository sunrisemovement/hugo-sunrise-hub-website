export type Format =
  | 'iso8601'
  | 'full'

export default class DayOfYear {
  private cachedNearestPreviousSunday: DayOfYear | null = null
  private cachedNearestNextSaturday: DayOfYear | null = null

  constructor(
    public readonly year: number,
    public readonly month: number,
    public readonly day: number
  ) {}

  public equals(other: DayOfYear): boolean {
    return this.year === other.year
      && this.month === other.month
      && this.day === other.day
  }

  public compare(other: DayOfYear): number {
    if (this.year < other.year) return -1
    else if (this.year > other.year) return 1
    else {
      if (this.month < other.month) return -1
      else if (this.month > other.month) return 1
      else {
        if (this.day < other.day) return -1
        else if (this.day > other.day) return 1
        else return 0
      }
    }
  }

  public nearestPreviousSunday(): DayOfYear {
    if (!this.cachedNearestPreviousSunday) {
      const date = this.toDate()
      date.setDate(date.getDate() - date.getDay())
      this.cachedNearestPreviousSunday = this.fromDate(date)
    }
    return this.cachedNearestPreviousSunday
  }

  public nearestNextSaturday(): DayOfYear {
    if (!this.cachedNearestNextSaturday) {
      const date = this.toDate()
      date.setDate(date.getDate() + (6 - date.getDay()))
      this.cachedNearestNextSaturday = this.fromDate(date)
    }
    return this.cachedNearestNextSaturday
  }

  public tomorrow(): DayOfYear {
    const date = this.toDate()
    date.setDate(date.getDate() + 1)
    return this.fromDate(date)
  }

  public toString(format?: Format) {
    switch (format) {
      case 'full':
        const date = this.toDate()
        const formatter = new Intl.DateTimeFormat('en-US', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })
        return formatter.format(date)
      case 'iso8601':
        return `${this.year}-${(this.month + 1).toString().padStart(2, '0')}-${this.day.toString().padStart(2, '0')}`
      default:
        return `<DayOfYear year=${this.year} month=${this.month}, day=${this.day}>`
    }
  }

  private toDate(): Date {
    return new Date(this.year, this.month, this.day)
  }

  private fromDate(date: Date): DayOfYear {
    return new DayOfYear(date.getFullYear(), date.getMonth(), date.getDate())
  }
}