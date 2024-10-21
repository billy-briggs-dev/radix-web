import { LitElement, html } from 'lit';
import { TemplateResult } from 'lit-html';
import { customElement, property } from 'lit/decorators.js';
import '../visually-hidden';

@customElement('rdx-accessible-icon')
export class AccessibleIcon extends LitElement {
  @property({ type: String })
  label!: string;

  override render(): TemplateResult {
    return html`
        <slot aria-hidden="true" focusable="false"></slot>
        <rdx-visually-hidden>${this.label}</rdx-visually-hidden>
    `;
  }
}
