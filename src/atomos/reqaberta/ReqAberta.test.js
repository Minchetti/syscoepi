import React from 'react';
import ReactDOM from 'react-dom';
import ReqAberta from './ReqAberta';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ReqAberta />, div);
});