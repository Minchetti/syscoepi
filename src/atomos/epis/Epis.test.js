import React from 'react';
import ReactDOM from 'react-dom';
import Epis from './Epis';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Epis />, div);
});