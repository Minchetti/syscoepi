// React.createElement(type, [props], [...children])

import React, { Component } from 'react';
import './App.css';

// import Login from './atomos/login';
import Home from './atomos/home';

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
      <script src="https://code.jquery.com/jquery-2.2.4.js" integrity="sha256-iT6Q9iMJYuQiMWNd9lDyBUStIq/8PuOW33aOqmvFpqI=" crossorigin="anonymous"></script>


        <Router>
          <div>
            <AuthButton />
            <ul>
              <li>
                <Link to="/public">Public Page</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
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
      <button id="logar" type="submit" className="btn btn-primary btn-block btn-large mb-2">
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




        
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}

export default App;

