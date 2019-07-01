import { LitElement, html, css, property, customElement } from 'lit-element'
import Icon from './Icon'

class Range implements Iterable<number> {
  constructor(
    private min: number,
    private max: number,
  ) {}

  *[Symbol.iterator]() {
    for (var i = this.min; i <= this.max; i++) {
      yield i
    }
  }
}
type Position = { x: number, y: number }
const radians = (degrees: number) =>  degrees * (Math.PI/180)
const numTiles = (zoom: number): number => 2 ** zoom
const sec = (x: number): number => 1 / Math.cos(x)
const latLonToRelativePos = (lat: number, lon: number): Position => {
  const x = (lon + 180) / 360
  const y = (1 - Math.log(Math.tan(radians(lat)) + sec(radians(lat))) / Math.PI) / 2
  return { x, y }
}
const latLonToPos = (lat: number,lon: number, zoom: number): Position =>  {
  const n = numTiles(zoom)
  const { x, y } = latLonToRelativePos(lat, lon)
  return { x: n*x, y: n*y }
}
const tilePos = (lat: number, lon: number, zoom: number): Position => {
  const { x, y } = latLonToPos(lat, lon, zoom)
  return { x: Math.trunc(x), y: Math.trunc(y) }
}
const tileWidth = 256
const tileHeight = 256
const tileUrl = (x: number, y: number, z: number): string => {
  return `https://maps.wikimedia.org/osm-intl/${z}/${x}/${y}.png`
}
const create = async (lat: number, lon: number, zoom: number) => {
  const tilesX = 4
  const tilesY = 4
  const xRow = [...new Range(-Math.floor(tilesX / 2), Math.ceil(tilesX / 2))]
  const yRow = [...new Range(-Math.floor(tilesY / 2), Math.ceil(tilesY / 2))]
  const { x: xOffset, y: yOffset } = tilePos(lat, lon, zoom)
  const { x: xAbsolute, y: yAbsolute } = latLonToPos(lat, lon, zoom)
  const latCenterDiff = Math.trunc((xAbsolute - xOffset) * tileWidth)
  const lonCenterDiff = Math.trunc((yAbsolute - yOffset) * tileHeight)
  const tiles = []
  for (var y of yRow) {
    const row = []
    for (var x of xRow) {
      row.push({ x: xOffset + x, y: yOffset + y })
    }
    tiles.push(row)
  }
  const imageWidth = tilesX * tileWidth
  const imageHeight = tilesY * tileHeight
  const canvas = document.createElement('canvas')
  canvas.width = imageWidth
  canvas.height = imageHeight
  const context = canvas.getContext('2d') as CanvasRenderingContext2D
  context.fillStyle = '#fff'
  context.fillRect(0, 0, imageWidth, imageHeight)
  const promises: Array<Promise<any>> = []
  let rowOffset = 0
  for (let row of tiles) {
    let colOffset = 0
    for (let tile of row) {
      promises.push((async (tile, colOffset, rowOffset) => {
        const i = new Image()
        i.src = tileUrl(tile.x, tile.y, zoom)
        await i.decode()
        context.drawImage(i, colOffset * tileWidth - latCenterDiff, rowOffset * tileHeight - lonCenterDiff)
      })(tile, colOffset, rowOffset))
      colOffset++
    }
    rowOffset++
  }
  await Promise.all(promises)
  return canvas
}

@customElement('sunrise-events-map')
export default class Map extends LitElement {
  private static dependencies = [ Icon ]

  @property({ attribute: false })
  public latitude: number = 0

  @property({ attribute: false })
  public longitude: number = 0

  private map: import('ol/Map').default | null = null
  private container: HTMLDivElement = document.createElement('div')

  async connectedCallback() {
    this.container.className = 'container'
    super.connectedCallback()
    const canvas = await create(this.latitude, this.longitude, 17)

    const icon = document.createElement('span')
    icon.textContent = 'place'
    icon.className = 'icon'

    this.container.appendChild(canvas)
    this.container.appendChild(icon)
  }

  update(props: any) {
    super.update(props)
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.map && this.map.dispose()
    this.map = null
  }

  render() {
    return html`${this.container}`
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
      overflow: hidden;
    }

    canvas {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
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
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%) translateY(-16px);
    }
  `
}