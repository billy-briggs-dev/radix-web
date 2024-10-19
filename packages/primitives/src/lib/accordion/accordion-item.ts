// accordion-item.ts
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('rdx-accordion-item')
export class AccordionItem extends LitElement {
  @property({ type: String }) itemId: string = '';

  override connectedCallback(): void {
    super.connectedCallback();
    if (!this.itemId) {
      this.itemId =
        'rdx-accordion-item-' + Math.random().toString(36).substr(2, 9);
    }
  }

  override render() {
    return html`<slot></slot>`;
  }
}
