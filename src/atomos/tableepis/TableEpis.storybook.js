import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TableEpis from './TableEpis';

storiesOf('Atomos', module)
  .add('TableEpis', () => (
    <TableEpis text="Storybook"/>
  ));