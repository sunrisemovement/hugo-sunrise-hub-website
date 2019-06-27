//@ts-check

import { LitElement, html, css, TemplateResult, CSSResult } from 'https://unpkg.com/lit-element@2.2.0/lit-element.js?module'

/**
 * @type CSSResult
 */
const styles = css`
  :host {
    display: inline-block;
    font-family: Material Icons;
  }
`

export default class Icon extends LitElement {
  /**
   * @public
   * @returns Promise<void>
   */
  static register() {
    if (!window.customElements.get('sunrise-events-icon')) {
      window.customElements.define('sunrise-events-icon', Icon)
    }
    return window.customElements.whenDefined('sunrise-events-icon')
  }

  /**
   * @public
   * @type import('https://unpkg.com/lit-element@2.2.0/lit-element.js?module').PropertyDeclarations
   */
  static get properties() {
    return {
      icon: { attribute: false },
      size: { attribute: false },
    }
  }

  constructor() {
    super()

    /**
     * @public
     * @type string
     */
    this.icon = ''

    /**
     * @public
     * @type number
     */
    this.size = 24
  }

  /**
   * @public
   * @returns TemplateResult
   */
  render() {
    return html`${this.icon}`
  }
}