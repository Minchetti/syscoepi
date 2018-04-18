import React from 'react';
// import PropTypes from 'prop-types';

import AlertaEpi from '../alertaepi';
import UltimaReq from '../ultimareq';
import ReqAberta from '../reqaberta';
import ReqCancelada from '../reqcancelada';


// @flow
const Dashboard = props => (

  <div id="dashboard" className="">
    <h4 className="col mt-2"><i className="fa fa-clipboard-list" aria-hidden="true"></i> Dashboard</h4> 
    <AlertaEpi /> 
    <div className="justify-content-between row">
      <UltimaReq size="col-4" big="d-none"/>
      <ReqAberta size="col-4" big="d-none"/> 
      <ReqCancelada size="col-4" big="d-none"/>
    </div>
  </div>


);

// Dashboard.propTypes = {
//   text: PropTypes.string.isRequired,
// };

export default Dashboard;