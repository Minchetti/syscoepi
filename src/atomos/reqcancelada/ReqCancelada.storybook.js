import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ReqCancelada from './ReqCancelada';

storiesOf('Atomos', module)
  .add('ReqCancelada', () => (
    <ReqCancelada text="Storybook"/>
  ));