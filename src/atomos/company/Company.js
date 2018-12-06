import React from 'react';
// import TableFuncionarios from '../tablefuncionarios';
// import Table2 from '../table2';
// import Table3 from '../table3';
// import Modal2 from '../modal1';
import Button from '../button';
// import PreviewFuncionarios from '../previewfuncionarios';
import ModalCriarEmpresa from '../modalcriarempresa';
// import ModalAddFuncionario from '../modaladdfuncionario';
// import * as Papa from 'papaparse';
// import $ from 'jquery'; 
// import IdUsuarioLogado from '../login/Login.js';
import InputMask from 'react-input-mask';


// CNPJ 28.061.033/0001-60
class Company extends React.Component {
  state = {
    cnpj: null,
    nomeAmigavel: null,
    razaoSocial: null,
    setorAtividade: null,
    dataConstituicao: null,
    // empresaSelecionada: null,
    nomeEmpresaSelecionada: null,
    arrayEmpresas: [],
    dadosIniciaisEmpresa: null
  };


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
  //   {this.state.dadosIniciaisEmpresa && this.MostrarEditar()}
  // }

  // componentDidUpdate() {
  //   this.CarregarDadosEmpresa();
  // }

  onChange = () =>{
    if(document.getElementById("company-cnpj").value.replace(/[./-]/g, "") !== this.state.dadosIniciaisEmpresa.cnpj || 
       document.getElementById("company-nome-amigavel").value !== this.state.dadosIniciaisEmpresa.nomeAmigavel ||
       document.getElementById("company-razao-social").value !== this.state.dadosIniciaisEmpresa.razaoSocial ||
       document.getElementById("company-setor-atividade").value !== this.state.dadosIniciaisEmpresa.setorAtividade ||
       document.getElementById("company-data-constituicao").value !== this.state.dadosIniciaisEmpresa.dataConstituicao
    ){
          document.getElementById("editarEmpresa").parentNode.style.display = "flex";
    }
    else{
      document.getElementById("editarEmpresa").parentNode.style.display = "none";
    }
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
      {cnpj:'123999123', nomeAmigavel:'Fitassul', razaoSocial: 'Razao1',  setorAtividade: 'Setor1', dataConstituicao: '05/07/1990'},    
      {cnpj:'123678123', nomeAmigavel:'Helibras', razaoSocial: 'Razao2',  setorAtividade: 'Setor2', dataConstituicao: '05/07/1992'},
      {cnpj:'123123123', nomeAmigavel:'Mahle', razaoSocial: 'Razao3',  setorAtividade: 'Setor3', dataConstituicao: '05/07/1991'}
    ]
    // var data = null;
    
    if(data !== null){
      this.setState({ empresaSelecionada: data[0] });
      this.setState({ nomeEmpresaSelecionada: data[0].nomeAmigavel });
      this.setState({ arrayEmpresas: data });
    }  
     
    // alert("Lista de empresas carregados!");
  }


  PrimeiraEmpresa = () =>{
    return (
      <div className="d-flex justify-content-center">
        <h2 className="mr-3">Cadastre sua primeira empresa!</h2>
        <Button class="btn-dark" icon="fa-plus fa-lg mr-1" text="Cadastrar Empresa" target="#modal-criar-empresa"/>
      </div>        
    )      
  }

  TemEmpresa = () =>{
    return(
      <div className="d-flex flex-column">    
        <div className="d-flex">
          <div className="col-md-6 pl-0 pr-1 align-items-center">
              <select id="select-empresas" className="form-control btn-dark" onChange={e => this.setState({ nomeEmpresaSelecionada: e.target.value },this.CarregarDadosEmpresa)}>
                {this.MontarSelect()}
              </select>
          </div>
          
          <div className="col-md-6 pr-0 pl-1 align-items-center">        
            <Button class="btn-dark w-100 h-100" icon="fa-plus fa-lg mr-2" text="Cadastrar Empresa" target="#modal-criar-empresa"/>
          </div>
          
        </div>

          <div className="panel mt-3">        
            <div className="panel-heading d-flex justify-content-between align-items-center btn-dark">
              <h6 className="text-left mb-0"><i className="fa fa-building pr-2" aria-hidden="true"></i>{this.state.nomeEmpresaSelecionada}</h6>
              <div className="d-nonin ">
                <button type="button" onClick={this.CancelarEditar} className="btn btn-danger mr-2" data-dismiss="modal">
                  <i className="fa fa-times fa-lg pr-2" />Cancelar
                </button>
                <button onClick={this.EditarEmpresa} id="editarEmpresa" type="submit" className="btn btn-primary" >
                  <i className="fa fa-plus fa-lg pr-2" />Salvar
                </button>
              </div>
            </div>
            <div className="panel-body p-3"> 
              <form id="form-usuario" onSubmit={this.onSubmit} onChange={this.onChange} className="text-left d-flex flex-wrap" method="post" action="">
                <div className="form-row w-100">
                  <div className="col-md-2 ">
                    <label htmlFor="company-cnpj" className="pl-2"><i className="far fa-id-card pr-2" ></i>CNPJ</label>
                    <InputMask mask="99.999.999/9999-99" type="text" value={this.state.cnpj} onChange={e => this.setState({ cnpj: e.target.value })} className="form-control" id="company-cnpj" name="company-cnpj" aria-describedby="cnpjHelp" required />
                  </div>          
                  <div className="col-md-2 ">
                      <label htmlFor="company-nome-amigavel" className="pl-2"><i className="far fa-user pr-2" ></i>Nome Amigável</label>
                    <input type="text" value={this.state.nomeAmigavel} onChange={e => this.setState({ nomeAmigavel: e.target.value })} className="form-control" id="company-nome-amigavel" name="company-nome-amigavel" aria-describedby="nomeAmigavelHelp" required />
                  </div>
                  <div className="col-md-2">
                    <label htmlFor="company-razao-social" className="pl-2"><i className="far fa-user pr-2" ></i>Razão Social</label>
                    <input type="text" value={this.state.razaoSocial} onChange={e => this.setState({ razaoSocial: e.target.value })} className="form-control" id="company-razao-social" name="company-razao-social" aria-describedby="razaoSocialHelp" required />
                  </div>
                  <div className="col-md-2">
                    <label htmlFor="company-setor-atividade" className="pl-2"><i className="far fa-user pr-2" ></i>Setor Atividade</label>
                    <input type="text" value={this.state.setorAtividade} onChange={e => this.setState({ setorAtividade: e.target.value })} className="form-control" id="company-setor-atividade" name="company-setor-atividade" aria-describedby="setorAtividadeHelp" required />
                  </div>                
                  <div className="col-md-2 ">
                    <label htmlFor="company-data-constituicao" className="pl-2"><i className="far fa-user pr-2" ></i>Data Constituição</label>
                    <input type="text" value={this.state.dataConstituicao} onChange={e => this.setState({ dataConstituicao: e.target.value })} className="form-control" id="company-data-constituicao" name="company-data-constituicao" aria-describedby="dataConstituicaoHelp" required />
                  </div>
                  
                </div>
              </form>   
            </div>
          
          </div>
      </div>
    )
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
      {cnpj: '12345678998765', nomeAmigavel:'Empresa 1', razaoSocial: 'Razao1', setorAtividade: 'Setor1', dataConstituicao: '05/07/1991'} 
    ]
    var data2 = [
      {cnpj: '222222', nomeAmigavel:'Empresa 2', razaoSocial: 'Razao2', setorAtividade: 'Setor22', dataConstituicao: '05/07/1992'} 
    ]
    var data3 = [
      {cnpj: '333333', nomeAmigavel:'Empresa 3', razaoSocial: 'Razao3 ', setorAtividade: 'Setor33', dataConstituicao: '05/07/1993'} 
    ]
    if (this.state.nomeEmpresaSelecionada === 'Fitassul' ){
      this.setState({ nomeAmigavel: data[0].nomeAmigavel });  
      this.setState({ razaoSocial: data[0].razaoSocial });  
      this.setState({ cnpj: data[0].cnpj });   
      this.setState({ setorAtividade: data[0].setorAtividade });   
      this.setState({ dataConstituicao: data[0].dataConstituicao });   
      this.setState({ dadosIniciaisEmpresa: data[0]});   
    }    
    if (this.state.nomeEmpresaSelecionada === 'Helibras' ){
      this.setState({ nomeAmigavel: data2[0].nomeAmigavel });  
      this.setState({ razaoSocial: data2[0].razaoSocial });  
      this.setState({ cnpj: data2[0].cnpj });  
      this.setState({ setorAtividade: data2[0].setorAtividade });   
      this.setState({ dataConstituicao: data2[0].dataConstituicao });    
      this.setState({ dadosIniciaisEmpresa: data2[0]}); 
    }
    if (this.state.nomeEmpresaSelecionada === 'Mahle' ){
      this.setState({ nomeAmigavel: data3[0].nomeAmigavel });  
      this.setState({ razaoSocial: data3[0].razaoSocial });  
      this.setState({ cnpj: data3[0].cnpj });   
      this.setState({ setorAtividade: data3[0].setorAtividade });   
      this.setState({ dataConstituicao: data3[0].dataConstituicao });   
      this.setState({ dadosIniciaisEmpresa: data3[0]}); 
    }
    // alert("Dados da empresa carregados!") ;
  }

 
  MontarSelect = () => this.state.arrayEmpresas.map((value) => { //.data
    return (
      <option>{value.nomeAmigavel}</option>
      )
  });

  
  CancelarEditar = () => {
    this.setState({ nomeAmigavel: this.state.dadosIniciaisEmpresa.nomeAmigavel });  
    this.setState({ razaoSocial: this.state.dadosIniciaisEmpresa.razaoSocial });  
    this.setState({ cnpj: this.state.dadosIniciaisEmpresa.cnpj });    
    document.getElementById("editarEmpresa").parentNode.style.display = "none";
  }


  

  EditarEmpresa = () => {   
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
    alert("Empresa Alterada !");
  }
  
  

  
  
  
  Teste = () => {console.log(this.state);}
  render() {   

    return (      
      <div id="company">
      {/* <div onClick={this.Teste}>AQUI</div> */}

        <h4 className="position-absolute m-auto l-0 r-0 t-15 text-white"><i className="fa fa-building" aria-hidden="true"></i> Empresas</h4> 
        {this.state.arrayEmpresas === '' ? (this.PrimeiraEmpresa()) : (this.TemEmpresa())}

      <ModalCriarEmpresa/>        
      </div>

            
    );
  }
}

export default Company;






