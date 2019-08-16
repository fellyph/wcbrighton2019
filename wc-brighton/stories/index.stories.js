import { storiesOf, html, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import { WcBrighton } from '../src/WcBrighton.js';
import '../wc-brighton.js';

storiesOf('wc-brighton', module)
  .addDecorator(withKnobs)
  .add('Documentation', () => withClassPropertiesKnobs(WcBrighton))
  .add(
    'Alternative Title',
    () => html`
      <wc-brighton .title=${'Something else'}></wc-brighton>
    `,
  );
