import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('alert-dialog-title')
export class AlertDialogTitle extends LitElement {
  static override styles = css`
  `;

  override render() {
    return html`
      <h2><slot></slot></h2>
    `;
  }
}
