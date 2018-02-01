import React from 'react';
import PropTypes from 'prop-types';

// @flow
const Label = props => (
  <span id={props.id}>{props.text}</span>
);

Label.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Label;