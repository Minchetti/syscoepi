import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import MenuLateral from './MenuLateral';

storiesOf('Atomos', module)
  .add('MenuLateral', () => (
    <MenuLateral text="Storybook"/>
  ));