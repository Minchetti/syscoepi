import React from 'react';
// import PropTypes from 'prop-types';

import AlertaEpi from '../alertaepi';
import UltimaReq from '../ultimareq';
import ReqAberta from '../reqaberta';
import ReqCancelada from '../reqcancelada';
import {teste} from '../../funcoes.js';


// @flow
class Dashboard extends React.Component {

  componentDidMount(){
    teste();

    // // json msg boas vindas
    // $('.msg-aviso').text('Bem Vindo '+localStorage.getItem('nome'));
    // $('.msg-aviso').fadeIn(2000);
    // setTimeout(function() {$('.msg-aviso').fadeOut(2000);}, 2000); 
    
    // json no link para painel do usuario    
    document.getElementsByClassName('nome-usuario')[0].innerText = localStorage.getItem('nome');
  }

  render(){
    return(
    <div id="dashboard" className="">
      <h4 className="col mt-2"><i className="fa fa-clipboard-list" aria-hidden="true"></i> Dashboard</h4> 
      <AlertaEpi /> 
      <div className="justify-content-between row">
        <UltimaReq size="col-4" big="d-none"/>
        <ReqAberta size="col-4" big="d-none"/> 
        <ReqCancelada size="col-4" big="d-none"/>
      </div>
    </div> 
    )   
  }
}




// const Dashboard = props => (

//   <div id="dashboard" className="">
//     <h4 className="col mt-2"><i className="fa fa-clipboard-list" aria-hidden="true"></i> Dashboard</h4> 
//     <AlertaEpi /> 
//     <div className="justify-content-between row">
//       <UltimaReq size="col-4" big="d-none"/>
//       <ReqAberta size="col-4" big="d-none"/> 
//       <ReqCancelada size="col-4" big="d-none"/>
//     </div>
//   </div>


// );

// Dashboard.propTypes = {
//   text: PropTypes.string.isRequired,
// };

export default Dashboard;