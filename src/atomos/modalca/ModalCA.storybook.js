import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ModalCA from './ModalCA';

storiesOf('Atomos', module)
  .add('ModalCA', () => (
    <ModalCA text="Storybook"/>
  ));