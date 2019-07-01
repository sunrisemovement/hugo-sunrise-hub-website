import { LitElement, html, css, property, customElement } from 'lit-element'
import Event from './Event'
import Calendar from './Calendar'
import Details from './Details'

@customElement('sunrise-events')
export default class Events extends LitElement {
  private static dependencies = [ Calendar, Details ]

  @property({ attribute: false })
  public events: Array<Event> = []

  @property({ attribute: false })
  public selected: Event | null = null

  @property({ attribute: false })
  public hubName: string = ''

  public async update(props: any) {
    super.update(props)
    if (props.has('events')) {
      if (this.events.length && this.selected === null) {
        await this.updateComplete
        this.selected = this.sortedEvents()[0]
      }
    }
  }

  private sortedEvents(): Array<Event> {
    return this.events.sort((a, b) => a.date.compare(b.date))
  }

  private onSelect = (event: CustomEvent) => {
    this.selected = (event.target as Calendar).selected
  }

  public render() {
    return html`
      <sunrise-events-calendar
        .events=${this.events}
        .selected=${this.selected}
        @select=${this.onSelect}>
      </sunrise-events-calendar>
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
      grid-column-gap: 16px;
      grid-auto-flow: column;
      min-height: 0;
    }
  `
}