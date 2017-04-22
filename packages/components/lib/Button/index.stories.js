import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { text, boolean } from '@kadira/storybook-addon-knobs';
import Button from './';

storiesOf('Button', module)
  .add('Basic', () => (
    <Button onClick={action('clicked')} small={boolean('Small', false)}>
      {text('Label', 'Hello Button')}
    </Button>
  ))
  .add('Ripple', () => (
    <div
      className="Ripple"
      style={{
        padding: '1rem',
      }}
    >
      Hello World
    </div>
  ));
