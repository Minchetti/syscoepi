import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Modal2 from './Modal2';

storiesOf('Atomos', module)
  .add('Modal2', () => (
    <Modal2 text="Storybook"/>
  ));