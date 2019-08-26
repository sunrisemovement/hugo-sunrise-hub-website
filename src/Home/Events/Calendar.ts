import { LitElement, html, css, TemplateResult, CSSResult, property, customElement } from 'lit-element'
import { classMap } from 'lit-html/directives/class-map'
import Event from './Event'
import { CivilYearMonth, Duration, CivilDate, CivilDateTime } from '../../Temporal'
import * as TemporalUtils from './TemporalUtils'

class MonthRange {
  constructor(
    private month: CivilYearMonth
  ) {}

  *[Symbol.iterator]() {
    const firstOfMonth = this.month.withDay(1)
    const lastOfMonth = this.month.plus({ months: 1 }).withDay(1).minus({ days: 1 })
    const startingSaturday = firstOfMonth.minus({ days: firstOfMonth.dayOfWeek })
    const endingSunday = lastOfMonth.plus({ days: 7 - lastOfMonth.dayOfWeek })
    let current = startingSaturday
    while (
      current.year !== endingSunday.year
      || current.month !== endingSunday.month
      || current.day !== endingSunday.day
    ) {
      yield current
      current = current.plus({ days: 1 })
    }
  }
}

const thisMonth = () => {
  const now = new Date()
  return new CivilYearMonth(
    now.getFullYear(),
    now.getMonth() + 1,
  )
}

const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

const formatMonthForSwitcher = (month: CivilYearMonth) => {
  const date = new Date(month.year, month.month - 1)
  const formatter = new Intl.DateTimeFormat('en-iso', {
    year: 'numeric',
    month: 'long'
  })
  return formatter.format(date)
}

const formatDateForHeader = (date: CivilDate) => {
  const d = new Date(date.year, date.month -1, date.day)
  const formatter = new Intl.DateTimeFormat('en-iso', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  return formatter.format(d)
}

const monthContains = (month: CivilYearMonth, date: CivilDate) => {
  return month.year === date.year && month.month === date.month
}

@customElement('sunrise-events-calendar')
export default class Calendar extends LitElement {
  static register() {
    if (!window.customElements.get('sunrise-events-calendar')) {
      window.customElements.define('sunrise-events-calendar', Calendar)
    }

    return window.customElements.whenDefined('sunrise-events-calendar')
  }

  @property({ attribute: false })
  public events: Array<Event> = []

  @property({ attribute: false })
  public selected: Event | null = null

  @property({ attribute: false })
  private month = thisMonth()

  private onDayClick(day: CivilDate) {
    this.month = day.getCivilYearMonth()
    const label = day.toString()
    const element = this.renderRoot.querySelector(`[data-day="${label}"]`)
    if (!element) return
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    })
  }

  private onNextMonthClick() {
    this.month = this.month.plus({ months: 1 })
  }

  private onPreviousMonthClick() {
    this.month = this.month.minus({ months: 1 })
  }

  private eventsByDay(events: Array<Event>): Array<Array<Event>> {
    const map = events.reduce((memo, next) => {
      const key = next.start.getCivilDate().toString()
      const array = memo.has(key) ? memo.get(key) : []
      array.push(next)
      memo.set(key, array)
      return memo
    }, new Map())
    return Array
      .from(map.entries())
      .map(([k, v]) => v)
      .sort((l: Array<Event>, r: Array<Event>) => {
        const left = l[0].start.getCivilDate().toString()
        const right = r[0].start.getCivilDate().toString()
        if (left > right) return 1
        else if (left < right) return -1
        else return 0
      })
  }

  private onEventClick(event: Event) {
    this.selected = event
    this.dispatchEvent(new CustomEvent('select'))
  }

  protected render() {
    const eventDays = new Set(this.events.map(e => e.start.getCivilDate().toString()))

    const days = Array.from(new MonthRange(this.month))

    return html`
      <div class="card">
        <div class="calendar">
          <div class="calendar-switcher">
            <button
              class="calendar-switcher-button"
              @click=${() => this.onPreviousMonthClick()}>
              <sunrise-events-icon
                class="button-icon"
                .icon=${'chevron_left'}>
              </sunrise-events-icon>
            </button>
            <div>${formatMonthForSwitcher(this.month)}</div>
            <button
              class="calendar-switcher-button"
              @click=${() => this.onNextMonthClick()}>
              <sunrise-events-icon
                class="button-icon"
                .icon=${'chevron_right'}>
              </sunrise-events-icon>
            </button>
          </div>
          <div class="calendar-grid">
            ${weekdays.map(w => html`<div class="calendar-grid-weekday">${w}</div>`)}
            ${days.map(d => {
              const hasEvent = eventDays.has(d.toString())
              const outOfMonth = !monthContains(this.month, d)

              if (hasEvent) {
                return html`
                  <button
                    class="calendar-grid-day has-event ${outOfMonth ? 'out-of-month' : ''}"
                    @click=${() => this.onDayClick(d)}>
                    <span class="calendar-grid-number has-event">${d.day}</span>
                    <span class="calendar-grid-event-marker"></span>
                  </button>
                `
              }

              return html`
                <div class="calendar-grid-day ${outOfMonth ? 'out-of-month' : ''}">
                  <span class="calendar-grid-number">${d.day}</span>
                </div>
              `
            })}
          </div>
        </div>
        ${this.events.length ?
          html`
            <div class="events" data-events-scroll>
              ${this.eventsByDay(this.events).map((events) => {
                return html`
                  <div class="events-day-group" data-day="${events[0].start.getCivilDate().toString()}">
                    <div class="events-day-heading">${formatDateForHeader(events[0].start.getCivilDate())}</div>
                    <div class="events-inner-list">
                      ${events.map(e => {
                        return html`
                          <div
                            class=${classMap({ 'events-event': true, selected: this.selected === e })}
                            @click=${() => this.onEventClick(e)}>
                            <time
                              datetime=${e.start.getCivilDate().toString()}
                              class="events-event-title">
                              ${e.title}
                            </time>
                            <time
                              datetime=${e.start.getCivilTime().toString()}
                              class="events-event-time">
                              ${TemporalUtils.fullTimeString(e.start)}
                            </time>
                            <div class="events-event-place">${e.place}</div>
                            <div class="events-event-address">${e.address}</div>
                          </div>
                        `
                      })}
                    </div>
                  </div>
                `
              })}
            </div>
          ` :
          html``
        }
      </div>
    `
  }

  public static styles = css`
    :host {
      display: block;
      min-height: 0;
      position: relative;
      height: 100%;
      width: 100%;
    }
    * {
      box-shadow: border-box;
    }
    .card {
      position: relative;
      z-index: 1;
      display: grid;
      grid-template-rows: auto minmax(0px, auto);
      grid-auto-flow: row;
      border-radius: var(--shape-border-radius);
      position: relative;
      overflow: hidden;
      border: 1px solid rgba(0,0,0,0.12);
      min-height: 0;
      height: 100%;
      width: 100%;
    }

    .calendar {
      z-index: 1;
      position: relative;
    }

    .calendar-switcher {
      display: grid;
      grid-template-columns: auto 1fr auto;
      grid-auto-flow: column;
      place-items: center;
    }

    .calendar-switcher-button {
      background: 0;
      border: 0;
      outline: 0;
      padding: 4px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      cursor: pointer;
      font-size: 32px;
      border-radius: 50%;
    }
      .calendar-switcher-button:hover {
        background-color: rgba(0,0,0,0.04);
      }
      .calendar-switcher-button:active {
        background-color: rgba(0,0,0,0.12);
      }

    .calendar-grid {
      display: grid;
      grid-template-columns: repeat(7, 36px);
      grid-template-rows: repeat(auto-fill, 36px);
      grid-auto-flow: dense;
      place-items: center;
      grid-column-gap: 4px;
      grid-row-gap: 4px;
      place-content: center;
    }

    .calendar-grid-weekday, .calendar-grid-day {
      line-height: 1;
      font-size: 16px;
      width: 36px;
      height: 36px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border: 0;
      background: 0;
      outline: 0;
      color: inherit;
      font-family: inherit;
      border-radius: 50%;
    }
      .calendar-grid-day.out-of-month {
        opacity: 0.6;
      }
      .calendar-grid-day.has-event {
        cursor: pointer;
      }
      .calendar-grid-day.has-event:hover {
        background-color: rgba(0,0,0,0.04);
      }
    
    .calendar-grid-weekday {
      color: rgba(0,0,0,0.6);
    }

    .calendar-grid-number {
      margin-bottom: 10px;
    }

    .calendar-grid-number.has-event {
      margin-bottom: 4px;
    }

    .calendar-grid-event-marker {
      width: 6px;
      height: 6px;
      display: block;
      border-radius: 50%;
      background-color: rgba(0,0,0,0.87);
    }

    .icon {
      font-family: Material Icons;
      font-weight: normal;
      font-style: normal;
      line-height: 1;
      letter-spacing: normal;
      text-transform: none;
      display: inline-block;
      white-space: nowrap;
      word-wrap: normal;
      direction: ltr;
      -webkit-font-feature-settings: 'liga';
      font-feature-settings: 'liga';
      -webkit-font-smoothing: antialiased;
    }

    .events {
      overflow-y: auto;
      overflow-x: hidden;
      border-bottom-left-radius: var(--shape-border-radius);
      border-bottom-right-radius: var(--shape-border-radius);
      min-height: 0;
      position: relative;
    }

    .events-day-group {
      position: relative;
    }
    .events-day-heading {
      position: -webkit-sticky;
      position: sticky;
      top: 0;
      padding: 16px;
      font-weight: 600;
      font-size: 14px;
      letter-spacing: 0.1px;
      background-color: #fff;
      border-bottom: 1px solid rgba(0,0,0,0.12);
    }
    .events-event {
      padding: 16px;
      cursor: pointer;
      border-bottom: 1px solid rgba(0,0,0,0.12);
      display: grid;
      grid-template-columns: 1fr auto;
      grid-column-gap: 8px;
      grid-template-rows: auto auto auto;
    }
      .events-event.selected {
        background-color: rgba(0,0,0,0.12);
      }
    .events-event-title {
      font-size: 16px;
      letter-spacing: 0.15px;
      grid-row: 1;
      grid-column: 1;
      white-space: nowrap;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .events-event-time {
      grid-row: 1;
      grid-column: 2;
      font-size: 12px;
      letter-spacing: 0.4px;
      color: rgba(0,0,0,0.6);
      align-self: center;
    }
    .events-event-place {
      font-size: 14px;
      color: rgba(0,0,0,0.6);
      letter-spacing: 0.25px;
      grid-column: 1 / 2;
      grid-row: 2;
      white-space: nowrap;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .events-event-address {
      font-size: 14px;
      color: rgba(0,0,0,0.6);
      letter-spacing: 0.25px;
      grid-column: 1 / 2;
      grid-row: 3;
      white-space: nowrap;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .button-icon {
      width: 24px;
      height: 24px;
      color: rgba(0,0,0,0.6);
    }
  `
}