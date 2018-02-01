import React from 'react';
import PropTypes from 'prop-types';

// @flow
const Imagem = props => (
  <img src={props.text}></img>
);

Imagem.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Imagem;