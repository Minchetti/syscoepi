import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Request from './Request';

storiesOf('Atomos', module)
  .add('Request', () => (
    <Request text="Storybook"/>
  ));