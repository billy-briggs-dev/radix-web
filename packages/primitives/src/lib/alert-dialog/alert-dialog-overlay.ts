import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('alert-dialog-overlay')
export class AlertDialogOverlay extends LitElement {
  static override styles = css`
  `;

  override render() {
    return html`
      <div @click="${this._onClick}"></div>
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
