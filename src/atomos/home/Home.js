import React from 'react';
import { BrowserRouter as Router, Route, /*Link*/ } from "react-router-dom";
// import PropTypes from 'prop-types';


import MenuLateral from '../menulateral';
import Cabecalho from '../cabecalho';
import Dashboard from '../dashboard';
// import ModalUsuario from '../modalusuario';
import Request from '../request';
import Company from '../company';
import Employees from '../employees';
import Epis from '../epis';
import ConsultaCA from '../consultaca';






class Home extends React.Component {
  state = {
    arrayEmpresas: []
  };

  componentWillMount(){ 
    this.CarregarEmpresas();
  }


  CarregarEmpresas = () => {  
     // var EmpresaSelecionada = document.getElementById("select-empresas").value;
    
    // fetch('http://192.168.10.30/v1/cliente/{id}/empresas', {
    //   method: 'get',
    //   body: JSON.stringify(),
    //   headers: {
      //     'content-type': 'application/json'
      //   }
      // })
      // .then(response => {
        //   response.json().then(data => {
          //     if (data.success == true) {   
        //        this.setState({ arrayEmpresas: data });   
    //          } 
    //          else {
      //       alert(data.message+' - '+data.data[0].message);    
    //     }
    //   });
    // })
    // .catch(err => {
    //   console.error('Failed retrieving information', err);
    //   alert(err);
    // });

    var data = [
      {cnpj:'123999123', nomeAmigavel:'Fitassul', razaoSocial: 'Razao1',  setorAtividade: 'Setor1', dataConstituicao: '05/07/1990', empresaId: '111'},    
      {cnpj:'123678123', nomeAmigavel:'Helibras', razaoSocial: 'Razao2',  setorAtividade: 'Setor2', dataConstituicao: '05/07/1992', empresaId: '222'},
      {cnpj:'123123123', nomeAmigavel:'Mahle', razaoSocial: 'Razao3',  setorAtividade: 'Setor3', dataConstituicao: '05/07/1991', empresaId: '39e6158e-f2eb-894d-3bb4-530504615482'}
    ]  
    if(data !== null){
      this.setState({ arrayEmpresas: data });
    }  
  }



  render(){
    return (


    <Router>
      <div className="h-100">
      
      <div id="progress-bar"></div>
      <Cabecalho listaEmpresas={this.state.arrayEmpresas}/>
            
        <div className="d-flex w-100 h-100">
          <MenuLateral/>
          <div className="boxField p-4 w-100 overflow-x">       
            <Route path="/app/dashboard" render={(props) => <Dashboard  {...props} listaEmpresas={this.state.arrayEmpresas}/>} /> 
            <Route path="/app/request" render={(props) => <Request  {...props} listaEmpresas={this.state.arrayEmpresas}/>} />
            <Route path="/app/company" render={(props) => <Company  {...props} listaEmpresas={this.state.arrayEmpresas}/>} />
            <Route path="/app/employees" render={(props) => <Employees  {...props} listaEmpresas={this.state.arrayEmpresas}/>} />
            <Route path="/app/epis" render={(props) => <Epis  {...props} listaEmpresas={this.state.arrayEmpresas}/>} />            
            <Route path="/app/consultaca" component={ConsultaCA} />
            {/* <Route path="/app/request" component={Request} /> */}
            {/* <ModalUsuario/>   */}
          </div>
        </div>  
    
      </div> 
    </Router>

    );
  }};




export default Home;