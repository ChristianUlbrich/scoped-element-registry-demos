import { LitElement, css, html, nothing } from 'lit';
import { property } from 'lit/decorators/property.js';

/**
 * An example element.
 *
 * @slot - This element has a slot
 */
export class ButtonV2 extends LitElement {
  @property({ type: Boolean, attribute: 'show-tooltip', reflect: true })
  showTooltip = false;

  render() {
    return html`
      <button>
        <slot>ButtonV2</slot>
        ${this.showTooltip
          ? html` <div>
              Tooltip:
              <slot name="tooltip"></slot>
            </div>`
          : nothing}
      </button>
    `;
  }

  static styles = css`
    :host {
    }

    button {
      background: var(--ui-button-background, salmon);
    }
  `;
}
