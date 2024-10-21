// accordion-root.js
import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { AccordionStore } from "./accordion-store.js";
import { createContext, provide } from "@lit/context";
import { SignalWatcher } from "@lit-labs/signals";

export const AccordionContext = createContext("accordion-store");

@customElement('rdx-accordion-root')
export class AccordionRoot extends SignalWatcher(LitElement) {

  @property({ type: Boolean })
  allowMultiple!: boolean;

  @provide({context: AccordionContext}) 
  store = new AccordionStore();

  static styles = css`
    :host {
      display: block;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 10px;
    }
  `;

  render() {
    this.store.setAllowMultiple(this.allowMultiple)
    return html`
      <div role="presentation">
        <slot></slot>
      </div>
    `;
  }
}
