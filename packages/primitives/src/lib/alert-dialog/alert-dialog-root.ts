import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('alert-dialog-root')
export class AlertDialogRoot extends LitElement {
  @property({ type: Boolean })
  open = false;

  override connectedCallback() {
    super.connectedCallback();
    this.addEventListener('alert-dialog-open', this._onOpen);
    this.addEventListener('alert-dialog-close', this._onClose);
  }

  override disconnectedCallback() {
    this.removeEventListener('alert-dialog-open', this._onOpen);
    this.removeEventListener('alert-dialog-close', this._onClose);
    super.disconnectedCallback();
  }

  private _onOpen = () => {
    this.open = true;
  };

  private _onClose = () => {
    this.open = false;
  };

  override render() {
    return html`
      <slot name="trigger"></slot>
      ${this.open
        ? html`<slot></slot>`
        : ''}
    `;
  }
}
