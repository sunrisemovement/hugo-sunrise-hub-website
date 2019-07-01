import { LitElement, html, css, TemplateResult, CSSResult, property, customElement } from 'lit-element'
import { classMap } from 'lit-html/directives/class-map'
import DayOfYear from './DayOfYear'
import MonthOfYear from './MonthOfYear'
import DayRange from './DayRange'
import Event from './Event'

const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

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
  private month = MonthOfYear.now()

  private onDayClick(day: DayOfYear) {
    const label = day.toString('iso8601')
    const element = this.renderRoot.querySelector(`[data-day="${label}"]`)
    if (!element) return
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    })
  }

  private onNextMonthClick() {
    this.month = this.month.add(1)
  }

  private onPreviousMonthClick() {
    this.month = this.month.add(-1)
  }

  private eventsByDay(events: Array<Event>): Array<Array<Event>> {
    const map = events.reduce((memo, next) => {
      const key = next.date.toString('iso8601')
      const array = memo.has(key) ? memo.get(key) : []
      array.push(next)
      memo.set(key, array)
      return memo
    }, new Map())
    return Array
      .from(map.entries())
      .map(([k, v]) => v)
      .sort((l, r) => l[0].date.compare(r[0].date))
  }

  private onEventClick(event: Event) {
    this.selected = event
    this.dispatchEvent(new CustomEvent('select'))
  }

  protected render() {
    const eventDays = new Set(this.events.map(e => e.date.toString('iso8601')))

    /**
     * @type Array<DayOfYear>
     */
    const days = Array.from(new DayRange(
      this.month.firstDay().nearestPreviousSunday(),
      this.month.lastDay().nearestNextSaturday()
    ))

    return html`
      <div class="outer-card">
        <div class="inner-card">
          <div class="calendar">
            <div class="calendar-switcher">
              <button
                class="calendar-switcher-button"
                @click=${() => this.onPreviousMonthClick()}>
                <span class="icon">chevron_left</span>
              </button>
              <div>${this.month.formatForSwitcher()}</div>
              <button
                class="calendar-switcher-button"
                @click=${() => this.onNextMonthClick()}>
                <span class="icon">chevron_right</span>
              </button>
            </div>
            <div class="calendar-grid">
              ${weekdays.map(w => html`<div class="calendar-grid-weekday">${w}</div>`)}
              ${days.map(d => {
                const hasEvent = eventDays.has(d.toString('iso8601'))
                const outOfMonth = !this.month.contains(d)

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
                    <div class="events-day-group" data-day="${events[0].date.toString('iso8601')}">
                      <div class="events-day-heading">${events[0].date.toString('full')}</div>
                      <div class="events-inner-list">
                        ${events.map(e => {
                          return html`
                            <div
                              class=${classMap({ 'events-event': true, selected: this.selected === e })}
                              @click=${() => this.onEventClick(e)}>
                              <div class="events-event-title">${e.title}</div>
                              <div class="events-event-time">${e.time.toString('full')}</div>
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
      </div>
    `
  }

  public static styles = css`
    :host {
      display: block;
      min-height: 0;
      position: relative;
    }
    * {
      box-shadow: border-box;
    }
    .outer-card {
      background-color: var(--color-charcoal);
      border-radius: var(--shape-border-radius);
      box-shadow: var(--elevation-box-shadow-01dp);
      position: relative;
      height: 100%;
      position: relative;
      overflow: hidden;
    }
    .outer-card::after {
      position: absolute;
      z-index: 0;
      content: '';
      left: 0; right: 0; top: 0; bottom: 0;
      background-color: #fff;
      opacity: var(--elevation-overlay-opacity-01dp);
      border-radius: var(--shape-border-radius);
    }

    .inner-card {
      position: relative;
      z-index: 1;
      display: grid;
      grid-template-rows: auto minmax(0, 1fr);
      grid-auto-flow: row;
      height: 100%;
    }

    .calendar {
      background-color: var(--elevation-overlay-color-04dp);
      box-shadow: var(--elevation-box-shadow-03dp);
      z-index: 1;
      position: relative;
    }

    .calendar-switcher {
      display: grid;
      grid-template-columns: auto 1fr auto;
      grid-auto-flow: column;
      place-items: center;
      padding: 8px;
    }

    .calendar-switcher-button {
      background: 0;
      border: 0;
      outline: 0;
      padding: 4px;
      color: var(--color-willow);
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      cursor: pointer;
      font-size: 32px;
    }
      .calendar-switcher-button::before {
        position: absolute;
        content: '';
        background-color: var(--color-willow);
        opacity: 0;
        border-radius: 50%;
        left: 0; right: 0; top: 0; bottom: 0;
        pointer-events: none;
      }
      .calendar-switcher-button:hover::before {
        opacity: 0.04;
      }
      .calendar-switcher-button:active::before {
        opacity: 0.08;
      }

    .calendar-grid {
      display: grid;
      grid-template-columns: repeat(7, auto);
      grid-auto-flow: dense;
      place-items: center;
      padding: 8px;
    }

    .calendar-grid-weekday {
      padding: 8px 0;
    }

    .calendar-grid-day {
      line-height: 1;
      font-size: 20px;
      width: 48px;
      height: 48px;
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
        opacity: 1;
        background-color: var(--state-overlay-color-hover);
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
      background-color: var(--color-yellow);
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
      padding-bottom: 24px;
    }

    .events-day-group {
      position: relative;
    }
    .events-day-heading {
      position: -webkit-sticky;
      position: sticky;
      top: 0;
      background-color: var(--color-charcoal);
      padding: 16px;
      text-transform: uppercase;
      font-weight: 900;
    }
      .events-day-heading::before {
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        content: '';
        background-color: var(--elevation-overlay-color-01dp);
      }
    .events-inner-list {
      padding: 0 16px;
    }
    .events-event {
      padding: 16px;
      box-shadow: var(--elevation-box-shadow-01dp);
      border-radius: var(--shape-border-radius);
      background-color: var(--elevation-overlay-color-02dp);
      margin-bottom: 16px;
      cursor: pointer;
    }
      .events-event:last-child {
        margin-bottom: 0;
      }
      .events-event.selected {
        background-color: var(--state-overlay-color-selected);
        border: 2px solid var(--state-border-color-selected);
        padding: 14px;
      }
    .events-event-title {
      font-size: 20px;
      font-weight: 700;
    }
    .events-event-time {
      margin-bottom: 8px;
    }
    .events-event-place {
      padding-left: 4px;
      font-size: 18px;
    }
    .events-event-address {
      padding-left: 4px;
    }
  `
}