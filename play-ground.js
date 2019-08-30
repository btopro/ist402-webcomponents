import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
class PlayGround extends PolymerElement {
  static get properties() {
    return { 
      learning: {
        type: Boolean,
        value: true
      }
    };
  }
  
  static get template() {
    return html`
    <p>Data here <slot></slot> or there</p>`;
  }
}

customElements.define('play-ground', PlayGround);
