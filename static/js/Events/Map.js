//@ts-check

import { LitElement, html, css, TemplateResult, CSSResult } from 'https://unpkg.com/lit-element@2.2.0/lit-element.js?module'
import * as L from 'https://unpkg.com/leaflet@1.5.1/dist/leaflet-src.esm.js?module'

const styles = css`
  :host {
    display: block;
    height: 100%;
    width: 100%;
    min-width: 0;
    min-height: 0;
    position: relative;
  }

  .container {
    width: 100%;
    height: 100%;
    pointer-events: none !important;
    position: relative;
  }

  .icon {
    width: 32px;
    height: 32px;
    font-family: Material Icons;
    color: var(--color-yellow);
    font-size: 32px;
    line-height: 1;
    text-shadow: 0 1px 6px rgba(0,0,0,0.4);
    pointer-events: none !important;
  }
`

export default class Map extends LitElement {
  static register() {
    if (!window.customElements.get('sunrise-events-map')) {
      window.customElements.define('sunrise-events-map', Map)
    }

    return window.customElements.whenDefined('sunrise-events-map')
  }

  static get properties() {
    return {
      latitude: { attribute: false },
      longitude: { attribute: false },
    }
  }

  static get styles() {
    return styles
  }

  constructor() {
    super()
    this.latitude = 0
    this.longitude = 0
    this._map = null
    this._marker = null
    this._container = document.createElement('div')
    this._container.className = 'container'
  }

  connectedCallback() {
    super.connectedCallback()
    this._map = L.map(this._container, {
      zoomControl: false,
      keyboard: false
    })
    L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
      attribution: 'Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL.'
    }).addTo(this._map)

    const icon = L.divIcon({ html: 'place', className: 'icon', iconSize: [32, 32], iconAnchor: [16, 32] })
    this._marker = L.marker([0, 0], { icon })
    this._marker.addTo(this._map)

    this._updateCenter()
    setTimeout(() => {
      this._map.invalidateSize()
    })
  }

  update(props) {
    super.update(props)
    this._map && this._updateCenter()
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this._map && this._map.remove()
    this._map = null
    this._marker = null
  }

  _updateCenter() {
    this._map.setView([this.latitude, this.longitude], 17)
    this._marker.setLatLng([this.latitude, this.longitude])
  }

  render() {
    return html`
      <link href="https://unpkg.com/leaflet@1.5.1/dist/leaflet.css" rel="stylesheet" />
      ${this._container}
    `
  }
}