import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ModalCriarEmpresa from './ModalCriarEmpresa';

storiesOf('Atomos', module)
  .add('ModalCriarEmpresa', () => (
    <ModalCriarEmpresa text="Storybook"/>
  ));