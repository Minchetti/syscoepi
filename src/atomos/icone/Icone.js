import React from 'react';
import PropTypes from 'prop-types';

// @flow
const Icone = props => (
  <span className={`fa fa-${props.nome}`}></span>
);

Icone.propTypes = {
  nome: PropTypes.string.isRequired,
};

export default Icone;