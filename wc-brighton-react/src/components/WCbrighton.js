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
      display: block;
      border-radius: 2px;
      min-height: 300px;
      margin: 1rem auto;
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
    <header class="card__header"></header>
    <picture class="card__thumb"></picture>
    <slot></slot>
  </div>
`;

class WcBrighton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(cardTemplate.content.cloneNode(true));
  }

  connectedCallback() {
    this.header = this.shadowRoot.querySelector('.card__header');
    this.thumb = this.shadowRoot.querySelector('.card__thumb');

    if (this.hasAttribute('imgSrc')) {
      this.imgSrc = this.getAttribute('imgSrc');
      this.imgContainer = document.createElement('img');
      this.imgContainer.src = this.imgSrc;
      this.thumb.appendChild(this.imgContainer);
    }

    if (this.hasAttribute('title')) {
      this.title = this.getAttribute('title');
      this.titleContainer = document.createElement('h2');
      this.titleContainer.className = 'title';
      this.titleContainer.innerHTML = this.title;
      this.header.appendChild(this.titleContainer);
    }
  }
}

customElements.define('wc-brighton', WcBrighton);
