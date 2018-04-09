import React from 'react';
import ReactDOM from 'react-dom';
import ModalAddFuncionario from './ModalAddFuncionario';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ModalAddFuncionario />, div);
});