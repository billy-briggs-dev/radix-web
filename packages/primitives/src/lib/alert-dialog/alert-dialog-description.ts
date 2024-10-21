import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('alert-dialog-description')
export class AlertDialogDescription extends LitElement {
  static override styles = css`
  `;

  override render() {
    return html`
      <p><slot></slot></p>
    `;
  }
}
