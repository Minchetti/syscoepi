import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import UltimaReq from './UltimaReq';

storiesOf('Atomos', module)
  .add('UltimaReq', () => (
    <UltimaReq text="Storybook"/>
  ));