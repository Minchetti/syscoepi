import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Icone from '../icone';

storiesOf('Icones', module)
  .add('Icone', () => (
    <Icone nome="spinner" />
  ));