import React from 'react';
// import PropTypes from 'prop-types';

import AlertaEpi from '../alertaepi';
import UltimaReq from '../ultimareq';
import ReqAberta from '../reqaberta';
import ReqCancelada from '../reqcancelada';
import Acidentes from '../acidentes';


// @flow

class Dashboard extends React.Component {

  state = {
    nomeEmpresaSelecionada: "GERAL",
    arrayEmpresas: [],
    alertasEstoque: [],
    alertasUso: [],
    
    requisicoesUltimas: [],
    requisicoesAbertas: [],
    requisicoesCanceladas: []
  };

  CarregarEmpresas = () => {  
    var data = [
      {cnpj:'123999123', nomeAmigavel:'Fitassul', razaoSocial: 'Razao1',  setorAtividade: 'Setor1', dataConstituicao: '05/07/1990'},    
      {cnpj:'123678123', nomeAmigavel:'Helibras', razaoSocial: 'Razao2',  setorAtividade: 'Setor2', dataConstituicao: '05/07/1992'},
      {cnpj:'123123123', nomeAmigavel:'Mahle2', razaoSocial: 'Razao3',  setorAtividade: 'Setor3', dataConstituicao: '05/07/1991'}
    ]
    // var data = null;    
    if(data !== null){
      // this.setState({ nomeEmpresaSelecionada: data[0].nomeAmigavel });
      this.setState({ arrayEmpresas: data });
    }  
  }

  CarregarRequisicoes = () =>{
    console.log("maoi1");
    var data2 = [];    
    var data = [
      {id:"2235", quantidade: "01", cod:"7899", cc:"31523", gh:"63456", turno:"noturno", funcionario:"Pedro Muniz", empresa:"Fitassul", nome: "Cap02 BlackBone", descricao: "Capacete com queixeira", validade: "10/10/2025", minEstoque: "10", estoque: "50", maxEstoque: "99", ca: "0776584", dataArmazenamento: "01/02/2018", dataDevolucao: "01/05/2016", motivoDevolucao: "Pedido errado", cor: "preto", grupo: "Capacetes",  fatorReducao: "Proteção contra impactos médios"},   
      {id:"4345", quantidade: "01", cod:"4566", cc:"31523", gh:"63456", turno:"noturno", funcionario:"Pedro Muniz", empresa:"rezende", nome: "SingleFlow Gloves", descricao: "Luvas de malha", validade: "10/10/2018", minEstoque: "10", estoque: "50", maxEstoque: "99", ca:"0771147", dataArmazenamento: "01/02/2018", dataDevolucao:"01/05/2016", motivoDevolucao:"Pedido errado", cor: "Prata", grupo: "Luvas",  fatorReducao: "Proteção contra cortes"},
      {id:"1231", quantidade: "01", cod:"8888", cc:"31523", gh:"63456", turno:"noturno", funcionario:"Pedro Muniz", empresa:"duston", nome: "Straight Glass", descricao: "Óculos de poliestinelo", validade: "01/04/2019", minEstoque: "10", estoque: "50", maxEstoque: "99", ca:"0719684", dataArmazenamento: "01/02/2018", dataDevolucao:"01/05/2016", motivoDevolucao:"Pedido errado", cor:"preto", grupo: "Óculos",  fatorReducao: "Proteção contra faíscas e detritos"},
      {id:"5786", quantidade: "01", cod:"2261", cc:"31523", gh:"63456", turno:"noturno", funcionario:"Pedro Muniz", empresa:"brumadinho", nome: "Straight Glass 2.0", descricao: "Óculos de poliestinelo reforçado 2x", validade: "10/10/2025", minEstoque: "10", estoque: "50", maxEstoque: "99", ca:"0719684", dataArmazenamento: "01/02/2018", dataDevolucao:"01/05/2016", motivoDevolucao:"Pedido errado", cor:"preto", grupo: "Óculos",  fatorReducao: "Proteção contra faíscas e detritos"},
      {id:"1398", quantidade: "01", cod:"1123", cc:"31523", gh:"63456", turno:"noturno", funcionario:"Pedro Muniz", empresa:"Fitassul", nome: "Ponteira BlackPound", descricao: "Ponteira de ferro", validade: "10/10/2025", minEstoque: "10", estoque: "50", maxEstoque: "99", ca: "0776584", dataArmazenamento: "01/02/2018", dataDevolucao: "01/05/2016", motivoDevolucao: "Pedido errado", cor: "preto", grupo: "Ponteiras",  fatorReducao: "Proteção contra pontas"},   
    ]    
    if(this.state.nomeEmpresaSelecionada !== "GERAL"){  

      data.map((value) => {                
        if(value.empresa === this.state.nomeEmpresaSelecionada){
          data2 = data2.concat(value);
        }
      })
      this.setState({ requisicoesUltimas: data2 });  
      this.setState({ requisicoesAbertas: data2 });   
      this.setState({ requisicoesCanceladas: data2 });  
    }
    else {   
      this.setState({ requisicoesUltimas: data });  
      this.setState({ requisicoesAbertas: data });   
      this.setState({ requisicoesCanceladas: data });  
    }
  }  

  MontarSelect = () => this.state.arrayEmpresas.map((value) => { //.data
    return (
      <option>{value.nomeAmigavel}</option>
      )
    });
    

  componentWillMount(){        
    this.CarregarRequisicoes();
    this.CarregarEmpresas();
    this.MontarSelect();   
    this.carregarEpisAlerta();
  }
  
  Callback = () =>{ 
    this.carregarEpisAlerta();
    this.CarregarRequisicoes();
  }




  carregarEpisAlerta = () =>{
    console.log("maoi2");
    var data2 = [];    
    var data = [
      {id:"2235", cod:"7899", cc:"31523", gh:"63456", turno:"noturno", funcionario:"Pedro Muniz", empresa:"Fitassul", nome: "Cap02 BlackBone", descricao: "Capacete com queixeira", validade: "10/10/2025", minEstoque: "10", estoque: "50", maxEstoque: "99", ca: "0776584", dataArmazenamento: "01/02/2018", dataDevolucao: "01/05/2016", motivoDevolucao: "Pedido errado", cor: "preto", grupo: "Capacetes",  fatorReducao: "Proteção contra impactos médios"},   
      {id:"4345", cod:"4566", cc:"31523", gh:"63456", turno:"noturno", funcionario:"Pedro Muniz", empresa:"rezende", nome: "SingleFlow Gloves", descricao: "Luvas de malha", validade: "10/10/2018", minEstoque: "10", estoque: "50", maxEstoque: "99", ca:"0771147", dataArmazenamento: "01/02/2018", dataDevolucao:"01/05/2016", motivoDevolucao:"Pedido errado", cor: "Prata", grupo: "Luvas",  fatorReducao: "Proteção contra cortes"},
      {id:"1231", cod:"8888", cc:"31523", gh:"63456", turno:"noturno", funcionario:"Pedro Muniz", empresa:"duston", nome: "Straight Glass", descricao: "Óculos de poliestinelo", validade: "10/10/2025", minEstoque: "10", estoque: "50", maxEstoque: "99", ca:"0719684", dataArmazenamento: "01/02/2018", dataDevolucao:"01/05/2016", motivoDevolucao:"Pedido errado", cor:"preto", grupo: "Óculos",  fatorReducao: "Proteção contra faíscas e detritos"},
      {id:"5786", cod:"2261", cc:"31523", gh:"63456", turno:"noturno", funcionario:"Pedro Muniz", empresa:"brumadinho", nome: "Straight Glass 2.0", descricao: "Óculos de poliestinelo reforçado 2x", validade: "01/04/2019", minEstoque: "10", estoque: "50", maxEstoque: "99", ca:"0719684", dataArmazenamento: "01/02/2018", dataDevolucao:"01/05/2016", motivoDevolucao:"Pedido errado", cor:"preto", grupo: "Óculos",  fatorReducao: "Proteção contra faíscas e detritos"},
      {id:"1398", cod:"1123", cc:"31523", gh:"63456", turno:"noturno", funcionario:"Pedro Muniz", empresa:"Fitassul", nome: "Ponteira BlackPound", descricao: "Ponteira de ferro", validade: "10/10/2025", minEstoque: "10", estoque: "50", maxEstoque: "99", ca: "0776584", dataArmazenamento: "01/02/2018", dataDevolucao: "01/05/2016", motivoDevolucao: "Pedido errado", cor: "preto", grupo: "Ponteiras",  fatorReducao: "Proteção contra pontas"},   
    ]    
    if(this.state.nomeEmpresaSelecionada !== "GERAL"){  

      data.map((value) => {                
        if(value.empresa === this.state.nomeEmpresaSelecionada){
          data2 = data2.concat(value);
        }
      })
      this.setState({ alertasEstoque: data2 });  
      this.setState({ alertasUso: data2 });  
    }
    else {   
      this.setState({ alertasEstoque: data });  
      this.setState({ alertasUso: data });  
    }
  }  




  render() {   

    return ( 

      <div id="dashboard" className="">
        <h4 className="position-absolute m-auto l-0 r-0 t-15 text-white"><i className="fa fa-clipboard-list" aria-hidden="true"></i> Dashboard</h4> 
        
        <div className="w-100 mb-3">
            <select id="select-empresas" className="form-control btn-sm btn-dark" onChange={e => this.setState({ nomeEmpresaSelecionada: e.target.value }, this.Callback)}>
              <option>GERAL</option>
              {this.MontarSelect()}
            </select>
        </div>

        <AlertaEpi listaAlertasEstoque={this.state.alertasEstoque} listaAlertasUso={this.state.alertasUso}/> 
        <div className="justify-content-between row mb-4">
          <UltimaReq size="col-4" big="d-none" listaRequisicoesUltimas={this.state.requisicoesUltimas}/>
          <ReqAberta size="col-4" big="d-none" listaRequisicoesAbertas={this.state.requisicoesAbertas}/> 
          <ReqCancelada size="col-4" big="d-none" listaRequisicoesCanceladas={this.state.requisicoesCanceladas}/>
        </div>
          <Acidentes />
      </div>


    );
  }
}

// Dashboard.propTypes = {
//   text: PropTypes.string.isRequired,
// };

export default Dashboard;