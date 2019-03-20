import React from 'react';
import ReactDOM from 'react-dom';
import ModalCriarRequisicao from './ModalCriarRequisicao';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ModalCriarRequisicao />, div);
});