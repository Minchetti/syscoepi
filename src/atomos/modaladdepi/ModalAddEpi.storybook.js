import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ModalAddEpi from './ModalAddEpi';

storiesOf('Atomos', module)
  .add('ModalAddEpi', () => (
    <ModalAddEpi text="Storybook"/>
  ));