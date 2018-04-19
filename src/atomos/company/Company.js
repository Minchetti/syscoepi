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

// var data;


// let PreviewComponent;

// $(document).ready(function(){
//   $("#csv-file").change(handleFileSelect);
//   alert(IdUsuarioLogado);
// });



class Company extends React.Component {
  state = {
    cnpj: 'TESTE',
    nomeAmigavel: 'TEST',
    razaoSocial: 'TEST'    
  };
  
  
  
  CarregarEmpresas = () => {   
     // var EmpresaSelecionada = document.getElementById("select-empresas").value;
    
    // fetch('http://192.168.10.30/v1/?', {
    //   method: 'post',
    //   body: JSON.stringify(),
    //   headers: {
      //     'content-type': 'application/json'
      //   }
      // })
      // .then(response => {
        //   response.json().then(data => {
          //     if (data.success == true) {   
        //        this.setState({ listaFuncionarios });   
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
    // alert("Funcionarios carregados!") ;
  }
  
  render() {       

    this.CarregarEmpresas();

    return (
      
      <div id="company">

        <h4 className="mt-2 mb-4"><i className="fa fa-building" aria-hidden="true"></i> Empresas</h4> 
        <div className="row">    
          <div className="col-md-6">
              <select id="select-empresas" className="form-control">
                <option>Metrosul</option>
                <option>BrazOffice</option>
                <option>Fitassul</option>
                <option>Helibras</option>
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
                <div className="form-group col-md-6">
                  <label htmlFor="input-cnpj"><i className="far fa-id-card fa-lg pr-2" ></i>CNPJ</label>
                  <input type="text" value={this.state.cnpj} onChange={e => this.setState({ cnpj: e.target.value })} className="form-control" id="input-cnpj" name="input-cnpj" aria-describedby="cnpjHelp" required />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="input-nome-amigavel"><i className="far fa-user fa-lg pr-2" ></i>Nome Amigável</label>
                  <input type="text" value={this.state.nomeAmigavel} onChange={e => this.setState({ nomeAmigavel: e.target.value })} className="form-control" id="input-nome-amigavel" name="input-nome-amigavel" aria-describedby="nomeAmigavelHelp" required />
                </div>
                <div className="form-group col-md-6">
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






