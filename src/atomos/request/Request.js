import React from 'react';
// import PropTypes from 'prop-types';
import ReqAberta from '../reqaberta';
import ReqCancelada from '../reqcancelada';
import UltimaReq from '../ultimareq';


const Request = props => (


        <div id="request" className=""> 
          <h4 className="mt-2"><i className="fa fa-clipboard" aria-hidden="true"></i> Requisições</h4>           
          
          <div className="row"> 
            <UltimaReq size="col" small="d-none "/> 
            <ReqAberta size="col" small="d-none "/> 
            <ReqCancelada size="col" small="d-none "/> 
          </div> 
          
          
        </div>      


);

// Request.propTypes = {
//   text: PropTypes.string.isRequired,
// };

export default Request;