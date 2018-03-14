import React from 'react';
// import PropTypes from 'prop-types';
import logo from '../../logo.svg';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
} from 'react-router-dom';


<link href='https://fonts.googleapis.com/css?family=Josefin+Sans' rel='stylesheet' type='text/css'/>


// @flow
const Cabecalho = props => (

  <header className="App-header d-flex justify-content-between align-center p-fixed">
    <div className="d-flex align-center">  

      <h2 className="App-title d-flex align-center"><span>SySC</span><img src={logo} className="App-logo " alt="logo" /><span className="mln-10">EPI</span></h2>

      {/* <h2 className="App-title">SySCOEPI</h2> */}
      {/* <img src={logofita} className="" alt="logo" /> */}
    </div>

    <div>
      <span className="d-nonin msg-aviso"></span>
    </div>

    <div className="d-flex ">
      <div className="pr-30">
        <i className="fa fa-bell " aria-hidden="true"></i> 
      </div>
      <div id="lnk-painel-usuario" className="pr-20 c-pointer"  data-toggle="modal" data-target="#modal-usuario">
        <i className="fa fa-user-circle" aria-hidden="true"></i> <span className="nome-usuario"></span>
      </div>
      
      <div className="pr-20">
        <i className="fa fa-question-circle" aria-hidden="true"></i> Ajuda
      </div>

     <AuthButton/>

    </div>
  </header>
);


const AuthButton = withRouter(
  ({ history }) => (
    <a className="pr-20 c-pointer" id="logout" onClick={() => {
      localStorage.removeItem('logged');
      history.push('/login')      
      alert('flw fio de puta');
      window.location.reload(true); //tirar isso e descobrir pq ele n muda a pagina depois de mudar a rota
    }}>
      <i className="fa fa-sign-out" aria-hidden="true"></i> Log Out
    </a>         
  )
);

// const AuthButton = withRouter(
//   ({ history }) => localStorage.getItem('logged') ? (
//       <p>
//         Welcome!
//         <button onClick={() => {localStorage.removeItem('logged'); history.push('/login')}}>
//           Sign out
//         </button>
//       </p>
//     ) : (
//       <p>You are not logged in.</p>
//     )
// );


export default Cabecalho;