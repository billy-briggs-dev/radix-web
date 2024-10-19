import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('aspect-ratio')
export class AspectRatio extends LitElement {
  @property({ type: Number })
  ratio = 1;

  static override styles = css`
    :host {
      display: block;
    }

    .wrapper {
      position: relative;
      width: 100%;
    }

    .content {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
  `;

  override render() {
    const paddingBottom = `${(1 / this.ratio) * 100}%`;

    return html`
      <div
        class="wrapper"
        style="padding-bottom: ${paddingBottom};"
        data-radix-aspect-ratio-wrapper=""
      >
        <div class="content">
          <slot></slot>
        </div>
      </div>
    `;
  }
}
