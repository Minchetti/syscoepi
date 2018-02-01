import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Link from './Link';

storiesOf('Atomos', module)
  .add('Link', () => (
    <Link text="Storybook"/>
  ));