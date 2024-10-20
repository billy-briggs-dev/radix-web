import { html } from 'lit';
import { Meta } from '@storybook/web-components';
import './aspect-ratio';

export default {
  title: 'Components/AspectRatio',
  component: 'aspect-ratio',
  decorators: [
    (Story) => html`
      <div style="width: 200px; border: 1px solid #ccc; margin: auto;">
        ${Story()}
      </div>
    `,
  ],
} as Meta;

export const Default = () => html`
  <aspect-ratio ratio="${16 / 9}">
    <div style="background-color: lightblue; width: 100%; height: 100%;">
      16:9 Aspect Ratio
    </div>
  </aspect-ratio>
`;

export const CustomRatio = () => html`
  <aspect-ratio ratio="${4 / 3}">
    <div style="background-color: lightcoral; width: 100%; height: 100%;">
      4:3 Aspect Ratio
    </div>
  </aspect-ratio>
`;

export const DynamicRatio = () => {
  let ratio = 16 / 9;

  const handleInput = (e: Event) => {
    const input = e.target as HTMLInputElement;
    ratio = parseFloat(input.value) || 1;
    const aspectRatioElement = document.getElementById(
      'dynamic-aspect-ratio'
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ) as any;
    if (aspectRatioElement) {
      aspectRatioElement.ratio = ratio;
    }
  };

  return html`
    <label>
      Aspect Ratio:
      <input
        type="number"
        min="0.1"
        step="0.1"
        value="${ratio}"
        @input="${handleInput}"
      />
    </label>
    <aspect-ratio id="dynamic-aspect-ratio" .ratio="${ratio}">
      <div style="background-color: lightgreen; width: 100%; height: 100%;">
        Dynamic Aspect Ratio
      </div>
    </aspect-ratio>
  `;
};
