const cardTemplate = document.createElement("template");
cardTemplate.innerHTML = `
  <style>
    :host {
        display: block;
        padding: 25px;
        font-family: Roboto;
    }

    .card {
      padding: 1em;
      background: #fff;
      display: inline-block;
      border-radius: 2px;
      min-height: 300px;
      margin: 1rem;
      width: 300px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    }

    .card__thumb img {
      max-width: 100%;
      height: auto;
      margin-bottom: 1em;
    }

    .card:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }

    .btn {
      font-size: 18px;
      position: relative;
      display: inline-block;
      border-radius: 2px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      background-color: #9be7ff;
      color: #000;
      padding: 12px 24px;
      transition: background-color 0.3s;
    }

    .btn:hover,
    .btn:focus {
      background-color: #2286c3;
    }
  </style>
  <div class="card">
    <header class="card__header">
      <h2 class="card__title">Default Text</h2>
    </header>
    <picture class="card__thumb">
      <img class="card_img" />
    </picture>
    <slot></slot>
  </div>
`;

class WcBrighton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(cardTemplate.content.cloneNode(true));
    this.titleContainer = this.shadowRoot.querySelector('.card__title');
    this.imgContainer = this.shadowRoot.querySelector('.card_img');
  }

  connectedCallback() {
    console.log('test');

    if (this.hasAttribute('src')) {
      this.src = this.getAttribute('src')
      this.imgContainer.src = this.imgSrc;
    }

    if (this.hasAttribute('title')) {
      this.title = this.getAttribute('title');
      this.titleContainer.innerHTML = this.title;
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log('onChange');

    switch (name) {
      case 'title':
        console.log(`title changed from ${oldValue} to ${newValue}`);
        this.titleContainer.innerHTML = newValue;
        break;
      case 'src':
        console.log(`imgSrc changed ${newValue}!`);
        this.imgContainer.src = newValue;
        break;
    }
  }

  static get observedAttributes() {
    return ['title', 'src'];
  }
}

customElements.define('wc-brighton', WcBrighton);
