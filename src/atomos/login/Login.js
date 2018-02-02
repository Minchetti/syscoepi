import React from 'react';
import PropTypes from 'prop-types';
import capacete from '../../capacete.png';
import bota2 from '../../bota2.png';
import abafador from '../../abafador.png';
import Button from '../button';
import login from './login.css';

import logo from '../../logo.svg';


// @flow


const Login = props => (
  // <span>{props.text}</span>


<div className="Login p-absolute z-99 col h-100 ">
  <div className="boxLogin pt-80 p-absolute">
    <link href='https://fonts.googleapis.com/css?family=Josefin+Sans' rel='stylesheet' type='text/css'/>
    
    <h1 className="h1L">
      <em>S</em>
      <em>y</em>
      <em>S</em>
      <em>C</em>
      <em class="planet left"><img src={logo} className="App-logoL" alt="logo" /></em>
      <em>E</em>
      <em>P</em>
      <em>I</em>
    </h1>


    <form className="mt-80 text-left">
      <div className="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
        {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
      </div>
      {/* <div className="form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
        <label className="form-check-label" for="exampleCheck1">Check me out</label>
      </div> */}
      <button id="logar" type="submit" className="btn btn-primary btn-block btn-large float-right">Submit</button>
    </form>

    </div>
</div>



   /* <span>FORMULARIO 1</span> */
);

Login.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Login;