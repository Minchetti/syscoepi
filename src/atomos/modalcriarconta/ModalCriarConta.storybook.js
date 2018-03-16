import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ModalCriarConta from './ModalCriarConta';

storiesOf('Atomos', module)
  .add('ModalCriarConta', () => (
    <ModalCriarConta text="Storybook"/>
  ));