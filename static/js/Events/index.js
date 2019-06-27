//@ts-check

import { LitElement, html, css, TemplateResult, CSSResult } from 'https://unpkg.com/lit-element@2.2.0/lit-element.js?module'
import Event from './Event.js'
import Calendar from './Calendar.js'
import Details from './Details.js'

/**
 * @type CSSResult
 */
const styles = css`
  :host {
    display: grid;
    position: relative;
    grid-template-columns: 4.5fr 5.5fr;
    grid-column-gap: 16px;
    grid-auto-flow: column;
    min-height: 0;
  }
`

export default class Events extends LitElement {
  /**
   * @public
   * @returns Promise<void>
   */
  static async register() {
    if (!window.customElements.get('sunrise-events')) {
      window.customElements.define('sunrise-events', Events)
    }

    await Details.register()
    await Calendar.register()
    await window.customElements.whenDefined('sunrise-events')
  }

  /**
   * @public
   * @type import('https://unpkg.com/lit-element@2.2.0/lit-element.js?module').PropertyDeclarations
   */
  static get properties() {
    return {
      events: { attribute: false },
      selected: { attribute: false },
      hubName: { attribute: false }
    }
  }

  /**
   * @public
   * @type CSSResult
   */
  static get styles() {
    return styles
  }

  constructor() {
    super()

    /**
     * @public
     * @type Array<Event>
     */
    this.events = []

    /**
     * @public
     * @type Event | null
     */
    this.selected = null

    /**
     * @public
     * @type string
     */
    this.hubName = ''
  }

  /**
   * @public
   * @param {Map<string, any>} props
   */
  async update(props) {
    super.update(props)
    if (props.has('events')) {
      if (this.events.length && this.selected === null) {
        await this.updateComplete
        this.selected = this._sortedEvents()[0]
      }
    }
  }

  _sortedEvents() {
    return this.events.sort((a, b) => a.date.compare(b.date))
  }

  /**
   * @private
   * @param {CustomEvent} event
   */
  _onSelect(event) {
    this.selected = /** @type Calendar */(event.target).selected
  }


  /**
   * @public
   * @returns TemplateResult
   */
  render() {
    console.log(this.selected)
    return html`
      <sunrise-events-calendar
        .events=${this.events}
        .selected=${this.selected}
        @select=${(e) => this._onSelect(e)}>
      </sunrise-events-calendar>
      <sunrise-events-details
        .selected=${this.selected}
        .hubName=${this.hubName}>
      </sunrise-events-details>
    `
  }
}