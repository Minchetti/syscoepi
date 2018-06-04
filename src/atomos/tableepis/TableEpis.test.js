import React from 'react';
import ReactDOM from 'react-dom';
import TableEpis from './TableEpis';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TableEpis />, div);
});