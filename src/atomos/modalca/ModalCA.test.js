import React from 'react';
import ReactDOM from 'react-dom';
import ModalCA from './ModalCA';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ModalCA />, div);
});