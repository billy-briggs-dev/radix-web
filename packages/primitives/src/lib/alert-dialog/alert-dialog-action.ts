import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('alert-dialog-action')
export class AlertDialogAction extends LitElement {
  override render() {
    return html`
      <slot @click="${this._onClick}"></slot>
    `;
  }

  private _onClick() {
    // Dispatch a custom event for action handling
    const actionEvent = new CustomEvent('alert-dialog-action', {
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(actionEvent);

    // Close the dialog
    const closeEvent = new CustomEvent('alert-dialog-close', {
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(closeEvent);
  }
}
