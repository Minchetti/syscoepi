import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Cabecalho from '../Cabecalho';

storiesOf('Atomos', module)
  .add('Cabecalho', () => (
    <Cabecalho nome="spinner" />
  ));