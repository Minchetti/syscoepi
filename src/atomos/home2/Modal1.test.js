import React from 'react';
import ReactDOM from 'react-dom';
import Modal1 from './Modal1';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Modal1 />, div);
});