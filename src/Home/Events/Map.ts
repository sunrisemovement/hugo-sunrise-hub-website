import { LitElement, html, css, property, customElement } from 'lit-element'

@customElement('sunrise-events-map')
export default class Map extends LitElement {
  @property({ attribute: false })
  public latitude: number = 0

  @property({ attribute: false })
  public longitude: number = 0

  private map: L.Map | null = null
  private marker: L.Marker | null = null
  private container: HTMLDivElement = document.createElement('div')

  async connectedCallback() {
    super.connectedCallback()
    this.container.className = 'container'
    const L = await import('leaflet')
    this.map = L.map(this.container, {
      zoomControl: false,
      keyboard: false
    })
    L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
      attribution: 'Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL.'
    }).addTo(this.map)

    const icon = L.divIcon({ html: 'place', className: 'icon', iconSize: [32, 32], iconAnchor: [16, 32] })
    this.marker = L.marker([0, 0], { icon })
    this.marker.addTo(this.map)

    this.updateCenter()
    setTimeout(() => {
      this.map!.invalidateSize()
    })
  }

  update(props: any) {
    super.update(props)
    this.map && this.updateCenter()
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.map && this.map.remove()
    this.map = null
    this.marker = null
  }

  updateCenter() {
    this.map!.setView([this.latitude, this.longitude], 17)
    this.marker!.setLatLng([this.latitude, this.longitude])
  }

  render() {
    return html`
      <link href="https://unpkg.com/leaflet@1.5.1/dist/leaflet.css" rel="stylesheet" />
      ${this.container}
    `
  }

  static styles = css`
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
}