import { LitElement, css, html } from 'lit';

/**
 * An example element.
 *
 * @slot - This element has a slot
 */
export class ButtonV1 extends LitElement {
  constructor() {
    super();
    console.log('ButtonV1 constructor');
  }

  render() {
    return html` <button><slot>ButtonV1</slot></button> `;
  }

  static styles = css`
    :host {
    }

    button {
      background: var(--ui-button-background, aqua);
    }
  `;
}
