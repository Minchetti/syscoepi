import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Form2 from './Form2';

storiesOf('Atomos', module)
  .add('Form2', () => (
    <Form2 text="Storybook"/>
  ));