import DayOfYear from './DayOfYear'

export default class MonthOfYear {
  private cachedFirst: DayOfYear | null = null
  private cachedLast: DayOfYear | null = null

  constructor(
    public readonly year: number,
    public readonly month: number
  ) {}

  public firstDay(): DayOfYear {
    if (!this.cachedFirst) {
      const date = new Date(this.year, this.month, 1)
      this.cachedFirst = new DayOfYear(date.getFullYear(), date.getMonth(), date.getDate())
    }
    return this.cachedFirst
  }

  public lastDay(): DayOfYear {
    if (!this.cachedLast) {
      const date = new Date(this.year, this.month, 1)
      date.setMonth(date.getMonth() + 1)
      date.setDate(0)
      this.cachedLast = new DayOfYear(date.getFullYear(), date.getMonth(), date.getDate())
    }
    return this.cachedLast
  }

  public contains(day: DayOfYear): boolean {
    return this.year === day.year && this.month === day.month
  }

  public add(amount: number): MonthOfYear {
    const date = new Date(this.year, this.month, 1)
    date.setMonth(date.getMonth() + amount)
    return new MonthOfYear(date.getFullYear(), date.getMonth())
  }
  
  public formatForSwitcher(): string {
    const formatter = new Intl.DateTimeFormat('en-US', {
      month: 'long',
      year: 'numeric'
    })
    const date = new Date(this.year, this.month)
    return formatter.format(date)
  }

  public static now(): MonthOfYear {
    const date = new Date()
    return new MonthOfYear(date.getFullYear(), date.getMonth())
  }
}