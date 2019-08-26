import { LitElement, html, css, property, query, customElement } from 'lit-element'
import { unsafeHTML } from 'lit-html/directives/unsafe-html'
import { classMap } from 'lit-html/directives/class-map'
import Event from './Event'
import Map from './Map'
import Icon from './Icon'
import * as TemporalUtils from './TemporalUtils'
import VisibilityTracker from '../../Components/VisibilityTracker'

@customElement('sunrise-events-details')
export default class Details extends LitElement {
  private static dependencies = [ Map, Icon, VisibilityTracker ]

  @property({ attribute: false })
  public selected: Event | null = null

  @property({ attribute: false })
  public hubName = ''

  @property({ attribute: false })
  private topHidden: boolean = false
  @property({ attribute: false })
  private bottomHidden: boolean = false

  @query('.description')
  private description!: HTMLDivElement

  private onTopIntersectionChange = (e: UIEvent) => {
    const target = e.target as VisibilityTracker
    this.topHidden = !target.visible
  }
  private onBottomIntersectionChange = (e: UIEvent) => {
    const target = e.target as VisibilityTracker
    this.bottomHidden = !target.visible
  }

  protected render() {
    return this.selected !== null ?
      html`
        <div class="selected-container">
          <a
            class="map-link"
            target="_blank"
            href="https://www.google.com/maps/place/${encodeURIComponent(this.selected.address)}">
            <!-- <sunrise-events-map
              .latitude=${this.selected.coordinate.latitude}
              .longitude=${this.selected.coordinate.longitude}>
            </sunrise-events-map> -->
          </a>
          <div class="content">
            <h3 class="title">${this.selected.title}</h3>
            <time class="time">
              ${TemporalUtils.fullDateString(this.selected.start)} • ${TemporalUtils.fullTimeString(this.selected.start)}
            </time>
            <div class="location">
              <sunrise-events-icon
                class="location-icon"
                .icon=${'place'}>
              </sunrise-events-icon>
              <p class="location-name">${this.selected.place}</p>
              <p class="location-address">${this.selected.address}</p>
            </div>
            <div class="description-outer">
              <div
                class=${classMap({
                  'description': true,
                  'description-top-shadow': this.topHidden,
                  'description-bottom-shadow': this.bottomHidden,
                })}>
                <sunrise-visibility-tracker
                  .target=${this.description}
                  class="description-top"
                  @intersectionchange=${this.onTopIntersectionChange}>
                </sunrise-visibility-tracker>
                <div class="description-content">
                  ${unsafeHTML(this.selected.description)}
                </div>
                <sunrise-visibility-tracker
                  .target=${this.description}
                  class="description-bottom"
                  @intersectionchange=${this.onBottomIntersectionChange}>
                </sunrise-visibility-tracker>
              </div>
            </div>
            <div>
              <a
                target="_blank"
                class="rsvp"
                href=${this.selected.url}>
                RSVP
              </a>
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

  static styles = css`
    :host {
      border-radius: var(--shape-border-radius);
      overflow: hidden;
      position: relative;
      width: 100%;
      height: 100%;
      max-height: 90vh;
      min-height: 0;
      border: 1px solid rgba(0,0,0,0.12);
    }
    * {
      box-sizing: border-box;
    }
    .location {
      display: grid;
      grid-template-rows: auto auto;
      grid-template-columns: 24px auto;
      grid-column-gap: 16px;
      grid-row-gap: 4px;
      padding-bottom: 24px;
      border-bottom: 1px solid rgba(0,0,0,0.12);
      margin-bottom: 16px;
    }
    .location-icon {
      grid-row: 1 / span 2;
      grid-column: 1;
      place-self: center;
    }
    .location-name {
      font-size: 14px;
      letter-spacing: 0.1px;
      font-weight: 600;
      grid-row: 1;
      grid-column: 2;
      margin: 0;
    }
    .location-address {
      font-size: 14px;
      letter-spacing: 0.25px;
      color: rgba(0,0,0,0.6);
      grid-row: 2;
      grid-column: 2;
      margin: 0;
    }
    .selected-container {
      display: grid;
      grid-template-rows: 280px minmax(0, auto);
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
    .content {
      padding: 16px;
      padding-bottom: 8px;
      display: grid;
      grid-auto-flow: row;
      grid-template-rows: auto auto auto 1fr auto;
    }
    .title {
      font-size: 20px;
      margin: 0;
      font-weight: 600;
      margin-bottom: 4px;
    }
    .time {
      font-size: 14px;
      letter-spacing: 0.25px;
      color: rgba(0,0,0,0.6);
      margin-bottom: 16px;
      display: block;
    }
    .divider {
      height: 1px;
      background-color: rgba(0,0,0,0.12);
      margin-top: 24px;
      margin-bottom: 16px;
      border: 0;
    }
    .description-outer {
      min-height: 0;
      position: relative;
    }
    .description {
      overflow-y: auto;
      position: absolute;
      font-size: 14px;
      color: rgba(0,0,0,0.6);
      letter-spacing: 0.25px;
      height: 100%;
      width: 100%;
      position: relative;
    }
    .description-bottom-shadow {
      box-shadow: inset 0px -8px 9px -8px rgba(0,0,0,0.2);
    }
    .description-top-shadow {
      box-shadow: inset 0px 8px 9px -8px rgba(0,0,0,0.2);
    }
    .description-bottom-shadow.description-top-shadow {
      box-shadow: inset 0px -8px 9px -8px rgba(0,0,0,0.2), inset 0px 8px 9px -8px rgba(0,0,0,0.2);
    }
    .description-content > p:first-child {
      margin-top: 0;
    }
    .description-content > p:last-child {
      margin-bottom: 0;
    }
    .description-content > div:last-child p {
      margin-bottom: 0;
    }
    .description-content strong {
      font-weight: 600;
    }
    .rsvp {
      outline: 0;
      background: none;
      border: none;
      padding: 0 8px;
      height: 36px;
      line-height: 36px;
      border-radius: 4px;
      overflow: hidden;
      display: inline-block;
      font-size: 14px;
      color: rgba(0,0,0,0.6);
      letter-spacing: 1.25px;
      text-align: center;
      font-family: inherit;
      text-decoration: none;
      cursor: pointer;
      font-weight: 600;
      text-transform: uppercase;
      margin-top: 24px;
    }
    .rsvp:hover {
      background-color: rgba(0,0,0,0.04);
      color: rgba(0,0,0,0.87);
    }
    .rsvp:active {
      background-color: rgba(0,0,0,0.12);
    }
    .description-top {
      height: 1px;
      margin-bottom: -1px;
      position: relative;
    }
    .description-bottom {
      height: 1px;
      margin-top: -1px;
      position: relative;
    }
  `
}