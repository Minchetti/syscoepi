import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ModalAddFuncionario from './ModalAddFuncionario';

storiesOf('Atomos', module)
  .add('ModalAddFuncionario', () => (
    <ModalAddFuncionario text="Storybook"/>
  ));