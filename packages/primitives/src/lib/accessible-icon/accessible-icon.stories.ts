import { html } from 'lit-html';
import { Meta, StoryFn } from '@storybook/web-components';
import './accessible-icon';

export default {
  title: 'Utilities/AccessibleIcon',
  component: 'accessible-icon',
  argTypes: {
    label: { control: 'text' },
  },
} as Meta;

interface AccessibleIconArgs {
  label: string;
}

const Template: StoryFn<AccessibleIconArgs> = ({ label }) => html`
  <style>
    .icon-example {
      width: 24px;
      height: 24px;
      fill: currentColor;
      background: blue;
    }
  </style>

  <rdx-accessible-icon label="${label}">
    <svg
      class="icon-example"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
    </svg>
  </rdx-accessible-icon>
  <p>
    This is an accessible icon. Inspect the element or use a screen reader to verify the accessible label.
  </p>
`;

export const Default = Template.bind({});
Default.args = {
  label: 'Example Icon',
};
Default.storyName = 'Default Usage';
