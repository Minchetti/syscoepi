import React from 'react'
import renderer from 'react-test-renderer'

import Cabecalho from './Cabecalho'

describe('Cabecalho', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Cabecalho nome="spinner" />, div);
  });

  it('default rendering', () => {
    const component = renderer.create(
      <Cabecalho nome="spinner" />
    )

    expect(component.toJSON()).toMatchSnapshot()
  });
});


