import React from 'react';
import ReactDOM from 'react-dom';
import PreviewFuncionarios from './PreviewFuncionarios';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PreviewFuncionarios />, div);
});