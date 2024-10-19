import { html } from 'lit';
import { Meta } from '@storybook/web-components';
import './avatar';

export default {
  title: 'Components/Avatar',
  component: 'avatar-component',
} as Meta;

export const Default = () => html`
  <style>
    rdx-avatar {
      width: 100px;
      height: 100px;
      display: inline-block;
    }
    .fallback-content {
      width: 100%;
      height: 100%;
      background-color: lightgray;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
    }
  </style>
  <rdx-avatar>
    <rdx-avatar-image src="https://via.placeholder.com/150" alt="test" />
  </rdx-avatar>
`;

export const WithErrorImage = () => html`
  <style>
    /* Styles remain the same */
  </style>
  <rdx-avatar src="https://example.com/non-existent.jpg">
    <div slot="fallback" class="fallback-content">CD</div>
  </rdx-avatar>
`;

export const WithDelayFallback = () => html`
  <style>
    /* Styles remain the same */
  </style>
  <rdx-avatar src="https://example.com/non-existent.jpg" delay-ms="20000">
    <div slot="fallback" class="fallback-content">EF</div>
  </rdx-avatar>
`;
