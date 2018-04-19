import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Employees from './Employees';

storiesOf('Atomos', module)
  .add('Employees', () => (
    <Employees text="Storybook"/>
  ));