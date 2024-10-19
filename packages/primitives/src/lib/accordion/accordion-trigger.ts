// accordion-trigger.ts
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { accordionState } from './accordion-state';
import { AccordionItem } from './accordion-item';
import { SignalWatcher } from '@lit-labs/signals';

@customElement('rdx-accordion-trigger')
export class AccordionTrigger extends SignalWatcher(LitElement) {
  private accordionItem!: AccordionItem;

  override connectedCallback(): void {
    super.connectedCallback();
    const parentItem = this.closest(
      'rdx-accordion-item'
    ) as AccordionItem | null;
    if (parentItem) {
      this.accordionItem = parentItem;
    } else {
      throw new Error('AccordionTrigger must be used within an AccordionItem');
    }
  }

  private toggle(): void {
    const currentState = accordionState.get();
    const newState = new Set(currentState);
    const itemId = this.accordionItem.itemId;
    if (newState.has(itemId)) {
      newState.delete(itemId);
    } else {
      newState.add(itemId);
    }
    accordionState.set(newState);
  }

  override render() {
    const itemId = this.accordionItem.itemId;
    const isOpen = accordionState.get().has(itemId);

    return html`
      <button
        @click=${this.toggle}
        aria-expanded="${isOpen}"
        aria-controls="${itemId}-content"
        id="${itemId}-trigger"
      >
        <slot></slot>
      </button>
    `;
  }
}
