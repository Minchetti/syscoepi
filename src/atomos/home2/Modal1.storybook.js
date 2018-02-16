import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Modal1 from './Modal1';

storiesOf('Atomos', module)
  .add('Modal1', () => (
    <Modal1 text="Storybook"/>
  ));