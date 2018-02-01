import React from 'react';
import ReactDOM from 'react-dom';
import Table1 from './Table1';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Table1 />, div);
});