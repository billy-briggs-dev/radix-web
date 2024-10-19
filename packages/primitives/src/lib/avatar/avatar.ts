// accordion.ts
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('rdx-avatar')
export class Accordion extends LitElement {
  override render() {
    return html`<slot></slot>`;
  }
}
