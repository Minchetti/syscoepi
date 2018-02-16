import React from 'react';
import PropTypes from 'prop-types';

import AlertaEpi from '../alertaepi';
import UltimaReq from '../ultimareq';
import ReqAberta from '../reqaberta';
import ReqCancelada from '../reqcancelada';

// @flow
const Dashboard = props => (
  // <span>{props.text}</span>

  <div id="dashboard" className="">
    <h4 className="text-shadow col mt-10"><i className="fa fa-dashboard" aria-hidden="true"></i> Dashboard</h4> 
    <AlertaEpi /> 
    <div className="d-flex justify-content-between">
      <UltimaReq size="w-32" big="d-none "/>
      <ReqAberta size="w-32" big="d-none "/> 
      <ReqCancelada size="w-32" big="d-none "/>
    </div>
  </div>





   /* <span>FORMULARIO 1</span> */
);

Dashboard.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Dashboard;