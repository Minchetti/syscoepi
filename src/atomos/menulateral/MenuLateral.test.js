import React from 'react';
import ReactDOM from 'react-dom';
import MenuLateral from './MenuLateral';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MenuLateral />, div);
});