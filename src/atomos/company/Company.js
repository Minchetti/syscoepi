import React from 'react';
import TableFuncionarios from '../tablefuncionarios';
import Table2 from '../table2';
import Table3 from '../table3';
import Modal2 from '../modal1';
import Button from '../button';
import PreviewFuncionarios from '../previewfuncionarios';
import ModalCriarEmpresa from '../modalcriarempresa';
import ModalAddFuncionario from '../modaladdfuncionario';
import * as Papa from 'papaparse';
import $ from 'jquery'; 
import IdUsuarioLogado from '../login/Login.js';
import InputMask from 'react-input-mask';


class Company extends React.Component {
  state = {
    cnpj: null,
    nomeAmigavel: null,
    razaoSocial: null,
    empresaSelecionada: null,
    arrayEmpresas: [],
    dadosInicias: null
  };


  
  // razaoSocial: '',
  // endereço: ''    ,
  // cep: '',
  // estado: '',
  // cidade: '',
  // numero: '',
  // bairro: '',
  // responsavel: '',
  // telefone: '',
  // email: '',
  // site: '',
  // codigoAtividade: '',

  componentWillMount(){
    this.CarregarEmpresas();
    this.MontarSelect();
    
  }
  componentDidMount (){
    this.CarregarDadosEmpresa();
  }  
  componentWillUpdate (){
    
  }
  // componentDidUpdate () {
  //   {this.state.dadosInicias && this.MostrarEditar()}
  // }

  // componentDidUpdate() {
  //   this.CarregarDadosEmpresa();
  // }

  onChange = () =>{
    if(document.getElementById("company-cnpj").value.replace(/[./-]/g, "") !== this.state.dadosInicias.cnpj || 
       document.getElementById("company-nome-amigavel").value !== this.state.dadosInicias.nomeAmigavel ||
       document.getElementById("company-razao-social").value !== this.state.dadosInicias.razaoSocial){
          document.getElementById("editarEmpresa").parentNode.style.display = "block";
    }
    else{
      document.getElementById("editarEmpresa").parentNode.style.display = "none";
    }
  }

  MostrarEditar = () => {
    
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

    //TESTE
    var data = [
      {cnpj:'123999123', nomeAmigavel:'Empresa1', razaoSocial: 'Razao1'},    
      {cnpj:'123678123', nomeAmigavel:'Empresa2', razaoSocial: 'Razao2'},
      {cnpj:'123123123', nomeAmigavel:'Empresa3', razaoSocial: 'Razao3'}
    ]
    this.setState({ arrayEmpresas: data });  
    this.setState({ empresaSelecionada: data[0].nomeAmigavel });  
    // alert("Lista de empresas carregados!");
  }


  CarregarDadosEmpresa = () => {   
    // var EmpresaSelecionada = document.getElementById("select-empresas").value;

    // var id = this.state.empresaSelecionada;
  
    // fetch('http://192.168.10.30/v1/empresa/{id}?', {
    //   method: 'get',
    //   body: JSON.stringify(),
    //   headers: {
      //     'content-type': 'application/json'
      //   }
      // })
      // .then(response => {
        //   response.json().then(data => {
          //     if (data.success == true) {   
        //        this.setState({ data });   
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
      {cnpj: '12345678998765', nomeAmigavel:'Empresa1', razaoSocial: 'Razao1'} 
    ]
    var data2 = [
      {cnpj: '222222', nomeAmigavel:'Empresa2', razaoSocial: 'Razao2'} 
    ]
    var data3 = [
      {cnpj: '333333', nomeAmigavel:'Empresa3', razaoSocial: 'Razao3 '} 
    ]
    if (this.state.empresaSelecionada == 'Empresa1' ){
      this.setState({ nomeAmigavel: data[0].nomeAmigavel });  
      this.setState({ razaoSocial: data[0].razaoSocial });  
      this.setState({ cnpj: data[0].cnpj });   
      this.setState({ dadosInicias: data[0]});   
    }    
    if (this.state.empresaSelecionada == 'Empresa2' ){
      this.setState({ nomeAmigavel: data2[0].nomeAmigavel });  
      this.setState({ razaoSocial: data2[0].razaoSocial });  
      this.setState({ cnpj: data2[0].cnpj });   
      this.setState({ dadosInicias: data2[0]}); 
    }
    if (this.state.empresaSelecionada == 'Empresa3' ){
      this.setState({ nomeAmigavel: data3[0].nomeAmigavel });  
      this.setState({ razaoSocial: data3[0].razaoSocial });  
      this.setState({ cnpj: data3[0].cnpj });   
      this.setState({ dadosInicias: data3[0]}); 
    }
    // alert("Dados da empresa carregados!") ;
  }

  EditarEmpresa = () =>{

  }

 
  MontarSelect = () => this.state.arrayEmpresas.map((value) => { //.data
    return (
      <option>{value.nomeAmigavel}</option>
      )
  });

  Teste = () => {console.log(this.state);}
  


  render() {   

    return (      
      <div id="company">
      <div onClick={this.Teste}>AQUI</div>

        <h4 className="mt-2 mb-4"><i className="fa fa-building" aria-hidden="true"></i> Empresas</h4> 
        <div className="row">    
          <div className="col-md-6">
              <select id="select-empresas" className="form-control" onChange={e => this.setState({ empresaSelecionada: e.target.value },this.CarregarDadosEmpresa())}>
                {this.MontarSelect()}
              </select>
          </div>
          
          <div className="col-md-6">        
            <Button class="btn-dark" icon="fa-plus fa-lg mr-1" text="Adicionar Empresa" target="#modal-criar-empresa"/>
            {/* <Button class="btn-dark ml-2" icon="fa-user-plus pr-2" text="Importar Funcionários"/>  */}

            {/* <Button class="testeok btn-dark ml-2" icon="fa-user-plus pr-2" text="OK"/>  */}
            {/* <Button class="btn-dark ml-2" icon="fa-plus pr-2" text="Criar GH"/>  */}
            {/* <Button class="btn-dark ml-2" icon="fa-plus pr-2" text="Criar CC"/> */}
          </div>

        
          <div className="col-md-12 mt-5">  

            <form id="form-usuario" onSubmit={this.onSubmit} onChange={this.onChange} className="text-left d-flex flex-wrap" method="post" action="">
              <div class="form-row"> 

                <div className="form-group col-md-3">
                  <label htmlFor="company-cnpj"><i className="far fa-id-card pr-2" ></i>CNPJ</label>
                  <InputMask mask="99.999.999/9999-99" type="text" value={this.state.cnpj} onChange={e => this.setState({ cnpj: e.target.value })} className="form-control" id="company-cnpj" name="company-cnpj" aria-describedby="cnpjHelp" required />
                </div>               
               
                <div className="form-group col-md-3">
                  <label htmlFor="company-nome-amigavel"><i className="far fa-user pr-2" ></i>Nome Amigável</label>
                  <input type="text" value={this.state.nomeAmigavel} onChange={e => this.setState({ nomeAmigavel: e.target.value })} className="form-control" id="company-nome-amigavel" name="company-nome-amigavel" aria-describedby="nomeAmigavelHelp" required />
                </div>
               
                <div className="form-group col-md-3">
                  <label htmlFor="company-razao-social"><i className="far fa-user pr-2" ></i>Razão Social</label>
                  <input type="text" value={this.state.razaoSocial} onChange={e => this.setState({ razaoSocial: e.target.value })} className="form-control" id="company-razao-social" name="company-razao-social" aria-describedby="razaoSocialHelp" required />
                </div>
                <div className="form-group mb-0 d-nonin">
                  <button type="button" id="cancelarEditar" className="btn btn-danger mr-2" data-dismiss="modal">
                    <i className="fa fa-times fa-lg pr-2"  />Fechar
                  </button>
                  <button id="editarEmpresa" type="submit" className="btn btn-primary" >
                    <i className="fa fa-plus fa-lg pr-2" />Salvar
                  </button>
                </div>
              </div>
            </form>   
          </div>    
        </div> 

      <ModalCriarEmpresa/>        
      </div>

            
    );
  }
}

export default Company;






