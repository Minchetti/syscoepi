import React from 'react';
import PropTypes from 'prop-types';
// import Button from '../button';
import CriarConta from '../criarconta';
import login from './login.css';

import logo from '../../logo.svg';


// @flow


const Login = props => (


<div id="Login" className="p-absolute col h-100 ">
  <div className="boxLogin pt-80 p-absolute">
    <link href='https://fonts.googleapis.com/css?family=Josefin+Sans' rel='stylesheet' type='text/css'/>
    
    <h1 className="h1L">
      <em>S</em>
      <em>y</em>
      <em>S</em>
      <em>C</em>
      <em className="planet left"><img src={logo} className="App-logoL" alt="logo" /></em>
      <em>E</em>
      <em>P</em>
      <em>I</em>
    </h1>


    <form className="mt-20 text-left">
      <div className="form-group">
        <label for="exampleInputEmail1">Email</label>
        <input type="email" className="form-control" id="email-login" aria-describedby="emailHelp" placeholder="Digite o email"/>
        {/* <input type="text" className="form-control" id="user-login" aria-describedby="emailHelp" placeholder="Enter user"/> */}
        {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Password</label>
        {/* <input type="password" className="form-control" id="senha-login" placeholder="Password"/> */}
        <input type="password" className="form-control" id="senha-login" aria-describedby="emailHelp" placeholder="Digite a senha"/>
      </div>
      {/* <div className="form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
        <label className="form-check-label" for="exampleCheck1">Check me out</label>
      </div> */}
      <button id="logar" type="submit" className="btn btn-primary btn-block btn-large float-right">Submit</button>
      <p data-toggle="modal" data-target="#modal-criar-conta">Create Account</p>     
      
      {/* <Button class="btn-dark" icon="fa-info pr-10" text="Dados da Empresa"/> */}
    </form>

    </div>



    <CriarConta/>
</div>



);

Login.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Login;