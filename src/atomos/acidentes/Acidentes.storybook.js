import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Acidentes from './Acidentes';

storiesOf('Atomos', module)
  .add('Acidentes', () => (
    <Acidentes text="Storybook"/>
  ));