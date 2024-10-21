// accordion-item.js
import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { consume } from "@lit/context";
import { AccordionContext } from "./accordion-root";
import { SignalWatcher } from "@lit-labs/signals";

@customElement("accordion-item")
export class AccordionItem extends SignalWatcher(LitElement) {
  @property({ type: String }) id = `accordion-item-${crypto.randomUUID()}}`;

  @consume({ context: AccordionContext, subscribe: true })
  store: any;

  static styles = css`
    :host {
      display: block;
      border-bottom: 1px solid #ddd;
    }

    :last-child {
      border-bottom: none;
    }
  `;

  render() {
    return html`<slot></slot>`;
  }
}
