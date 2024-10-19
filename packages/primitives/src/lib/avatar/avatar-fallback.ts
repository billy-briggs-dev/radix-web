// accordion-item.ts
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('rdx-avatar-fallback')
export class AvatarFallback extends LitElement {
  override connectedCallback(): void {
    super.connectedCallback();
  }

  override render() {
    return html`<slot></slot>`;
  }
}
