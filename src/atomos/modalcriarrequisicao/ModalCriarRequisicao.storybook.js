import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ModalCriarRequisicao from './ModalCriarRequisicao';

storiesOf('Atomos', module)
  .add('ModalCriarRequisicao', () => (
    <ModalCriarRequisicao text="Storybook"/>
  ));