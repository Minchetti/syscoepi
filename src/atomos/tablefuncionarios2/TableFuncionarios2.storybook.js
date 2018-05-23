import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TableFuncionarios2 from './TableFuncionarios2';

storiesOf('Atomos', module)
  .add('TableFuncionarios2', () => (
    <TableFuncionarios2 text="Storybook"/>
  ));