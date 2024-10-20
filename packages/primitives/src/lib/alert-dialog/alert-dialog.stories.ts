import { html } from 'lit-html';
import { Meta } from '@storybook/web-components';
import './alert-dialog-root';
import './alert-dialog-trigger';
import './alert-dialog-overlay';
import './alert-dialog-content';
import './alert-dialog-title';
import './alert-dialog-description';
import './alert-dialog-cancel';
import './alert-dialog-action';

export default {
  title: 'Components/AlertDialog',
  component: 'alert-dialog-root',
} as Meta;

export const Default = () => html`
  <style>
    /* Styles for the trigger button */
    .trigger-button {
      display: inline-flex;
      height: 35px;
      align-items: center;
      justify-content: center;
      padding: 0 15px;
      font-weight: 500;
      background-color: white;
      color: #7c3aed; /* violet11 */
      border: none;
      border-radius: 4px;
      cursor: pointer;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .trigger-button:hover {
      background-color: #f5f3ff; /* mauve3 */
    }

    /* Styles for the overlay */
    alert-dialog-overlay div {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.6);
    }

    /* Styles for the dialog content */
    alert-dialog-content {
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      max-height: 85vh;
      width: 90vw;
      max-width: 500px;
      background: white;
      padding: 25px;
      border-radius: 8px;
      box-shadow: 0 10px 38px -10px rgba(0, 0, 0, 0.35),
        0 10px 20px -15px rgba(0, 0, 0, 0.2);
      outline: none;
    }

    /* Styles for the title */
    alert-dialog-title h2 {
      margin: 0;
      font-size: 17px;
      font-weight: 500;
      color: #1a1523; /* Adjust as needed */
    }

    /* Styles for the description */
    alert-dialog-description p {
      margin-top: 15px;
      margin-bottom: 20px;
      font-size: 15px;
      line-height: normal;
      color: #6e6d7a; /* Adjust as needed */
    }

    /* Styles for the dialog buttons */
    .dialog-buttons {
      display: flex;
      justify-content: flex-end;
      gap: 25px;
    }

    .cancel-button,
    .action-button {
      display: inline-flex;
      height: 35px;
      align-items: center;
      justify-content: center;
      padding: 0 15px;
      font-weight: 500;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    .cancel-button {
      background-color: #e0e0e0; /* mauve4 */
      color: #57534e; /* mauve11 */
    }

    .cancel-button:hover {
      background-color: #d6d3d1; /* mauve5 */
    }

    .action-button {
      background-color: #f87171; /* red4 */
      color: #991b1b; /* red11 */
    }

    .action-button:hover {
      background-color: #ef4444; /* red5 */
    }
  </style>

  <alert-dialog-root @alert-dialog-action="${() => console.log('Confirmed')}">
    <alert-dialog-trigger slot="trigger">
      <button class="trigger-button">
        Delete account
      </button>
    </alert-dialog-trigger>

    <alert-dialog-overlay></alert-dialog-overlay>
    <alert-dialog-content>
      <alert-dialog-title>
        Are you absolutely sure?
      </alert-dialog-title>
      <alert-dialog-description>
        This action cannot be undone. This will permanently delete your
        account and remove your data from our servers.
      </alert-dialog-description>
      <div class="dialog-buttons">
        <alert-dialog-cancel>
          <button class="cancel-button">
            Cancel
          </button>
        </alert-dialog-cancel>
        <alert-dialog-action>
          <button class="action-button">
            Yes, delete account
          </button>
        </alert-dialog-action>
      </div>
    </alert-dialog-content>
  </alert-dialog-root>
`;

Default.storyName = 'AlertDialog Example';
