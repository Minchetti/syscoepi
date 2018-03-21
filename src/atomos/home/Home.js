import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import PropTypes from 'prop-types';


import MenuLateral from '../menulateral';
import Cabecalho from '../cabecalho';
import Dashboard from '../dashboard';
import ModalUsuario from '../modalusuario';
import Request from '../request';
import Company from '../company';


// cantelmo
const Home = props => (
<Router>
  <div id="home" className="d-flex flex-wrap">
  
    <Cabecalho/>

    <div className="d-flex w-100">
      <MenuLateral/>
      <div id="Home" className="boxField p-4 w-100">       
        <Route path="/home/dashboard" component={Dashboard} /> 
        <Route path="/home/request" component={Request} />
        <Route path="/home/company" component={Company} />
        {/* <ModalUsuario/>   */}
      </div>
    </div>
   
      


  </div> 
    </Router>
);



export default Home;