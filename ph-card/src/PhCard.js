import { html, css, LitElement } from 'lit-element';

export class PhCard extends LitElement {
  static get styles() {
    return css`
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
        height: 300px;
        margin: 1rem;
        width: 300px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
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
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      url: { type: String },
      thumb: { type: String },
    };
  }

  constructor() {
    super();
    this.title = 'Hey WordCamp Brighton';
    this.url = 'https://twitter.com/fellyph';
    this.thumb = 'https://twitter.com/fellyph';
  }

  __share() {
    this.counter += 1;
  }

  render() {
    return html`
      <div class="card">
        <h2>${this.title}</h2>
        <picture>
          <img src="" />
        </picture>
        <button @click=${this.__increment} class="btn">share</button>
      </div>
    `;
  }
}
