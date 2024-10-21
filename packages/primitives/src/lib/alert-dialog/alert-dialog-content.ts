import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('alert-dialog-content')
export class AlertDialogContent extends LitElement {
  static override styles = css`
  `;

  override render() {
    return html`
      <slot></slot>
    `;
  }
}
