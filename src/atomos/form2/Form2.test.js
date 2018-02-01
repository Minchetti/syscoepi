import React from 'react';
import ReactDOM from 'react-dom';
import Form2 from './Form2';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Form2 />, div);
});