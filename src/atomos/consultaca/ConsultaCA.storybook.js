import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ConsultaCA from './ConsultaCA';

storiesOf('Atomos', module)
  .add('ConsultaCA', () => (
    <ConsultaCA text="Storybook"/>
  ));