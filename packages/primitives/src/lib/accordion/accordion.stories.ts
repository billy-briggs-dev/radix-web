import { html } from "lit";
import { Meta } from '@storybook/web-components';


import './accordion-content'
import './accordion-item'
import './accordion-root'
import './accordion-trigger'

export default {
    title: 'Components/Accordion',
    component: 'rdx-accordion-root',
  } as Meta;
  
  export const Default = () => html`
  <rdx-accordion-root allowMultiple="true">
    <accordion-item id="item-1">
      <accordion-trigger>Section 1</accordion-trigger>
      <accordion-content>
        <p>This is the content for section 1.</p>
      </accordion-content>
    </accordion-item>

    <accordion-item id="item-2">
      <accordion-trigger>Section 2</accordion-trigger>
      <accordion-content>
        <p>This is the content for section 2.</p>
      </accordion-content>
    </accordion-item>

    <accordion-item id="item-3">
      <accordion-trigger>Section 3</accordion-trigger>
      <accordion-content>
        <p>This is the content for section 3.</p>
      </accordion-content>
    </accordion-item>
  </rdx-accordion-root>
  `;
  
  Default.storyName = 'Accordion Example';
  