import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import AlertaEpi from './AlertaEpi';

storiesOf('Atomos', module)
  .add('AlertaEpi', () => (
    <AlertaEpi text="Storybook"/>
  ));