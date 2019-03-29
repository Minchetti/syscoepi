import React from 'react';
import ReactDOM from 'react-dom';
import ModalCriarSubConta from './ModalCriarSubConta';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ModalCriarSubConta />, div);
});