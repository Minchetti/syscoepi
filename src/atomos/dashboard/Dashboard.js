import React from 'react';
import PropTypes from 'prop-types';
import Table1 from '../table1';
import Form1 from '../form1';
import Form2 from '../form2';
import Modal2 from '../modal2';
import MenuLateral from '../menulateral';
import Cabecalho from '../cabecalho';
import Button from '../button';
import AlertaEpi from '../alertaepi';
import UltimaReq from '../ultimareq';
import ReqAberta from '../reqaberta';
import ReqCancelada from '../reqcancelada';
// import CriarConta from '../criarconta';

import Request from '../request';
import Company from '../company';

// @flow
const Dashboard = props => (
  <div>
    <Cabecalho/>
    <MenuLateral/>
    <div className="boxField p-20">            
    {/* <p data-toggle="modal" data-target="#modal-criar-conta">Create Account</p>   */}

      <div id="dash" className="">
        <h4 className="text-shadow col mt-10"><i className="fa fa-dashboard" aria-hidden="true"></i> Dashboard</h4> 
        <AlertaEpi /> 
        <div className="d-flex justify-content-between">
          <UltimaReq size="w-32" big="d-none "/>
          <ReqAberta size="w-32" big="d-none "/> 
          <ReqCancelada size="w-32" big="d-none "/>
        </div>
      </div>

      <Company /> 
      <Request />

      {/* <Modal2/>   */}
    {/* <CriarConta/> */}
    </div>
  </div>

  




);

Dashboard.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Dashboard;