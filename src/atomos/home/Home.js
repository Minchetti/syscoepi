import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import PropTypes from 'prop-types';


import MenuLateral from '../menulateral';
import Cabecalho from '../cabecalho';
import Dashboard from '../dashboard';
// import ModalUsuario from '../modalusuario';
import Request from '../request';
import Company from '../company';
import Employees from '../employees';
import Epis from '../epis';


const Home = props => (
<Router>
  <div className="h-100">
  
  <div id="progress-bar"></div>
    <Cabecalho/>

    <div className="d-flex w-100 h-100">
      <MenuLateral/>
      <div className="boxField p-4 w-100 overflow-x">       
        <Route path="/app/dashboard" component={Dashboard} /> 
        <Route path="/app/request" component={Request} />
        <Route path="/app/company" component={Company} />
        <Route path="/app/employees" component={Employees} />
        <Route path="/app/epis" component={Epis} />
        {/* <ModalUsuario/>   */}
      </div>
    </div>  
      


  </div> 
</Router>
);



export default Home;