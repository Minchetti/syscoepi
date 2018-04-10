import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TableFuncionarios from './TableFuncionarios';

storiesOf('Atomos', module)
  .add('TableFuncionarios', () => (
    <TableFuncionarios text="Storybook"/>
  ));