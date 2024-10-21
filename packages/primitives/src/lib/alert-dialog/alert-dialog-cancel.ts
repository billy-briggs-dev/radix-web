import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('alert-dialog-cancel')
export class AlertDialogCancel extends LitElement {
  override render() {
    return html`
      <slot @click="${this._onClick}"></slot>
    `;
  }

  private _onClick() {
    const event = new CustomEvent('alert-dialog-close', {
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }
}
