import { cardTemplate } from './CardTemplate';

class WcBrighton extends HTMLElement {
    constructor() {
      super()
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild( cardTemplate.content.cloneNode( true ) );
    }

    connectedCallback() {
      if (this.hasAttribute('thumb')) {
        this._thumb = this.getAttribute('thumb');
      }
    }
  
    static get observedAttributes() {
      return ['opened'];
    }
}

customElements.define('wc-brighton', WcBrighton);