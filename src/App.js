// React.createElement(type, [props], [...children])

import React, { Component } from 'react';
import './App.css';

import Login from './atomos/login';
import Dashboard from './atomos/dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">     


      {/* <Login /> */}
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

