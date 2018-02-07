import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import CriarConta from './CriarConta';

storiesOf('Atomos', module)
  .add('CriarConta', () => (
    <CriarConta text="Storybook"/>
  ));