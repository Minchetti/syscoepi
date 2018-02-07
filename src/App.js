// React.createElement(type, [props], [...children])

import React, { Component } from 'react';
import './App.css';


import Login from './atomos/login';
import Dashboard from './atomos/dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">     


      <Login />
      <Dashboard/>
      
        
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}

        {/* {React.createElement(
          'p',
          { className: 'App-intro' },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          'To get started, edit ',
          React.createElement('code', null, 'src/App.js'),
          ' and save to reload.'
        )} */}
      </div>    
    );
  }  

}
export default App;

