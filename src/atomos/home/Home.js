import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import PropTypes from 'prop-types';


import MenuLateral from '../menulateral';
import Cabecalho from '../cabecalho';
import Dashboard from '../dashboard';
import ModalUsuario from '../modalusuario';
import Request from '../request';
import Company from '../company';



const Home = props => (
<Router>
  <div id="home">
  
    <Cabecalho/>

    {/* MENU LATERAL */}
    <div className="nav-side-menu p-fixed">
      <div className="brand">
        <a id="menu-toggle"  className="d-flex justify-content-between align-center pl-2 pr-20">Menu
          <i id="menu-arrow" className="fa fa-arrow-circle-left "></i>
        </a>
      </div>      
      <div className="menu-list">      
        <ul id="menu-content" className="menu-content collapse out">
          <li>
              <Link className="p-relative d-flex justify-content-between align-center pl-2 pr-20" to="/home/dashboard">
              Dashboard <i className="fa fa-dashboard fa-lg"></i>                     
              </Link>               
          </li>
          <li>
              <Link className="p-relative d-flex justify-content-between align-center pl-2 pr-20" to="/home/request">
              Requisições <i className="fa fa-clipboard fa-lg"></i>                     
              </Link>               
          </li>
          <li>
              <Link className="p-relative d-flex justify-content-between align-center pl-2 pr-20" to="/home/company">
              Empresas <i className="fa fa-building fa-lg"></i>                     
              </Link>               
          </li>

          <li data-toggle="collapse" data-target="#service" className="collapsed">
            <a  className="p-relative d-flex justify-content-between align-center pl-2 pr-20">
              Templates <i className="fa fa-folder-open fa-lg" aria-hidden="true"></i>
              <span className="arrow p-absolute"></span>
            </a>
          </li>  
          <ul className="sub-menu collapse" id="service">
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
          </ul>

          <li data-toggle="collapse" data-target="#new" className="collapsed">
            <a  className="p-relative d-flex justify-content-between align-center pl-2 pr-20">
              Relatórios <i className="fa fa-line-chart fa-lg" aria-hidden="true"></i>  
            </a>
          </li>
        </ul>
      </div>      
    </div>
      
  
    <div id="Home" className="boxField p-20">       
      <Route path="/home/dashboard" component={Dashboard} /> 
      <Route path="/home/request" component={Request} />
      <Route path="/home/company" component={Company} />
      <ModalUsuario/>  
    </div>


  </div> 
    </Router>
);



export default Home;