import React from 'react';
// import PropTypes from 'prop-types';
import ReqAberta from '../reqaberta';
import ReqCancelada from '../reqcancelada';
import UltimaReq from '../ultimareq';

import Button from '../button';

import ModalCriarRequisicao from '../modalcriarrequisicao';

class Request extends React.Component {

  state = {
    nomeEmpresaSelecionada: "GERAL",
    arrayEmpresas: [],
    requisicoesUltimas: [],
    requisicoesAbertas: [],
    requisicoesCanceladas: []
  }

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

  MontarSelect = () => this.state.arrayEmpresas.map((value) => { //.data
    return (
      <option>{value.nomeAmigavel}</option>
    )
  });

  
  CarregarRequisicoes = () =>{
    var data2 = [];    
    var data = [
      {id:"2235", quantidade: "01", cod:"7899", cc:"31523", gh:"63456", turno:"noturno", funcionario:"Pedro Muniz", empresa:"Fitassul", nome: "Cap02 BlackBone", descricao: "Capacete com queixeira", validade: "10/10/2025", minEstoque: "10", estoque: "50", maxEstoque: "99", ca: "0776584", dataArmazenamento: "01/02/2018", dataDevolucao: "01/05/2016", motivoDevolucao: "Pedido errado", cor: "preto", grupo: "Capacetes",  fatorReducao: "Proteção contra impactos médios"},   
      {id:"4345", quantidade: "01", cod:"4566", cc:"31523", gh:"63456", turno:"noturno", funcionario:"Pedro Muniz", empresa:"rezende", nome: "SingleFlow Gloves", descricao: "Luvas de malha", validade: "10/10/2025", minEstoque: "10", estoque: "50", maxEstoque: "99", ca:"0771147", dataArmazenamento: "01/02/2018", dataDevolucao:"01/05/2016", motivoDevolucao:"Pedido errado", cor: "Prata", grupo: "Luvas",  fatorReducao: "Proteção contra cortes"},
      {id:"1231", quantidade: "01", cod:"8888", cc:"31523", gh:"63456", turno:"noturno", funcionario:"Pedro Muniz", empresa:"duston", nome: "Straight Glass", descricao: "Óculos de poliestinelo", validade: "10/10/2025", minEstoque: "10", estoque: "50", maxEstoque: "99", ca:"0719684", dataArmazenamento: "01/02/2018", dataDevolucao:"01/05/2016", motivoDevolucao:"Pedido errado", cor:"preto", grupo: "Óculos",  fatorReducao: "Proteção contra faíscas e detritos"},
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

    
    

  componentWillMount(){    
    this.CarregarRequisicoes();
    this.CarregarEmpresas();
    this.MontarSelect();   
  }
  
  
  Teste = () => {console.log(this.state);}

  render() {
    return (
      
      

      <div id="request" className=""> 
      <div onClick={this.Teste}>AQUI</div>
        <h4 className="position-absolute m-auto l-0 r-0 t-15 text-white"><i className="fa fa-clipboard" aria-hidden="true"></i> Requisições</h4>           
        <div className="row pb-3">
          <div className="col-md-6">
            <select id="select-empresas" className="form-control btn-sm btn-dark" onChange={e => this.setState({ nomeEmpresaSelecionada: e.target.value }, this.CarregarRequisicoes)}>
              <option>GERAL</option>
              {this.MontarSelect()}
            </select>
          </div>

          <div className="col-md-6 align-items-center">        
            <Button class="btn-dark w-100 h-100" icon="fa-plus fa-lg mr-2" text="Cadastrar Requisição" target="#modal-criar-requisicao"/>
          </div>



        </div>
        
        <div className="row"> 
          <UltimaReq size="col-md-12" small="d-none" listaRequisicoesUltimas={this.state.requisicoesUltimas} /> 
          <ReqAberta size="col-md-12" small="d-none" listaRequisicoesAbertas={this.state.requisicoesAbertas} /> 
          <ReqCancelada size="col-md-12" small="d-none" listaRequisicoesCanceladas={this.state.requisicoesCanceladas} /> 
        </div> 
        
      <ModalCriarRequisicao/> 
      </div>      
    )
  }
}

// Request.propTypes = {
//   text: PropTypes.string.isRequired,
// };

export default Request;