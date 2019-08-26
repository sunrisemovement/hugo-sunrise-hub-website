import { LitElement, html, css, property, query, customElement } from 'lit-element'
import Event from './Event'
import Calendar from './Calendar'
import Details from './Details'
import * as TemporalUtils from './TemporalUtils'

@customElement('sunrise-events')
export default class Events extends LitElement {
  private static dependencies = [ Calendar, Details ]

  @property({ attribute: false })
  public events: Array<Event> = []

  @property({ attribute: false })
  public selected: Event | null = null

  @property({ attribute: false })
  public hubName: string = ''

  @property({ attribute: false })
  public timezone: string = 'UTC'

  @query('sunrise-events-details')
  private details!: Details

  private firstSelected: boolean = false

  public async update(props: any) {
    super.update(props)
    if (props.has('events')) {
      if (this.events.length && this.selected === null) {
        this.firstSelected = true
        await this.updateComplete
        this.selected = this.sortedEvents()[0]
      }
    }
  }

  private sortedEvents(): Array<Event> {
    return Array.from(this.events).sort((a, b) => TemporalUtils.compare(a.start, b.start))
  }

  private onSelect = (event: CustomEvent) => {
    this.selected = (event.target as Calendar).selected
  }

  public render() {
    return html`
      <div class="calendar-container">
        <sunrise-events-calendar
          .events=${this.events}
          .selected=${this.selected}
          @select=${this.onSelect}>
        </sunrise-events-calendar>
      </div>
      <sunrise-events-details
        .selected=${this.selected}
        .hubName=${this.hubName}>
      </sunrise-events-details>
    `
  }

  static styles = css`
    :host {
      display: grid;
      position: relative;
      grid-template-columns: 4.5fr 5.5fr;
      grid-template-rows: 1fr;
      grid-column-gap: 16px;
      grid-auto-flow: column;
      min-height: 0;
    }
    .calendar-container {
      position: relative;
      min-height: 0;
    }
    sunrise-events-calendar {
      position: absolute;
      height: 100%;
    }
  `
}