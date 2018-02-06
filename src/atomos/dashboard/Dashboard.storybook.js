import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Dashboard from './Dashboard';

storiesOf('Atomos', module)
  .add('Dashboard', () => (
    <Dashboard text="Storybook"/>
  ));