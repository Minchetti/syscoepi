import React from 'react';
import ReactDOM from 'react-dom';
import ReqCancelada from './ReqCancelada';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ReqCancelada />, div);
});