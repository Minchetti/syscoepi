import React from 'react';
import PropTypes from 'prop-types';


import logo from '../../logo.svg';

// @flow
const Cabecalho = props => (
  
  <header className="App-header d-flex justify-content-between align-center p-fixed">
    <div className="d-flex align-center">  
      <img src={logo} className="App-logo" alt="logo" />
      <h2 className="App-title">SySCOEPI</h2>
      {/* <img src={logofita} className="" alt="logo" /> */}
    </div>
    <div className="d-flex ">

      <div className="pr-30">
        <i class="fa fa-bell fa-lg" aria-hidden="true"></i> 
      </div>

      <div className="pr-20">
        <i class="fa fa-user-circle" aria-hidden="true"></i> Usuário
      </div>
      <div className="pr-20">
      <i class="fa fa-question-circle" aria-hidden="true"></i> Ajuda
      </div>
      <div className="pr-20">
      <i class="fa fa-sign-out" aria-hidden="true"></i> Sair
      </div>
    </div>
  </header>

);

Cabecalho.propTypes = {
  nome: PropTypes.string.isRequired,
};

export default Cabecalho;