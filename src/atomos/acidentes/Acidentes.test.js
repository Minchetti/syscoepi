import React from 'react';
import ReactDOM from 'react-dom';
import Acidentes from './Acidentes';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Acidentes />, div);
});