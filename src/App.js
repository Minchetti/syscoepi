// React.createElement(type, [props], [...children])

import React, { Component } from 'react';
import './App.css';

import Login from './atomos/login';
import Home from './atomos/home';

class App extends Component {
  render() {
    return (
      <div className="App">     


        <Login />        
        <Home />   
        
        <div className="modal-loading">
          <i id="loading" className="fa fa-spinner" aria-hidden="true" ></i>
        </div>
      
   
      </div>    
    );
  }  
}
export default App;

