// accordion-trigger.js
import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { consume } from "@lit/context";
import { AccordionContext } from "./accordion-root";
import { SignalWatcher } from "@lit-labs/signals";

@customElement("accordion-trigger")
export class AccordionTrigger extends SignalWatcher(LitElement) {
  @property({ type: String }) id;

  @consume({ context: AccordionContext, subscribe: true })
  store: any;

  static styles = css`
  `;

  constructor() {
    super();
    this.id = `accordion-trigger-${Math.random().toString(36).substr(2, 9)}`;
  }

  toggle() {
    console.log(this.store)
    const itemId = this.getParentItemId();
    if (itemId) {
      this.store.toggleItem(itemId, this.store.allowMultiple);
    }
  }

  getParentItemId() {
    let parent = this.parentElement;
    while (parent && parent.tagName.toLowerCase() !== "accordion-item") {
      parent = parent.parentElement;
    }
    return parent ? parent.id : null;
  }

  render() {
    const itemId = this.getParentItemId();
    const isOpen = this.store.isOpen(itemId);

    return html`
      <button
        id="${this.id}"
        aria-expanded="${isOpen}"
        aria-controls="content-${itemId}"
        @click=${this.toggle}
      >
        <slot></slot>
      </button>
    `;
  }
}
