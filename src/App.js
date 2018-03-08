// React.createElement(type, [props], [...children])

import React, { Component } from 'react';
import './App.css';
import Home from './atomos/home';
import API from 'fetch-api';
// import $ from 'https://code.jquery.com/jquery-2.2.4.js';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">     



        <Router>
          <div>
            <AuthButton />
            <ul>
              <li>
                <Link to="/public">Public Page</Link>
              </li>
              <li>
                <Link to="/protected">Protected Page</Link>
              </li>
            </ul>
            <Route path="/public" component={Public} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/protected" component={Protected} />
          </div>
        </Router>


        {/* <Login />         */}
        <Home />   
        
        <div className="modal-loading">
          <i id="loading" className="fa fa-spinner" aria-hidden="true" ></i>
        </div>




<div id="Login" className="p-absolute col h-100 ">
        <div className="boxLogin pt-80 p-absolute">
        <link href='https://fonts.googleapis.com/css?family=Josefin+Sans' rel='stylesheet' type='text/css'/>
        <div className="t-0 l-0 r-0 p-absolute d-nonin" id="msg-validou">
        <i className="fa fa-check" aria-hidden="true"></i> Email validado com sucesso. Faça seu login.
        </div>
        <form className="mt-20 text-left">
        <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email</label>
        <input type="email" className="form-control" id="email-login" aria-describedby="emailHelp" placeholder="Digite o email"/>
        </div>
        <div className="form-group">
                <label htmlFor="exampleInputPassword1">Senha</label>
                <input type="password" className="form-control" id="senha-login" aria-describedby="emailHelp" placeholder="Digite a senha"/>
                </div>
                <button onClick={this.login} id="logar" type="submit" className="btn btn-primary btn-block btn-large mb-2">
                <i className="fa fa-sign-in pr-2" aria-hidden="true"/>Entrar
                </button>
                <div className="d-flex justify-content-between w-100">
                <span id="lnk-criar-conta" className="c-pointer" data-toggle="modal" data-target="#modal-usuario">Criar Conta</span> 
                <span className="c-pointer">Esqueci a Senha</span>     
                </div>
                </form>
                </div>
              </div> 






      </div>    
    );
  }  
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};





const AuthButton = withRouter(
  ({ history }) =>
    fakeAuth.isAuthenticated ? (
      <p>
        Welcome!{" "}
        <button
          onClick={() => {
            fakeAuth.signout(() => history.push("/"));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    )
);


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);



const Public = () => <h3>Public</h3>;
const Protected = () => <h3>Protected</h3>;



class Login extends React.Component {
  state = {
    redirectToReferrer: false
  };  
  
  login = () => {
    const dados = {
      Email: 'minchettimarcello@gmail.com',
      Senha: '123'
    }
    fetch("http://192.168.10.30/v1/clientes/login",{ 
      method: 'post',
      body: JSON.stringify(dados),
      headers: {
        'content-type': 'application/json'
      },
    })
    .then(function(response){
        response.json().then(function(data){
          console.log(data);

          if (data.success == true){
          }
        });
    })
    .catch(function(err){
      console.error('Failed retrieving information', err);
      alert('nao deu');
    });
    
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
    
  };
  
  
  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }
    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}

export default App;


        {/* <div id="Login" className="p-absolute col h-100 ">
        <div className="boxLogin pt-80 p-absolute">
        <link href='https://fonts.googleapis.com/css?family=Josefin+Sans' rel='stylesheet' type='text/css'/>
        <div className="t-0 l-0 r-0 p-absolute d-nonin" id="msg-validou">
        <i className="fa fa-check" aria-hidden="true"></i> Email validado com sucesso. Faça seu login.
        </div>
        <form className="mt-20 text-left">
        <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email</label>
        <input type="email" className="form-control" id="email-login" aria-describedby="emailHelp" placeholder="Digite o email"/>
        </div>
        <div className="form-group">
                <label htmlFor="exampleInputPassword1">Senha</label>
                <input type="password" className="form-control" id="senha-login" aria-describedby="emailHelp" placeholder="Digite a senha"/>
                </div>
                <button onClick={this.login} id="logar" type="submit" className="btn btn-primary btn-block btn-large mb-2">
                <i className="fa fa-sign-in pr-2" aria-hidden="true"/>Entrar
                </button>
                <div className="d-flex justify-content-between w-100">
                <span id="lnk-criar-conta" className="c-pointer" data-toggle="modal" data-target="#modal-usuario">Criar Conta</span> 
                <span className="c-pointer">Esqueci a Senha</span>     
                </div>
                </form>
                </div>
              </div> */}
                                          
              
              
      // const dados = {      
      //   Email: $('#email-login').val(),
      //   Senha: $('#senha-login').val()
      // }      
      // $.ajax({
      //   url: 'http://192.168.10.30/v1/clientes/login',
      //   type: 'POST',
      //   dataType: 'json',
      //   contentType: 'application/json',
      //   crossDomain: true,
      //   processData: false,
      //   data: JSON.stringify(dados),
      //   headers: {
      //     'Access-Control-Allow-Origin': '*',
      //     'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      //     'Access-Control-Allow-Headers': 'Content-Type',
      //     'Access-Control-Max-Age': '86400'
      //   },
      //   beforeSend: function(){
      //     $('.modal-loading').show();
      //     $('#loading').show();
      //   },
      //   success: function(json) {    
      //     $('.modal-loading').hide();
      //     $('#loading').hide(); 
          
      //     if (json.success == true){
      //       this.setState({ redirectToReferrer: true });
      //       $('#Login').remove(); //remove    
      //       $('#home').show();    
      //       $('#request').hide(); 
      //       $('#company').hide(); 
            
      //       // json no link para painel do usuario
      //       $('.nome-usuario').text(json.data.nome);
            
      //       // json no cabeçalho do modal do painel do usuario
      //       $('.modal .nome-usuario').text('Painel do Usuário - '+json.data.nome);  
      
      //       // json msg boas vindas
      //       $('.msg-aviso').text('Bem Vindo '+json.data.nome);
      //       $('.msg-aviso').fadeIn(2000);
      //       setTimeout(function() {$('.msg-aviso').fadeOut(2000);}, 2000); 
      
      //       // json no layout do modal de usuario
      //       // $('#input-nome').val(json.data.nome);
      //       // $('#input-cpf').val(json.data.cpf);
      //       // $('#input-celular').val(json.data.celular);
      //       // $('#input-email').val(json.data.email);
      //       // $('#input-senha').val(json.data.senha);
      //       // $('#input-confirma-senha').val(json.data.confirma-senha); 
      //     }  
      //     else{
      //       alert(json.message+', '+json.data[0].message);
      //       console.log(json);
      //     }
      //   },
      //   error: function(err){
      //     $('.modal-loading').hide();
      //     $('#loading').hide();
      //     console.log(err)
      //     alert('Não conseguimos conectar ao servidor, tente novamente em alguns segundos');
      //   }
      // });