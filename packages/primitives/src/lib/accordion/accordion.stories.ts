import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './accordion';
import './accordion-item';
import './accordion-trigger';
import './accordion-content';

const meta: Meta = {
  title: 'Components/Accordion',
  component: 'accordion',
};

export default meta;

export const Default: StoryObj = {
  render: () => html`
    <style>
      rdx-accordion-trigger button {
        background: none;
        border: none;
        font-size: 1em;
        cursor: pointer;
        width: 100%;
        text-align: left;
        padding: 0.5em;
        outline: none;
      }

      rdx-accordion-content .content {
        padding: 0.5em;
        border: 1px solid #ccc;
      }

      h3 {
        margin: 0;
      }
    </style>
    <rdx-accordion>
      <rdx-accordion-item itemId="item1">
        <rdx-accordion-trigger>
          <h3>Section 1</h3>
        </rdx-accordion-trigger>
        <rdx-accordion-content>
          <p>Content for section 1</p>
        </rdx-accordion-content>
      </rdx-accordion-item>
      <rdx-accordion-item itemId="item2">
        <rdx-accordion-trigger>
          <h3>Section 2</h3>
        </rdx-accordion-trigger>
        <rdx-accordion-content>
          <p>Content for section 2</p>
        </rdx-accordion-content>
      </rdx-accordion-item>
    </rdx-accordion>
  `,
};
