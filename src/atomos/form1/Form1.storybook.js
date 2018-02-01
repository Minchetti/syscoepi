import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Form1 from './Form1';

storiesOf('Atomos', module)
  .add('Form1', () => (
    <Form1 text="Storybook"/>
  ));