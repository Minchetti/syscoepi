import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Table2 from './Table2';

storiesOf('Atomos', module)
  .add('Table2', () => (
    <Table2 text="Storybook"/>
  ));