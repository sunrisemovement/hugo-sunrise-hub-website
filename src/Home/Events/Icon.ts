import { LitElement, html, css, customElement, property } from 'lit-element'

export type IconName =
  | 'place'
  | 'event'
  | 'info'
  | 'arrow_right'
  | 'arrow_left'
  | 'chevron_right'
  | 'chevron_left'

@customElement('sunrise-events-icon')
export default class Icon extends LitElement {
  @property({ attribute: false })
  public icon: IconName = 'place'

  /**
   * @public
   * @returns TemplateResult
   */
  render() {
    return html`${this.icon}`
  }

  static styles = css`
    :host {
      display: inline-block;
      font-family: Material Icons;
    }
  `
}