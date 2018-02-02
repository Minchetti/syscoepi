// React.createElement(type, [props], [...children])

import React, { Component } from 'react';
import logofita from './logo.png';
import './App.css';


import Label from './atomos/label';
import Form1 from './atomos/form1';
import Form2 from './atomos/form2';
import Table1 from './atomos/table1';
import AlertaEpi from './atomos/alertaepi';
import UltimaReq from './atomos/ultimareq';
import ReqAberta from './atomos/reqaberta';
import ReqCancelada from './atomos/reqcancelada';
import Request from './atomos/request';
import Company from './atomos/company';
import Modal1 from './atomos/modal1';
import Modal2 from './atomos/modal2';
import Modal3 from './atomos/modal3';
import Login from './atomos/login';
import MenuLateral from './atomos/menulateral';
import Cabecalho from './atomos/cabecalho';
// import Icone from './atomos/icone';


class App extends Component {
  render() {
    return (
      <div className="App">     


      <Login />
      
        
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}

        {/* {React.createElement(
          'p',
          { className: 'App-intro' },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          'To get started, edit ',
          React.createElement('code', null, 'src/App.js'),
          ' and save to reload.'
        )} */}

        <Cabecalho/>
        <MenuLateral/>

        {/* começo do content */}
          <div className="boxField p-20">        

                  
            <div id="dash" className="d-flex justify-content-between flex-wrap">
              <h3 className="text-shadow col mt-10"><i className="fa fa-dashboard" aria-hidden="true"></i> Dashboard</h3> 
              <AlertaEpi /> 
              <UltimaReq size="w-32" big="d-none"/>
              <ReqAberta size="w-32" big="d-none"/>
              <ReqCancelada size="w-32" big="d-none"/>
            </div>

            <Company />
            <Request />

          </div>
          {/* fim do content */}
          {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal3">login</button> */}

            {/* <Modal1/>   */}

            <Modal2/>  
            
          {/* <Modal3/>  login */}
      </div>    
    );
  }  
}


export default App;


// import React, { Component } from 'react'

// class Redirect extends Component {
//   componentDidMount() {
//     if (window.confirm(`Você realmente quer ir para ${this.props.to}?`)) {
//       window.location.href = this.props.to
//     }
//     this.props.afterRedirect()
//   }

//   render() {
//     return <span>Redirecting to {this.props.to}....</span>
//   }
// }

// class App extends Component {
//   state = { redirectTo: null }

//   redirectTo = url => this.setState({ redirectTo: url })

//   reset = () => this.setState({ redirectTo: null })

//   render() {
//     if (this.state.redirectTo) {
//       return <Redirect to={this.state.redirectTo} afterRedirect={this.reset} />
//     }
//     return (
//       <div>
//         <button type="button" onClick={() => this.redirectTo('http://google.com')}>
//           Redirecione-me para o Google
//         </button>
//         {' '}
//         <button type="button" onClick={() => this.redirectTo('http://bing.com')}>
//           Redirecione-me para o Bing
//         </button>
//       </div>
//     )
//   }
// }

// export default App
