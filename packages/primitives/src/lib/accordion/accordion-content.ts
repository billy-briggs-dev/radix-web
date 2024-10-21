// accordion-content.js
import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { consume } from "@lit/context";
import { AccordionContext } from "./accordion-root.js";
import { SignalWatcher } from "@lit-labs/signals";

@customElement("accordion-content")
export class AccordionContent extends SignalWatcher(LitElement) {
  @property({ type: String }) id;

  @consume({ context: AccordionContext, subscribe: true })
  store: any;

  static styles = css`
    .content {
      padding: 10px;
      display: none;
      animation: fadeIn 0.3s ease-in-out;
    }

    .open {
      display: block;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `;

  constructor() {
    super();
    this.id = `accordion-content-${crypto.randomUUID()}`;
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
      <div
        id="content-${itemId}"
        class="content ${isOpen ? "open" : ""}"
        role="region"
        aria-labelledby="accordion-trigger-${itemId}"
      >
        <slot></slot>
      </div>
    `;
  }
}
