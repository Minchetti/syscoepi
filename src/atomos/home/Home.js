import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import PropTypes from 'prop-types';


import MenuLateral from '../menulateral';
import Cabecalho from '../cabecalho';
import Dashboard from '../dashboard';
// import ModalUsuario from '../modalusuario';
import Request from '../request';
import Company from '../company';


// cantelmo
const Home = props => (
<Router>
  <div className="h-100">
  
    <Cabecalho/>

    <div className="d-flex w-100">
      <MenuLateral/>
      <div className="boxField p-4 w-100 p-fixed">       
        <Route path="/app/dashboard" component={Dashboard} /> 
        <Route path="/app/request" component={Request} />
        <Route path="/app/company" component={Company} />
        {/* <ModalUsuario/>   */}
      </div>
    </div>  
      


  </div> 
</Router>
);



export default Home;