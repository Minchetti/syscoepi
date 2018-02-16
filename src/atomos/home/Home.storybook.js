import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Home from './Home';

storiesOf('Atomos', module)
  .add('Home', () => (
    <Home text="Storybook"/>
  ));