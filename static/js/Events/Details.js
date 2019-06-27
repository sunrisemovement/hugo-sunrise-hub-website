//@ts-check

import { LitElement, html, css, TemplateResult, CSSResult } from 'https://unpkg.com/lit-element@2.2.0/lit-element.js?module'
import DayOfYear from './DayOfYear.js'
import Event from './Event.js'
import Map from './Map.js'
import Icon from './Icon.js'

/**
 * @type CSSResult
 */
const styles = css`
  :host {
    box-shadow: var(--elevation-box-shadow-01dp);
    background-color: var(--elevation-overlay-color-01dp);
    border-radius: var(--shape-border-radius);
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 100%;
  }
  * {
    box-sizing: border-box;
  }
  .selected-container {
    display: grid;
    grid-template-rows: 280px auto;
  }
  .empty-container {
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.6;
    width: 100%;
    height: 100%;
    padding: 64px;
    text-align: center;
  }
`

export default class Details extends LitElement {
  static async register() {
    if (!window.customElements.get('sunrise-events-details')) {
      window.customElements.define('sunrise-events-details', Details)
    }

    await Map.register()
    await Icon.register()
    await window.customElements.whenDefined('sunrise-events-details')
  }

  /**
   * @public
   * @type import('https://unpkg.com/lit-element@2.2.0/lit-element.js?module').PropertyDeclarations
   */
  static get properties() {
    return {
      selected: { attribute: false },
      hubName: { attribute: false },
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
     * @type Event | null
     * @public
     */
    this.selected = null

    /**
     * @type string
     * @public
     */
    this.hubName = ''
  }

  /**
   * @public
   * @returns TemplateResult
   */
  render() {
    return this.selected !== null ?
      html`
        <div class="selected-container">
          <a
            class="map-link"
            target="_blank"
            href="https://www.google.com/maps/place/${encodeURIComponent(this.selected.address)}">
            <sunrise-events-map
              .latitude=${this.selected.coordinate.latitude}
              .longitude=${this.selected.coordinate.longitude}>
            </sunrise-events-map>
          </a>
          <div class="info">
            <h3 class="title">${this.selected.title}</h3>
            <div class="icon">
              <sunrise-events-icon .icon=${'event'}></sunrise-events-icon>
            </div>
            <div class="detail-section">
              <p class="start-date">
                ${this.selected.date.toString('full')}
              </p>
              <p>
                ${this.selected.start.toString('full')} - ${this.selected.end.toString('full')}
              </p>
            </div>
            <div class="icon">
              <sunrise-events-icon .icon=${'place'}></sunrise-events-icon>
            </div>
            <div class="detail-section">
              <p class="location-name">
                ${this.selected.place}
              </p>
              <p>
                ${this.selected.address}
              </p>
            </div>
            ${this.selected.isAccessible ?
              html`
                <div class="icon">
                  <sunrise-events-icon .icon=${'accessible'}></sunrise-events-icon>
                </div>
                <div class="detail-section">
                  Wheelchair Accessible
                </div>
              ` : html``
            }
            <div class="icon">
              <sunrise-events-icon .icon=${'info'}></sunrise-events-icon>
            </div>
            <div class="detail-section info-details">
              {{ .details }}
            </div>
          </div>
        </div>
      ` :
      html`
        <div class="empty-container">
          Sunrise ${this.hubName} hasn't published any events yet. Check back later!
        </div>
      `
  }
}