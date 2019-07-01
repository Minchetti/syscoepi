import React from 'react';
import FontAwesome from 'react-fontawesome';
// import PropTypes from 'prop-types';

// @flow
const Button = props => (
  // <a href={props.text}>{props.value}</a>
  <button onmouseover={props.onmouseover} type="button" id={props.id} className={'btn ' + props.class} data-toggle="modal" data-target={props.target}>
    <FontAwesome name={props.icon}/>{props.text}
  </button>
);

// Button.propTypes = {
//   class: PropTypes.string.isRequired,
//   target: PropTypes.string.isRequired,
//   icon: PropTypes.string.isRequired,
//   text: PropTypes.string.isRequired
// };

export default Button;