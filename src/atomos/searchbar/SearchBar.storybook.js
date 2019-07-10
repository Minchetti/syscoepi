import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SearchBar from './SearchBar';

storiesOf('Atomos', module)
  .add('SearchBar', () => (
    <SearchBar text="Storybook"/>
  ));