// React.createElement(type, [props], [...children])

import React, { Component } from 'react';
import './App.css';
import Home from './atomos/home';
import Login from './atomos/login';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
} from 'react-router-dom';

const teste = () =>{
  console.log('FOIIIIIIII');
}



class App extends Component {



  render() {
    return (
      <div className="App overflow-h">

     
      <Router>
        <div className="h-100">
          {/* <AuthButton />
          <ul>
            <li>
              <Link to="/public">Pagina Institucional</Link>
            </li>
           
          </ul> */}
          <Route path="/public" component={Public} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/app" component={Home} />       
        </div>
      </Router>

        {/* <Home />     */}
        {/* <Login />         */}

        <div className="modal-loading">
          <i id="loading" className="fa fa-spinner" aria-hidden="true" />
        </div>

      </div>
    );
  }
}



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



const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem('logged') ? (
        <Component {...props} />
      ) : (
        <Redirect 
          to={{pathname: '/login', 
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const Public = () => 
<div id='asdasd'>
  <h1>
    PAGINA INSTITUCIONAL
  </h1>
  <Link to="/app/dashboard">Entrar no sistema!</Link>
</div>


export default App;



// class Login extends React.Component {
//   state = {
//     redirectToReferrer: false
//   };

//   login = () => {
//     const dados = {
//       Email: 'minchettimarcello@gmail.com',
//       Senha: '123'
//     }
//     fetch("http://192.168.10.30/v1/clientes/login",{
//       method: 'post',
//       body: JSON.stringify(dados),
//       headers: {
//         'content-type': 'application/json'
//       },
//     })
//     .then(function(response){
//         response.json().then(function(data){
//           console.log(data);

//           if (data.success == true){
//           }
//         });
//     })
//     .catch(function(err){
//       console.error('Failed retrieving information', err);
//       alert('nao deu');
//     });

//     fakeAuth.authenticate(() => {
//       this.setState({ redirectToReferrer: true });
//     });

//   };

//   render() {
//     const { from } = this.props.location.state || { from: { pathname: "/" } };
//     const { redirectToReferrer } = this.state;

//     if (redirectToReferrer) {
//       return <Redirect to={from} />;
//     }
//     return (
//       <div>
//         <p>You must log in to view the page at {from.pathname}</p>
//         <button onClick={this.login}>Log in</button>
//       </div>
//     );
//   }
// }


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