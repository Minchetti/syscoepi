import React from 'react';
import Table2 from '../table2';
import Table3 from '../table3';
import Modal2 from '../modal1';
import Button from '../button';
// import TableEpis from '../tableepis';
import TableEpis2 from '../tableepis2';
import PreviewFuncionarios from '../previewfuncionarios';
import ModalCriarEmpresa from '../modalcriarempresa';
import ModalAddEpi from '../modaladdepi';
import $ from 'jquery'; 
import IdUsuarioLogado from '../login/Login.js';



class Epis extends React.Component {
  state = {
    arrayEmpresas: [],
    nomeEmpresaSelecionada: null,
    empresaSelecionadaId: '',
    listaEpisDisponiveis: [],
    listaEpisAtribuidos: []
  };
  

  componentWillMount(){
    this.CarregarEmpresas();
    this.MontarSelect();     
    this.CarregarDadosEmpresa();   
  }
  componentDidMount(){
    this.CarregarEpisDisponiveis();   
    this.CarregarEpisAtribuidos();   
  }




  CarregarEmpresas = () => {   
    // alert('CARREGAR EMPRESAS');
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
      {cnpj:'123999123', nomeAmigavel:'Empresa 1', razaoSocial: 'Razao1', empresaId: '111' },    
      {cnpj:'123678123', nomeAmigavel:'Empresa 2', razaoSocial: 'Razao2', empresaId: '222' },
      {cnpj:'123123123', nomeAmigavel:'Empresa 3', razaoSocial: 'Razao3', empresaId: '39e6158e-f2eb-894d-3bb4-530504615482' }
    ]
    // var data = null;

    if(data != null){
      this.setState({ arrayEmpresas: data });  
      this.setState({ nomeEmpresaSelecionada: data[0].nomeAmigavel });  
      this.setState({ empresaSelecionadaId: data[0].empresaId });  
      // alert("Lista de empresas carregados!");
    }
  }


  Callback = () =>{
    this.CarregarDadosEmpresa();
    this.CarregarEpisDisponiveis();
    this.CarregarEpisAtribuidos();
  }




  CarregarDadosEmpresa = () => {   
    // alert('CARREGAR DADOS EMPRESA');
    // var EmpresaSelecionada = document.getElementById("select-empresas").value;
    // this.setState({ empresaSelecionada: EmpresaSelecionada });

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
      {cnpj: '12345678998765', nomeAmigavel:'Empresa 1', razaoSocial: 'Razao1', empresaId: '111'} 
    ]
    var data2 = [
      {cnpj: '222222', nomeAmigavel:'Empresa 2', razaoSocial: 'Razao2', empresaId: '222'} 
    ]
    var data3 = [
      {cnpj: '333333', nomeAmigavel:'Empresa 3', razaoSocial: 'Razao3', empresaId: '39e6158ef2eb894d3bb4530504615482'} 
    ]
    if (this.state.nomeEmpresaSelecionada == 'Empresa 1' ){
      this.setState({ empresaSelecionadaId: data[0].empresaId });  
    }    
    if (this.state.nomeEmpresaSelecionada == 'Empresa 2' ){
      this.setState({ empresaSelecionadaId: data2[0].empresaId });  
    }
    if (this.state.nomeEmpresaSelecionada == 'Empresa 3' ){
      this.setState({ empresaSelecionadaId: data3[0].empresaId });  
    }
    // alert("Dados da empresa carregados!") ;
  }


  MontarSelect = () => this.state.arrayEmpresas.map((value) => { //.data
    return (
      <option>{value.nomeAmigavel}</option>
      )
  });



  CarregarEpisDisponiveis = () => {   
    // alert('FUNCIONARIOS');
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
            
        //        this.setState({ listaEpisDisponiveis });   
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

    var data = [
      {cod:"7899", nome: "Cap02 BlackBone", descricao: "Capacete com queixeira", validade: "10/10/2025", minEstoque: "10", estoque: "50", maxEstoque: "99", ca: "0776584", dataArmazenamento: "01/02/2018", dataDevolucao: "01/05/2016", motivoDevolucao: "Pedido errado", cor: "preto", grupo: "Capacetes",  fatorReducao: "Proteção contra impactos médios"},   
      {cod:"4566", nome: "SingleFlow Gloves", descricao: "Luvas de malha", validade: "10/10/2025", minEstoque: "10", estoque: "50", maxEstoque: "99", ca:"0771147", dataArmazenamento: "01/02/2018", dataDevolucao:"01/05/2016", motivoDevolucao:"Pedido errado", cor: "Prata", grupo: "Luvas",  fatorReducao: "Proteção contra cortes"},
      {cod:"1233", nome: "Straight Glass", descricao: "Óculos de poliestinelo", validade: "10/10/2025", minEstoque: "10", estoque: "50", maxEstoque: "99", ca:"0719684", dataArmazenamento: "01/02/2018", dataDevolucao:"01/05/2016", motivoDevolucao:"Pedido errado", cor:"preto", grupo: "Óculos",  fatorReducao: "Proteção contra faíscas e detritos"},
    ]
   
      this.setState({ listaEpisDisponiveis: data });  
  };







  CarregarEpisAtribuidos = () => {   
    // alert('FUNCIONARIOS');
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
            
        //        this.setState({ listaEpisAtribuidos });   
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

    var data = [
      {cod:"0123", nome: "Cotoveleira BreakGlass1", descricao: "Cotoveleira para Obras", validade: "10/10/2025", minEstoque: "10", estoque: "50", maxEstoque: "99", ca: "0776584", dataArmazenamento: "01/02/2018", dataDevolucao: "01/05/2016", motivoDevolucao: "Pedido errado", cor: "preto", grupo: "Capacetes",  fatorReducao: "Proteção contra impactos médios"},   
      {cod:"3171", nome: "Joelheira Ironbox1", descricao: "Joelheira de fibra para reparos", validade: "10/10/2025", minEstoque: "10", estoque: "50", maxEstoque: "99", ca:"0771147", dataArmazenamento: "01/02/2018", dataDevolucao:"01/05/2016", motivoDevolucao:"Pedido errado", cor: "Prata", grupo: "Luvas",  fatorReducao: "Proteção contra cortes"},
      {cod:"9277", nome: "Caneleira Fullsteal1", descricao: "Caneleira de aço", validade: "10/10/2025", minEstoque: "10", estoque: "50", maxEstoque: "99", ca:"0719684", dataArmazenamento: "01/02/2018", dataDevolucao:"01/05/2016", motivoDevolucao:"Pedido errado", cor:"preto", grupo: "Óculos",  fatorReducao: "Proteção contra faíscas e detritos"},
    ]
    var data2 = [
      {cod:"0123", nome: "Cotoveleira BreakGlass2", descricao: "Cotoveleira para Obras", validade: "10/10/2025", minEstoque: "10", estoque: "50", maxEstoque: "99", ca: "0776584", dataArmazenamento: "01/02/2018", dataDevolucao: "01/05/2016", motivoDevolucao: "Pedido errado", cor: "preto", grupo: "Capacetes",  fatorReducao: "Proteção contra impactos médios"},   
      {cod:"3171", nome: "Joelheira Ironbox2", descricao: "Joelheira de fibra para reparos", validade: "10/10/2025", minEstoque: "10", estoque: "50", maxEstoque: "99", ca:"0771147", dataArmazenamento: "01/02/2018", dataDevolucao:"01/05/2016", motivoDevolucao:"Pedido errado", cor: "Prata", grupo: "Luvas",  fatorReducao: "Proteção contra cortes"},
      {cod:"9277", nome: "Caneleira Fullsteal2", descricao: "Caneleira de aço", validade: "10/10/2025", minEstoque: "10", estoque: "50", maxEstoque: "99", ca:"0719684", dataArmazenamento: "01/02/2018", dataDevolucao:"01/05/2016", motivoDevolucao:"Pedido errado", cor:"preto", grupo: "Óculos",  fatorReducao: "Proteção contra faíscas e detritos"},
    ]
    var data3 = [
      {cod:"0123", nome: "Cotoveleira BreakGlass3", descricao: "Cotoveleira para Obras", validade: "10/10/2025", minEstoque: "10", estoque: "50", maxEstoque: "99", ca: "0776584", dataArmazenamento: "01/02/2018", dataDevolucao: "01/05/2016", motivoDevolucao: "Pedido errado", cor: "preto", grupo: "Capacetes",  fatorReducao: "Proteção contra impactos médios"},   
      {cod:"3171", nome: "Joelheira Ironbox3", descricao: "Joelheira de fibra para reparos", validade: "10/10/2025", minEstoque: "10", estoque: "50", maxEstoque: "99", ca:"0771147", dataArmazenamento: "01/02/2018", dataDevolucao:"01/05/2016", motivoDevolucao:"Pedido errado", cor: "Prata", grupo: "Luvas",  fatorReducao: "Proteção contra cortes"},
      {cod:"9277", nome: "Caneleira Fullsteal3", descricao: "Caneleira de aço", validade: "10/10/2025", minEstoque: "10", estoque: "50", maxEstoque: "99", ca:"0719684", dataArmazenamento: "01/02/2018", dataDevolucao:"01/05/2016", motivoDevolucao:"Pedido errado", cor:"preto", grupo: "Óculos",  fatorReducao: "Proteção contra faíscas e detritos"},
    ]   


    if (this.state.nomeEmpresaSelecionada == 'Empresa 1' ){
      // this.setState({ nomeEmpresaSelecionada: data[0].nomeAmigavel });
      this.setState({ listaEpisAtribuidos: data });  
    }    
    if (this.state.nomeEmpresaSelecionada == 'Empresa 2' ){
      // this.setState({ nomeEmpresaSelecionada: data2[0].nomeAmigavel });  
      this.setState({ listaEpisAtribuidos: data2 });  
    }
    if (this.state.nomeEmpresaSelecionada == 'Empresa 3' ){
      // this.setState({ nomeEmpresaSelecionada: data3[0].nomeAmigavel }); 
      this.setState({ listaEpisAtribuidos: data3 });   
    }

    // }  
  };








  PrimeiroEpi = () =>{
    const empresas = this.state.arrayEmpresas;

    if(empresas.length != 0 ){
      return (
        <div className=" d-flex flex-column">              
        <div className="d-flex mb-4">
          <div className="col-md-6 d-flex align-items-center p-0">
              <select id="select-empresas" className="form-control" onChange={e => this.setState({ nomeEmpresaSelecionada: e.target.value },this.Callback)}>
                {this.MontarSelect()}
              </select>
          </div>
          <div className="col-md-6 p-0 align-items-center">
            
            <Button class="btn-dark pr-2 ml-3" icon="fa-plus fa-lg mr-1" text="Adicionar Epi" target="#modal-add-epi"/>
          </div>
        </div>
        
        
        {this.state.listaEpisDisponiveis !=0 && this.state.listaEpisAtribuidos ? (<TableEpis2 listaD={this.state.listaEpisDisponiveis} listaA={this.state.listaEpisAtribuidos} />) : (<h1>Cadastre seus primeiros epi's</h1>) }
        {/* {this.state.listaEpisDisponiveis != 0 ? (<TableEpis lista={this.state.listaEpisDisponiveis}  />) : (<h1>Cadastre seus primeiros epi's</h1>) } */}


      </div>
      )
    }
    else{
      return(
        <div className="d-flex justify-content-center">
          <h2 className="mr-3">Nenhuma Empresa Cadastrada!</h2>
          {/* <Button class="btn-dark" icon="fa-plus fa-lg mr-1" text="Adicionar Empresa" target="#modal-criar-empresa"/> */}
        </div>
      )      
    }
  }

  
  render() {   

    
    return (
      
      <div id="Epis">
      
        <h4 className="mt-2 mb-4"><i className="fas fa-shield-alt mr-2" aria-hidden="true"></i>Epi's</h4>  
               
        {this.PrimeiroEpi()}
        
        <ModalAddEpi empresaId={this.state.empresaSelecionadaId}  /> 


      </div>

    );
  }
}

export default Epis;






