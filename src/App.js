// React.createElement(type, [props], [...children])

import React, { Component } from 'react';
import logo from './logo.svg';
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
// import Icone from './atomos/icone';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header d-flex justify-content-between align-center p-fixed">
          <div className="d-flex align-center">  
            <img src={logo} className="App-logo" alt="logo" />
            <h2 className="App-title">SySCOEPI</h2>
            {/* <img src={logofita} className="" alt="logo" /> */}
          </div>
          <div className="d-flex ">

            <div className="pr-30">
              <i class="fa fa-bell fa-lg" aria-hidden="true"></i> 
            </div>

            <div className="pr-20">
              <i class="fa fa-user-circle" aria-hidden="true"></i> Usuário
            </div>
            <div className="pr-20">
            <i class="fa fa-question-circle" aria-hidden="true"></i> Ajuda
            </div>
            <div className="pr-20">
            <i class="fa fa-sign-out" aria-hidden="true"></i> Sair
            </div>
          </div>
        </header>
        
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}

        {/* {React.createElement(
          'p',
          { className: 'App-intro' },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          'To get started, edit ',
          React.createElement('code', null, 'src/App.js'),
          ' and save to reload.'
        )} */}


    
        {/* começo do menu*/}   
        <div className="nav-side-menu p-fixed">
          <div className="brand">
            <a id="menu-toggle" href="#" className="d-flex justify-content-between align-center pl-10 pr-20">Menu
              <span id="main_icon" className="glyphicon glyphicon-align-justify"></span>
            </a>
          </div>          
          <i className="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>
        
            <div className="menu-list">      
              <ul id="menu-content" className="menu-content collapse out">
                <li>
                  <a href="#" className="dashboard p-relative d-flex justify-content-between align-center pl-10 pr-20">
                    Dashboard <i className="fa fa-dashboard fa-lg"></i> 
                  </a>
                </li>

                <li>
                  <a href="#" className="request p-relative d-flex justify-content-between align-center pl-10 pr-20">
                    Requisições <i className="fa fa-clipboard fa-lg"></i> 
                  </a>
                </li>

                {/* <li  data-toggle="collapse" data-target="#products" className="collapsed active">
                  <a href="#" className="request p-relative d-flex justify-content-between align-center pl-10 pr-20">
                    Requisições <i className="fa fa-clipboard fa-lg"></i> 
                    <span className="arrow p-absolute"></span>
                  </a>
                </li>
                <ul className="sub-menu collapse" id="products">
                  <li className="active d-flex justify-content-between align-center"><a href="#">Nova</a><i className="fa fa-plus" aria-hidden="true"></i></li>
                  <li className="d-flex justify-content-between align-center"><a href="#">Aprovar</a><i className="fa fa-thumbs-up" aria-hidden="true"></i></li>
                  <li class="d-flex justify-content-between align-center"><a href="#">Procurar</a><i className="fa fa-search" aria-hidden="true"></i></li>
                </ul> */}

                <li>
                  <a href="#" className="company p-relative d-flex justify-content-between align-center pl-10 pr-20">
                    Empresas <i className="fa fa-building fa-lg"></i> 
                  </a>
                </li>

                {/* <li data-toggle="collapse" data-target="#service" className="collapsed">
                  <a href="#" className="company p-relative d-flex justify-content-between align-center pl-10 pr-20">
                    Empresas <i class="fa fa-building fa-lg" aria-hidden="true"></i>
                    <span className="arrow p-absolute"></span>
                  </a>
                </li>  
                <ul className="sub-menu collapse" id="service">
                  <li>Service 1</li>
                  <li>Service 2</li>
                  <li>Service 3</li>
                </ul> */}


                <li data-toggle="collapse" data-target="#service" className="collapsed">
                  <a href="#" className="p-relative d-flex justify-content-between align-center pl-10 pr-20">
                    Templates <i class="fa fa-folder-open fa-lg" aria-hidden="true"></i>
                    <span className="arrow p-absolute"></span>
                  </a>
                </li>  
                <ul className="sub-menu collapse" id="service">
                  <li>Service 1</li>
                  <li>Service 2</li>
                  <li>Service 3</li>
                </ul>

                <li data-toggle="collapse" data-target="#new" className="collapsed">
                  <a href="#" className="p-relative d-flex justify-content-between align-center pl-10 pr-20">
                    Relatórios <i class="fa fa-line-chart fa-lg" aria-hidden="true"></i>  
                  </a>
                </li>
            </ul>
          </div>
        </div>
        {/* fim do menu */}


        {/* começo do content */}
          <div className="boxField p-20">        

                  

            <div id="dash" className="d-flex justify-content-between flex-wrap">
              <h3 className="col mt-10"><i className="fa fa-dashboard" aria-hidden="true"></i> Dashboard</h3> 
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

          <Modal1/>  
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
