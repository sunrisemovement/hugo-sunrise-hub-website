import { LitElement, html, css, property, query, customElement } from 'lit-element'

@customElement('sunrise-visibility-tracker')
export default class VisibilityTracker extends LitElement {
  private _visible: boolean = false
  public get visible() {
    return this._visible
  }

  private observer: IntersectionObserver | null = null

  @property({ attribute: false })
  public target: HTMLElement | null = null

  private setupObserver = () => {
    this.observer && this.observer.disconnect()
    this.observer = new IntersectionObserver(([entry]) => {
      this._visible = entry.isIntersecting
      this.dispatchEvent(new Event('intersectionchange'))
    }, {
      threshold: 1,
      root: this.target
    })
    this.observer.observe(this)
  }

  protected updated(changed: Map<string, any>) {
    if (changed.has('target')) {
      this.setupObserver()
    }
  }

  public connectedCallback() {
    super.connectedCallback()
    this.setupObserver()
  }

  public disconnectedCallback() {
    super.disconnectedCallback()
    this.observer && this.observer.disconnect()
  }

  render() {
    return html`<slot></slot>`
  }

  public static styles = css`
    :host {
      display: block;
    }
  `
}