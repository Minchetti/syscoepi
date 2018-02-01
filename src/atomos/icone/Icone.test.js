import React from 'react'
import renderer from 'react-test-renderer'

import Icone from './Icone'

describe('Icone', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Icone nome="spinner" />, div);
  });

  it('default rendering', () => {
    const component = renderer.create(
      <Icone nome="spinner" />
    )

    expect(component.toJSON()).toMatchSnapshot()
  });
});


