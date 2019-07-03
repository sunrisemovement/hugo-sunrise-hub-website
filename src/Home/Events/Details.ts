import { LitElement, html, css, property, customElement } from 'lit-element'
import { unsafeHTML } from 'lit-html/directives/unsafe-html'
import Event from './Event'
import Map from './Map'
import Icon from './Icon'

@customElement('sunrise-events-details')
export default class Details extends LitElement {
  private static dependencies = [ Map, Icon ]

  @property({ attribute: false })
  public selected: Event | null = null

  @property({ attribute: false })
  public hubName = ''

  protected render() {
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
          <h3 class="title">${this.selected.title}</h3>
          <div class="info">
            <div class="icon">
              <sunrise-events-icon .icon=${'event'}></sunrise-events-icon>
            </div>
            <div class="detail-section">
              <p class="date">
                ${this.selected.date.toString('full')}
              </p>
              <p class="time">
                ${this.selected.time.toString('full')}
              </p>
            </div>
            <div class="icon">
              <sunrise-events-icon .icon=${'place'}></sunrise-events-icon>
            </div>
            <div class="detail-section">
              <p class="place">
                ${this.selected.place}
              </p>
              <p class="address">
                ${this.selected.address}
              </p>
            </div>
            <div class="icon">
              <sunrise-events-icon .icon=${'info'}></sunrise-events-icon>
            </div>
            <div class="detail-section info-details">
              ${unsafeHTML(this.selected.description)}
            </div>
          </div>
          <div class="actions">
            <a class="button" href="${this.selected.url}" target="_blank">
              <sunrise-events-icon .icon=${'launch'}></sunrise-events-icon>
              <span>RSVP</span>
            </a>
          </div>
        </div>
      ` :
      html`
        <div class="empty-container">
          Sunrise ${this.hubName} hasn't published any events yet. Check back later!
        </div>
      `
  }

  static styles = css`
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
      min-height: 0;
      height: 100%;
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

    .info {
      padding: 16px;
      padding-top: 0;
      display: grid;
      grid-template-columns: auto auto;
      grid-auto-flow: dense;
      min-height: 0;
      height: 100%;
      grid-column-gap: 16px;
      grid-row-gap: 12px;
    }

    .title {
      margin: 0;
      padding: 16px;
      font-size: 20px;
      line-height: 1;
    }

    .icon {
      font-family: 'Material Icons';
      font-weight: normal;
      font-style: normal;
      font-size: 24px;
      line-height: 1;
      letter-spacing: normal;
      text-transform: none;
      display: block;
      white-space: nowrap;
      word-wrap: normal;
      direction: ltr;
      font-feature-settings: 'liga';
      -webkit-font-feature-settings: 'liga';
      -webkit-font-smoothing: antialiased;
    }

    .date {
      font-size: 20px;
      margin: 0;
      line-height: 1;
    }

    .time {
      margin: 0;
    }

    .place {
      font-size: 20px;
      margin: 0;
      line-height: 1;
    }

    .address {
      margin: 0;
    }
    .info-details {
      overflow: auto;
      min-height: 0;
    }
    .info-details p {
      margin-top: 0;
      margin-bottom: 12px;
    }
    .info-details div:last-child p {
      margin-bottom: 0;
    }
    .actions {
      padding: 16px;
      padding-top: 0;
    }
    .button {
      display: inline-grid;
      grid-template-columns: auto auto;
      grid-column-gap: 4px;
      padding: 8px 12px;
      border-radius: var(--shape-border-radius);
      box-shadow: var(--elevation-box-shadow-01dp);
      background-color: var(--color-yellow);
      color: var(--color-charcoal);
      text-decoration: none;
      font-weight: 700;
      min-width: 84px;
      place-items: center;
    }
  `
}