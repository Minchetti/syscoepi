import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Company from './Company';

storiesOf('Atomos', module)
  .add('Company', () => (
    <Company text="Storybook"/>
  ));