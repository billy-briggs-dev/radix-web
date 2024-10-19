// accordion-content.ts
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { accordionState } from './accordion-state';
import { AccordionItem } from './accordion-item';
import { SignalWatcher } from '@lit-labs/signals';

@customElement('rdx-accordion-content')
export class AccordionContent extends SignalWatcher(LitElement) {
  static override styles = css`
    .content {
      display: none;
    }
    .content[open] {
      display: block;
    }
  `;

  private accordionItem!: AccordionItem;

  override connectedCallback(): void {
    super.connectedCallback();
    const parentItem = this.closest(
      'rdx-accordion-item'
    ) as AccordionItem | null;
    if (parentItem) {
      this.accordionItem = parentItem;
    } else {
      throw new Error('AccordionContent must be used within an AccordionItem');
    }
  }

  override render() {
    const itemId = this.accordionItem.itemId;
    const isOpen = accordionState.get().has(itemId);

    return html`
      <div
        class="content"
        ?open="${isOpen}"
        role="region"
        aria-labelledby="${itemId}-trigger"
        id="${itemId}-content"
      >
        <slot></slot>
      </div>
    `;
  }
}
