import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Label from './Label';

storiesOf('Atomos', module)
  .add('Label', () => (
    <Label text="Storybook"/>
  ));