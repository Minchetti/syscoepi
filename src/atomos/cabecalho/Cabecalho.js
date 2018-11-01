import React from 'react';
// import PropTypes from 'prop-types';
import logo from '../../logo.svg';
import ModalUsuario from '../modalusuario';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
} from 'react-router-dom';



  const AuthButton = withRouter(
    ({ history }) => (
      <a className="pr-3 c-pointer" id="logout" onClick={() => {
        localStorage.removeItem('logged');
        history.push('/public')      
        // alert('flw fio');
        window.location.reload(true); //tirar isso e descobrir pq ele n muda a pagina depois de mudar a rota
      }}>
        <i className="fa fa-sign-out-alt" aria-hidden="true"></i> Log Out
      </a>         
    )
  )




class Cabecalho extends React.Component {  
  
  render() {    
    return (
      <header className="App-header d-flex justify-content-between align-items-center">

        <h2 className="m-0 d-flex align-items-center"><span><img src={logo} className="App-logo"/>SCEPI</span></h2>

        <span className="d-nonin msg-aviso"></span>

        <div className="d-flex">
          <div id="lnk-painel-usuario" className="mr-3 c-pointer" data-toggle="modal" data-target="#modal-usuario">
            <i className="fa fa-user-circle mr-2"></i> 
            <span className="nome-usuario"></span>
          </div>          
          <div className="mr-3">
            <i className="fa fa-question-circle"></i> Ajuda
          </div>

          <AuthButton/>

        </div>
        <ModalUsuario/>
      </header>
    )  
  }
}




export default Cabecalho;