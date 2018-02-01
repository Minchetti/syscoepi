import React from 'react';
import ReactDOM from 'react-dom';
import Imagem from './Imagem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Imagem />, div);
});