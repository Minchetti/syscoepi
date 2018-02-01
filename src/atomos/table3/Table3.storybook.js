import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Table3 from './Table3';

storiesOf('Atomos', module)
  .add('Table3', () => (
    <Table3 text="Storybook"/>
  ));