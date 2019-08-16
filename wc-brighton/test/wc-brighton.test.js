import { html, fixture, expect } from '@open-wc/testing';

import '../wc-brighton.js';

describe('WcBrighton', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture(html`
      <wc-brighton></wc-brighton>
    `);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('shows initially the text "hey there Nr. 5!" and an "increment" button', async () => {
    const el = await fixture(html`
      <wc-brighton></wc-brighton>
    `);

    expect(el).shadowDom.to.equal(`
      <h2>Hey there Nr. 5!</h2>
      <button>increment</button>
    `);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture(html`
      <wc-brighton></wc-brighton>
    `);
    el.shadowRoot.querySelector('button').click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture(html`
      <wc-brighton title="attribute title"></wc-brighton>
    `);

    expect(el.title).to.equal('attribute title');
  });
});
