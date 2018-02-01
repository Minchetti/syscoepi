import React from 'react';
import ReactDOM from 'react-dom';
import UltimaReq from './UltimaReq';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UltimaReq />, div);
});