import React from 'react';
import ReactDOM from 'react-dom';
import ModalAddEpi from './ModalAddEpi';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ModalAddEpi />, div);
});