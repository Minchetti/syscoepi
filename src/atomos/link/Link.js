import React from 'react';
import PropTypes from 'prop-types';

// @flow
const Link = props => (
  <a href={props.text}>{props.value}</a>
);

Link.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default Link;