import React from 'react';
import ReactDOM from 'react-dom';
import TableFuncionarios from './TableFuncionarios';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TableFuncionarios />, div);
});