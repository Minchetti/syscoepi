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


class Company extends React.Component {
  state = {
    cnpj: '',
    nomeAmigavel: '',
    razaoSocial: '',
    endereço: ''    ,
    cep: '',
    estado: '',
    cidade: '',
    numero: '',
    bairro: '',
    responsavel: '',
    telefone: '',
    email: '',
    site: '',
    codigoAtividade: '',
    arrayEmpresas: []

  };


  componentWillMount (){
    this.CarregarEmpresas();
    this.CarregarDadosEmpresa();
    this.MontarSelect();
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
      {cnpj:'123123123', nomeAmigavel:'Maoi3', razaoSocial: 'aw111eq.com'},
      {cnpj:'123678123', nomeAmigavel:'Maoi2', razaoSocial: 'aw123eq.com'},
      {cnpj:'123999123', nomeAmigavel:'Maoi1', razaoSocial: 'aw333eq.com'}    
    ]
    this.setState({ arrayEmpresas: data });  
    alert("Lista de empresas carregados!");
  }


  CarregarDadosEmpresa = () => {   
    // var EmpresaSelecionada = document.getElementById("select-empresas").value;
   
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

   alert("Dados da empresa carregados!") ;
  }

 
  MontarSelect = () => this.state.arrayEmpresas.map((value) => { //.data
    return (
      <option>{value.nomeAmigavel}</option>
      )
  });


  render() {   
    return (      
      <div id="company">

        <h4 className="mt-2 mb-4"><i className="fa fa-building" aria-hidden="true"></i> Empresas</h4> 
        <div className="row">    
          <div className="col-md-6">
              <select id="select-empresas" className="form-control">
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

        
          <div className="col-md-12">  

            <form id="form-usuario" onSubmit={this.onSubmit} className="text-left d-flex flex-wrap" method="post" action="">
              <div class="form-row"> 
                <div className="form-group col-md-3">
                  <label htmlFor="input-cnpj"><i className="far fa-id-card fa-lg pr-2" ></i>CNPJ</label>
                  <input type="text" value={this.state.cnpj} onChange={e => this.setState({ cnpj: e.target.value })} className="form-control" id="input-cnpj" name="input-cnpj" aria-describedby="cnpjHelp" required />
                </div> 
                <div className="form-group col-md-3">
                  <label htmlFor="input-cep"><i className="far fa-id-card fa-lg pr-2" ></i>CEP</label>
                  <input type="text" value={this.state.cep} onChange={e => this.setState({ cep: e.target.value })} className="form-control" id="input-cep" name="input-cep" aria-describedby="cepHelp" required />
                </div>  
                <div className="form-group col-md-3">
                  <label htmlFor="input-cidade"><i className="far fa-id-card fa-lg pr-2" ></i>Cidade</label>
                  <input type="text" value={this.state.cidade} onChange={e => this.setState({ cidade: e.target.value })} className="form-control" id="input-cidade" name="input-cidade" aria-describedby="cidadeHelp" required />
                </div> 
                <div className="form-group col-md-3">
                  <label htmlFor="input-telefone"><i className="far fa-id-card fa-lg pr-2" ></i>Telefone</label>
                  <input type="text" value={this.state.telefone} onChange={e => this.setState({ telefone: e.target.value })} className="form-control" id="input-telefone" name="input-telefone" aria-describedby="telefoneHelp" required />
                </div>               
                <div className="form-group col-md-3">
                  <label htmlFor="input-estado"><i className="far fa-id-card fa-lg pr-2" ></i>Estado</label>
                  <input type="text" value={this.state.estado} onChange={e => this.setState({ estado: e.target.value })} className="form-control" id="input-estado" name="input-estado" aria-describedby="estadoHelp" required />
                </div> 
                <div className="form-group col-md-3">
                  <label htmlFor="input-endereço"><i className="far fa-id-card fa-lg pr-2" ></i>Endereço</label>
                  <input type="text" value={this.state.endereço} onChange={e => this.setState({ endereço: e.target.value })} className="form-control" id="input-endereço" name="input-endereço" aria-describedby="endereçoHelp" required />
                </div> 
                <div className="form-group col-md-3">
                  <label htmlFor="input-site"><i className="far fa-id-card fa-lg pr-2" ></i>site</label>
                  <input type="text" value={this.state.site} onChange={e => this.setState({ site: e.target.value })} className="form-control" id="input-site" name="input-site" aria-describedby="siteHelp" required />
                </div> 
                <div className="form-group col-md-3">
                  <label htmlFor="input-email"><i className="far fa-id-card fa-lg pr-2" ></i>email</label>
                  <input type="text" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} className="form-control" id="input-email" name="input-email" aria-describedby="emailHelp" required />
                </div> 
                <div className="form-group col-md-3">
                  <label htmlFor="input-numero"><i className="far fa-id-card fa-lg pr-2" ></i>Numero</label>
                  <input type="text" value={this.state.numero} onChange={e => this.setState({ numero: e.target.value })} className="form-control" id="input-numero" name="input-numero" aria-describedby="numeroHelp" required />
                </div> 
                <div className="form-group col-md-3">
                  <label htmlFor="input-bairro"><i className="far fa-id-card fa-lg pr-2" ></i>bairro</label>
                  <input type="text" value={this.state.bairro} onChange={e => this.setState({ bairro: e.target.value })} className="form-control" id="input-bairro" name="input-bairro" aria-describedby="bairroHelp" required />
                </div> 
                <div className="form-group col-md-3">
                  <label htmlFor="input-responsavel"><i className="far fa-id-card fa-lg pr-2" ></i>responsavel</label>
                  <input type="text" value={this.state.responsavel} onChange={e => this.setState({ responsavel: e.target.value })} className="form-control" id="input-responsavel" name="input-responsavel" aria-describedby="responsavelHelp" required />
                </div> 
                <div className="form-group col-md-3">
                  <label htmlFor="input-nome-amigavel"><i className="far fa-user fa-lg pr-2" ></i>Nome Amigável</label>
                  <input type="text" value={this.state.nomeAmigavel} onChange={e => this.setState({ nomeAmigavel: e.target.value })} className="form-control" id="input-nome-amigavel" name="input-nome-amigavel" aria-describedby="nomeAmigavelHelp" required />
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="input-codigoAtividade"><i className="far fa-id-card fa-lg pr-2" ></i>Codigo da atividade</label>
                  <input type="text" value={this.state.codigoAtividade} onChange={e => this.setState({ codigoAtividade: e.target.value })} className="form-control" id="input-codigoAtividade" name="input-codigoAtividade" aria-describedby="codigoAtividadeHelp" required />
                </div> 
                <div className="form-group col-md-3">
                  <label htmlFor="input-razao-social"><i className="far fa-user fa-lg pr-2" ></i>Razão Social</label>
                  <input type="text" value={this.state.razaoSocial} onChange={e => this.setState({ razaoSocial: e.target.value })} className="form-control" id="input-razao-social" name="input-razao-social" aria-describedby="razaoSocialHelp" required />
                </div>
                <div className="form-group mb-0">
                  <button type="button" className="btn btn-danger mr-2" data-dismiss="modal">
                    <i className="fa fa-times fa-lg pr-2"  />Fechar
                  </button>
                  <button id="btn-conta" type="submit" className="btn btn-primary" >
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






