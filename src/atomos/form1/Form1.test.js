import React from 'react';
import ReactDOM from 'react-dom';
import Form1 from './Form1';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Form1 />, div);
});