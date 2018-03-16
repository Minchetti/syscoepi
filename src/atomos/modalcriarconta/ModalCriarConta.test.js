import React from 'react';
import ReactDOM from 'react-dom';
import ModalCriarConta from './ModalCriarConta';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ModalCriarConta />, div);
});