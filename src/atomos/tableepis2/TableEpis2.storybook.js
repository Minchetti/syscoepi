import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TableEpis2 from './TableEpis2';

storiesOf('Atomos', module)
  .add('TableEpis2', () => (
    <TableEpis2 text="Storybook"/>
  ));