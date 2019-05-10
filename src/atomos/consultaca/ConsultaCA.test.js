import React from 'react';
import ReactDOM from 'react-dom';
import ConsultaCA from './ConsultaCA';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ConsultaCA />, div);
});