import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('alert-dialog-trigger')
export class AlertDialogTrigger extends LitElement {
  override render() {
    return html`
      <slot @click="${this._onClick}"></slot>
    `;
  }

  private _onClick() {
    const event = new CustomEvent('alert-dialog-open', {
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }
}
