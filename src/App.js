
import React, { Component } from 'react';
import './App.css';
import Home from './atomos/home';
import Login from './atomos/login';
import FontAwesome from 'react-fontawesome';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  // withRouter,
} from 'react-router-dom';

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

      
        <div className="modal-loading">
          <FontAwesome id="loading" name="spinner"/>
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