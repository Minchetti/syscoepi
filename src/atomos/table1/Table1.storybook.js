import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Table1 from './Table1';

storiesOf('Atomos', module)
  .add('Table1', () => (
    <Table1 text="Storybook"/>
  ));