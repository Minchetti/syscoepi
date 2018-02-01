import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Modal3 from './Modal3';

storiesOf('Atomos', module)
  .add('Modal3', () => (
    <Modal3 text="Storybook"/>
  ));