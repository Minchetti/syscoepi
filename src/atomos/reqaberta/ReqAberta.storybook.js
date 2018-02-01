import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ReqAberta from './ReqAberta';

storiesOf('Atomos', module)
  .add('ReqAberta', () => (
    <ReqAberta text="Storybook"/>
  ));