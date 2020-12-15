import '@vaadin/vaadin-custom-field/theme/lumo/vaadin-custom-field.js';
import '@vaadin/vaadin-date-picker/theme/lumo/vaadin-date-picker.js';
import '@vaadin/vaadin-time-picker/theme/lumo/vaadin-time-picker.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

const $_documentContainer = html`<dom-module id="lumo-date-time-picker-date-text-field" theme-for="vaadin-date-time-picker-date-text-field">
  <template>
    <style>
      [part~="input-field"] {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }

      /* RTL specific styles */
      :host([dir="rtl"]) [part~="input-field"] {
        border-radius: var(--lumo-border-radius);
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-date-time-picker-time-text-field" theme-for="vaadin-date-time-picker-time-text-field">
  <template>
    <style>
      [part~="input-field"] {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }

      /* RTL specific styles */
      :host([dir="rtl"]) [part~="input-field"] {
        border-radius: var(--lumo-border-radius);
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-date-time-picker-date-picker" theme-for="vaadin-date-time-picker-date-picker">
  <template>
    <style>
      :host {
        margin-right: 2px;
      }

      /* RTL specific styles */
      :host([dir="rtl"]) {
        margin-right: auto;
        margin-left: 2px;
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
