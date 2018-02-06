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

import Request from '../request';
import Company from '../company';

// @flow
const Dashboard = props => (
  <div>

    <Cabecalho/>
    <MenuLateral/>
    <div className="boxField p-20">            

      <div id="dash" className="d-flex justify-content-between flex-wrap">
        <h3 className="text-shadow col mt-10"><i className="fa fa-dashboard" aria-hidden="true"></i> Dashboard</h3> 
        <AlertaEpi /> 
        <UltimaReq size="w-32" big="d-none "/>
        <ReqAberta size="w-32" big="d-none "/>
        <ReqCancelada size="w-32" big="d-none "/>
      </div>

      <Company />
      <Request />

      <Modal2/>  
    </div>
  </div>

  




);

Dashboard.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Dashboard;