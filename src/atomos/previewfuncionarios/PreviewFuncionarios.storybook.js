import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import PreviewFuncionarios from './PreviewFuncionarios';

storiesOf('Atomos', module)
  .add('PreviewFuncionarios', () => (
    <PreviewFuncionarios text="Storybook"/>
  ));