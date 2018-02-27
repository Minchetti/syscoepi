import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ModalUsuario from './ModalUsuario';

storiesOf('Atomos', module)
  .add('ModalUsuario', () => (
    <ModalUsuario text="Storybook"/>
  ));