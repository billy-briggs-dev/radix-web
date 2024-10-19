// accordion-item.ts
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('rdx-avatar-image')
export class AvatarImage extends LitElement {
  @property({ type: String })
  src = '';

  @property({ type: String })
  alt: string = '';

  override connectedCallback(): void {
    super.connectedCallback();
  }

  override render() {
    return html`<img src=${this.src} alt=${this.alt}></img>`;
  }
}
