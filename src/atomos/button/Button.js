import React from 'react';
import PropTypes from 'prop-types';

// @flow
const Button = props => (
  // <a href={props.text}>{props.value}</a>
  <button type="button" className={'btn ' + props.class} data-toggle="modal" data-target="#exampleModal2">
    <i className={'fa ' + props.icon} aria-hidden="true" ></i>{props.text}
  </button>
);

Button.propTypes = {
  class: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Button;