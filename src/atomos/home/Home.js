import React from 'react';
// import PropTypes from 'prop-types';


import MenuLateral from '../menulateral';
import Cabecalho from '../cabecalho';
import Dashboard from '../dashboard';
import ModalUsuario from '../modalusuario';
import Request from '../request';
import Company from '../company';

// @flow



const Home = props => (
  <div id="home">
  
    <Cabecalho/>
    <MenuLateral/>


    <div id="Home" className="boxField p-20">     
      

      <Dashboard /> 
      <Company /> 
      <Request />

      <ModalUsuario/>  

    </div>
  </div>

  




);

// Home.propTypes = {
//   text: PropTypes.string.isRequired,
// };

export default Home;