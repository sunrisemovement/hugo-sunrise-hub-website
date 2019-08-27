import { LitElement, customElement, property, html, css } from 'lit-element'

declare global {
  interface Window {
    twttr: any
  }
}

@customElement('sunrise-twitter-timeline')
export default class TwitterTimeline extends LitElement {
  private container: HTMLDivElement = document.createElement('div')

  @property({ attribute: 'screenname' })
  public screenName: string = ''

  constructor() {
    super()
    this.ensureTwitterApi()
  }

  private ensureTwitterApi = () => {
    if (document.getElementById('twitter-wjs')) return
    window.twttr = window.twttr || {}
    window.twttr._e = []
    window.twttr.ready = (f: any) => window.twttr._e.push(f)
    const script = document.createElement('script')
    script.id = 'twitter-wjs'
    script.src = 'https://platform.twitter.com/widgets.js'
    document.head.appendChild(script)
  }

  public connectedCallback() {
    super.connectedCallback()
    window.twttr.ready(async () => {
      await window.twttr.widgets.createTimeline({
        sourceType: 'profile',
        screenName: this.screenName,
      }, this.container, {
        width: '392',
        height: '456',
      })
    })
  }

  render() {
    return html`${this.container}`
  }

  static styles = css`
    :host {
      display: block;
      border-radius: 4px;
      border: 1px solid rgba(0,0,0,0.12);
      overflow: hidden;
    }
  `
}