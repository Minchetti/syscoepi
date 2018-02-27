import React from 'react';
import ReactDOM from 'react-dom';
import ModalUsuario from './ModalUsuario';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ModalUsuario />, div);
});