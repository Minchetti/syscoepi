import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Login from './Login';

storiesOf('Atomos', module)
  .add('Login', () => (
    <Login text="Storybook"/>
  ));