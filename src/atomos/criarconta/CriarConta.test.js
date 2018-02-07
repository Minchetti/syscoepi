import React from 'react';
import ReactDOM from 'react-dom';
import CriarConta from './CriarConta';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CriarConta />, div);
});