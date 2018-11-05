import React from 'react';
// import PropTypes from 'prop-types';
import ModalCriarConta from '../modalcriarconta';
import './login.css';
import { Redirect } from 'react-router-dom';
import logo from '../../logo.svg';
import $ from 'jquery'; 

// const Login = props => (

// <div id="Login" className="position-absolute col h-100 ">
//   <div className="boxLogin pt-80 position-absolute">
//     <link href='https://fonts.googleapis.com/css?family=Josefin+Sans' rel='stylesheet' type='text/css'/>
//     <div className="t-0 l-0 r-0 position-absolute d-nonin" id="msg-validou">
//       <i className="fa fa-check" aria-hidden="true"></i> Email validado com sucesso. Faça seu login.
//     </div>



//     <form className="mt-3 text-left">
//       <div className="form-group">
//         <label htmlFor="exampleInputEmail1">Email</label>
//         <input type="email" className="form-control" id="email-login" aria-describedby="emailHelp" placeholder="Digite o email"/>
//       </div>
//       <div className="form-group">
//         <label htmlFor="exampleInputPassword1">Senha</label>
//         <input type="password" className="form-control" id="senha-login" aria-describedby="emailHelp" placeholder="Digite a senha"/>
//       </div>
//       <button id="logar" type="submit" className="btn btn-primary btn-block btn-large mb-2">
//         <i className="fa fa-sign-in pr-2" aria-hidden="true"/>Entrar
//       </button>
//       <div className="d-flex justify-content-between w-100">
//         <span id="lnk-criar-conta" className="c-pointer" data-toggle="modal" data-target="#modal-usuario">Criar Conta</span>
//         <span className="c-pointer">Esqueci a Senha</span>
//       </div>

//     </form>

//     </div>

//     <ModalUsuario name="Criar Usuário"/>
// </div>

// );

// Login.propTypes = {
//   text: PropTypes.string.isRequired,
// };

// let IdUsuarioLogado = 'test';

class Login extends React.Component {
  state = {
    logged: '',
    email: '',
    senha: '',
    redirectToReferrer: false
  };


  onSubmit = e => {
    console.log('aq');
    e.preventDefault(); 
    fetch('http://192.168.10.30/v1/clientes/login', {
      method: 'post',
      body: JSON.stringify(this.state),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => {
      response.json().then(data => {
        
        if (data.success == true) {
          console.log(data);       
          
          // // json no cabeçalho do modal do painel do usuario
          // $('.modal .nome-usuario').text('Painel do Usuário - '+data.nome);           
          
          
          localStorage.setItem('logged', true);
          this.setState({ logged: true });

          // json msg boas vindas
          $('.msg-aviso').text('Bem Vindo '+data.data.usuarios[0].nome);
          $('.msg-aviso').fadeIn(2000);
          setTimeout(function() {$('.msg-aviso').fadeOut(2000);}, 2000); 
          
          // json no link para painel do usuario
          $('.nome-usuario').text(data.data.usuarios[0].nome.split(" ")[0]);
        } 
        else {
          alert(data.message+' - '+data.data[0].message);
          this.setState({ logged: false });
        }
      });
    })
    .catch(err => {
      console.error('Failed retrieving information', err);
      console.log(err);
      this.setState({ logged: false });
    });
  };
  

  ValidarEmail = () =>{
    var url = 'http://localhost:3000/login';
    var url_atual = window.location.href;

    if (url != url_atual){
      var parametrosDaUrl = url_atual.split("?")[1];
      var listaDeParametros = parametrosDaUrl.split("&");
      var dados1 = listaDeParametros[0].split("=");
      var dados2 = listaDeParametros[1].split("=");
      
      var dados = {
        id: dados1[1],
        token: dados2[1]
      }

      fetch('http://192.168.10.30/v1/clientes/email/valida', {
        method: 'post',
        body: JSON.stringify(dados),
        headers: {
          'content-type': 'application/json'
        }
      })
      .then(response => {
        response.json().then(data => {
          if (data.success == true) {

            // mostrar msg de confirmação de validação do email
            $('#msg-validou').fadeIn(2000);
            setTimeout(function() {$('#msg-validou').fadeOut(2000);}, 2000);                
            
            window.location.href = 'http://localhost:3000/login';
          } 
          else {
            alert(data.message+' - '+data.data[0].message);
          }
        });
      })
      .catch(err => {
        console.error('Failed retrieving information', err);
        this.setState({ logged: false });
      });
    }    
  }



  render() {

    this.ValidarEmail();


    if (this.state.logged) {
      return (
        <Redirect to={{ pathname: '/app/dashboard', state: { from: this.props.location } }}/>
      );
    } else {
      return (
        <div id="Login" className="position-absolute col h-100 ">
          <div className="boxLogin pt-80 position-absolute t-30">
            <div className="t-0 l-0 r-0 position-absolute d-nonin" id="msg-validou">
              <i className="fa fa-check"/> Email validado com sucesso. Faça seu login.
            </div>

            <h1><img src={logo} className="App-logo"/>SCEPI</h1>

            <form onSubmit={this.onSubmit} className="mt-3 text-left">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email</label>
                <input value={this.state.email} onChange={e => this.setState({ email: e.target.value })} type="email" className="form-control" id="email-login" placeholder="Digite o email" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Senha</label>
                <input value={this.state.senha} onChange={e => this.setState({ senha: e.target.value })} type="password" className="form-control" id="senha-login" placeholder="Digite a senha" /> {/*aria-describedby="emailHelp"*/}
              </div>
              <button type="submit" className="btn btn-primary btn-block mb-2">
                <i className="fa fa-sign-in-alt fa-lg pr-2" />Entrar
              </button>
              <div className="d-flex justify-content-between w-100">
                <span className="c-pointer" data-toggle="modal" data-target="#modal-criar-conta" >Criar Conta</span>
                <span className="c-pointer">Esqueci a Senha</span>
              </div>
            </form>
          </div>
          <ModalCriarConta/>
        </div>
      );
    }
  }
}










export default Login;
