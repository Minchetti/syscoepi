import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Epis from './Epis';

storiesOf('Atomos', module)
  .add('Epis', () => (
    <Epis text="Storybook"/>
  ));