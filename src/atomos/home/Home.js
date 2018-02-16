import React from 'react';
import PropTypes from 'prop-types';
// import Table1 from '../table1';
// import Form1 from '../form1';
// import Form2 from '../form2';
import Modal2 from '../modal2';
import MenuLateral from '../menulateral';
import Cabecalho from '../cabecalho';
// import Button from '../button';
import AlertaEpi from '../alertaepi';
import UltimaReq from '../ultimareq';
import ReqAberta from '../reqaberta';
import ReqCancelada from '../reqcancelada';
import Dashboard from '../dashboard';


import Request from '../request';
import Company from '../company';

// @flow



const Home = props => (
  <div id="home">
  
    <Cabecalho/>
    <MenuLateral/>


    <div className="boxField p-20">      

      {/* <div id="dash" className="d-nonin">
        <h4 className="text-shadow col mt-10"><i className="fa fa-dashboard" aria-hidden="true"></i> Dashboard</h4> 
        <AlertaEpi /> 
        <div className="d-flex justify-content-between">
          <UltimaReq size="w-32" big="d-none "/>
          <ReqAberta size="w-32" big="d-none "/> 
          <ReqCancelada size="w-32" big="d-none "/>
        </div>
      </div> */}

      <Dashboard /> 
      <Company /> 
      <Request />

      <Modal2/>  
    </div>
  </div>

  




);

Home.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Home;