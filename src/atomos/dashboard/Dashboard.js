import React from 'react';
// import PropTypes from 'prop-types';

import AlertaEpi from '../alertaepi';
import UltimaReq from '../ultimareq';
import ReqAberta from '../reqaberta';
import ReqCancelada from '../reqcancelada';
import Acidentes from '../acidentes';


// @flow
const Dashboard = props => (

  <div id="dashboard" className="">
    <h4 className="position-absolute m-auto l-0 r-0 t-15 text-white"><i className="fa fa-clipboard-list" aria-hidden="true"></i> Dashboard</h4> 
    <AlertaEpi /> 
    <div className="justify-content-between row mb-4">
      <UltimaReq size="col-4" big="d-none"/>
      <ReqAberta size="col-4" big="d-none"/> 
      <ReqCancelada size="col-4" big="d-none"/>
    </div>
      <Acidentes />
  </div>


);

// Dashboard.propTypes = {
//   text: PropTypes.string.isRequired,
// };

export default Dashboard;