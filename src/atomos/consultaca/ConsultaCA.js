

import React from "react";
import mte from '../../mte.jpg';
import ModalCA from '../modalca';
import html2canvas from 'html2canvas';
import brasao from '../../brasao.gif';

class ConsultaCA extends React.Component {
  state = {
    epiSelecionado : ""
  }
   
  selecionouEpi(epi) {
    this.setState({ epiSelecionado: epi });  
  }

  // Callback(){
  //   console.log("FOI");  
  //   html2canvas(gerar).then(canvas => {
  //     console.log(canvas);
  //     document.getElementById("gerar_aqui2").appendChild(canvas);
  //   });
  // }

  
    // handleUserInput(epiSelecionado) {
    //   this.setState({epiSelecionado: epiSelecionado});
    // };

  render() {


    return (
    <div>
      <SearchBar selecionouEpi={this.selecionouEpi.bind(this)}/> {/*onUserInput={this.handleUserInput.bind(this)} */}

      {this.state.epiSelecionado !== "" &&
      <div className="mt-4">
        <p className="d-flex justify-content-between align-items-center ">
          <div className="d-flex align-items-center">
            <i className="fa fa-briefcase mr-3" style={{fontSize: '40px'}} ></i> {/*style={{padding: '10px', border: '2px solid red', borderRadius: '50px', width: '70px' + '!important' , height: '70px'}}*/}
            <div className="text-left">
              <span className=" font-weight-bold">{this.state.epiSelecionado.NomeEquipamento}</span><br />
              {/* <span className="small">Proteção dos pés e pernas</span> */}
            </div>
          </div>

          <div className="d-flex flex-column pl-2 pr-2 pt-1 pb-1" style={{border: '1px solid #ced4da', borderRadius: '3px', background:'white'}}>
            <span className="small">Nº CA:</span>
            <span className="lead font-weight-bold">{this.state.epiSelecionado.NRRegistroCA}</span>
          </div>

          <div>
            <img src={mte} data-toggle="modal" data-target="#modal-ca"/>
          </div>
        </p>
      

      
        <p className="d-flex justify-content-between align-items-center ">
          <div>
            <span className="small">Situação:</span><br />
            <span className=" font-weight-bold">{this.state.epiSelecionado.Situacao}</span>
          </div>  
          <div>
            <span className="small">Validade:</span><br />
            <span className=" font-weight-bold">{this.state.epiSelecionado.DataValidade}</span>
          </div>  
          <div>
            <span className="small">Nº Processo:</span><br />
            <span className=" font-weight-bold">{this.state.epiSelecionado.NRProcesso}</span>
          </div>           
        </p>



        <p className="row d-flex justify-content-between align-items-center">
          <div className="col-md-4 d-flex flex-column text-left" >
            <span className="lead font-weight-bold">Descrição Completa:</span>
            <span className="small">{this.state.epiSelecionado.DescricaoEquipamento}</span>
          </div> 

          <div className="col-md-2 d-flex flex-column text-left">
            <span className="lead font-weight-bold">Fabricante:</span>
            <div>
              <span className="small font-weight-bold">CNPJ: </span>
              <span className="small">{this.state.epiSelecionado.CNPJ}</span>
            </div>
            <div>
              <span className="small font-weight-bold">Razão Social: </span>
              <span className="small">{this.state.epiSelecionado.RazaoSocial}</span>
            </div>
          </div>  
        
          <div className="col-md-3 d-flex flex-column text-left">
            <span className="lead font-weight-bold">Dados Complementares:</span>                 
            <span className="small font-weight-bold">Aprovado para: </span>    
            <span className="small">{this.state.epiSelecionado.AprovadoParaLaudo}</span>
          </div>

          <div className="col-md-3 d-flex flex-column text-left">
            <span className="lead font-weight-bold">Laudo:</span>
            <div>
              <span className="small font-weight-bold">CNPJ do Laboratório: </span>
              <span className="small">{this.state.epiSelecionado.CNPJLaboratorio}</span>
            </div>
            <div>
              <span className="small font-weight-bold">Razão Social: </span>
              <span className="small">{this.state.epiSelecionado.RazaoSocialLaboratorio}</span>
            </div>
          </div>  
        </p>

        

        <ModalCA epiSelecionado={this.state.epiSelecionado}/>    
      </div>
      }   

      </div>
    );
  }
}








class SearchBar extends React.Component {
  state = {
    listaCa : "",
    searchText: "",
    selecionouEpiBool: false
  } 
  
  handleChange(event) {    
    var data = [
      {NRRegistroCA: "12345", DataValidade: "25/03/2015", Situacao: "VENCIDO", NRProcesso: "46017006322201064", CNPJ:"03032917000166", 
      RazaoSocial: "NEXUS E.P.I. INDUSTRIA E COMERCIO LTDA", Natureza:"Nacional", NomeEquipamento: "LUVA PARA PROTEÇÃO CONTRA AGENTES MECÂNICOS", 
      DescricaoEquipamento: "Luva de segurança confeccionada em grafatex, elástico no dorso, tira de reforço externo entre o dedo polegar e indicador, punho em malha de poliéster, ilhoses nos dedos polegar e indicador, fios de aço no dorso", 
      MarcaCA: "NO CORPO DO EPI (ETIQUETA)", Referencia: "Série PSS 100", Cor:"Amarela", 
      AprovadoParaLaudo: "PROTEÇÃO DAS VIAS RESPIRATÓRIAS EM ATMOSFERAS IMEDIATAMENTE PERIGOSA À VIDA E A SAÚDE (IPVS) E PORCENTAGEM DE OXIGÊNCIO MENOR QUE 12,5 % AO NÍVEL DO MAR", 
      RestricaoLaudo:"Nenhuma", ObservacaoAnaliseLaudo: "PARA A ADEQUADA UTILIZAÇÃO DO EQUIPAMENTO DE PROTEÇÃO RESPIRATÓRIA, DEVEM SER OBSERVADAS AS RECOMENDAÇÕES DA FUNDAÇÃO JORGE DUPRAT FIGUEIREDO DE SEGURANÇA E MEDICINA DO TRABALHO -FUNDACENTRO, CONTIDAS NA PUBLICAÇÃO INTITULADA PROGRAMA DE PROTEÇÃO RESPIRATÓRIA - RECOMENDAÇÕES, SELEÇÃO E USO DE RESPIRADORES, ALÉM DO DISPOSTO NAS NORMAS REGULAMENTADORAS DE SEGURANÇA E SAÚDE NO TRABALHO", 
      CNPJLaboratorio: "62428073000136", RazaoSocialLaboratorio: "FUNDACENTRO - FUNDAÇÃO JORGE DUPRAT FIGUEIREDO DE SEG E MED DO TRABALHO", 
      NRLaudo: "040/2011-A", Norma: "ABNT NBR 13716:1996"},
      
      {NRRegistroCA: "54321", DataValidade: "25/03/2015", Situacao: "VENCIDO", NRProcesso: "46017006322201064", CNPJ:"03032917000166", 
      RazaoSocial: "NEXUS E.P.I. INDUSTRIA E COMERCIO LTDA", Natureza:"Nacional", NomeEquipamento: "LUVA PARA PROTEÇÃO CONTRA AGENTES MECÂNICOS", 
      DescricaoEquipamento: "Luva de segurança confeccionada em grafatex, elástico no dorso, tira de reforço externo entre o dedo polegar e indicador, punho em malha de poliéster, ilhoses nos dedos polegar e indicador, fios de aço no dorso", 
      MarcaCA: "NO CORPO DO EPI (ETIQUETA)", Referencia: "Série PSS 100", Cor:"Amarela", 
      AprovadoParaLaudo: "PROTEÇÃO DAS VIAS RESPIRATÓRIAS EM ATMOSFERAS IMEDIATAMENTE PERIGOSA À VIDA E A SAÚDE (IPVS) E PORCENTAGEM DE OXIGÊNCIO MENOR QUE 12,5 % AO NÍVEL DO MAR", 
      RestricaoLaudo:"Nenhuma", ObservacaoAnaliseLaudo: "PARA A ADEQUADA UTILIZAÇÃO DO EQUIPAMENTO DE PROTEÇÃO RESPIRATÓRIA, DEVEM SER OBSERVADAS AS RECOMENDAÇÕES DA FUNDAÇÃO JORGE DUPRAT FIGUEIREDO DE SEGURANÇA E MEDICINA DO TRABALHO -FUNDACENTRO, CONTIDAS NA PUBLICAÇÃO INTITULADA PROGRAMA DE PROTEÇÃO RESPIRATÓRIA - RECOMENDAÇÕES, SELEÇÃO E USO DE RESPIRADORES, ALÉM DO DISPOSTO NAS NORMAS REGULAMENTADORAS DE SEGURANÇA E SAÚDE NO TRABALHO", 
      CNPJLaboratorio: "62428073000136", RazaoSocialLaboratorio: "FUNDACENTRO - FUNDAÇÃO JORGE DUPRAT FIGUEIREDO DE SEG E MED DO TRABALHO", 
      NRLaudo: "040/2011-A", Norma: "ABNT NBR 13716:1996"},
      
      {NRRegistroCA: "99877", DataValidade: "25/03/2015", Situacao: "VENCIDO", NRProcesso: "46017006322201064", CNPJ:"03032917000166", 
      RazaoSocial: "NEXUS E.P.I. INDUSTRIA E COMERCIO LTDA", Natureza:"Nacional", NomeEquipamento: "LUVA PARA PROTEÇÃO CONTRA AGENTES MECÂNICOS", 
      DescricaoEquipamento: "Luva de segurança confeccionada em grafatex, elástico no dorso, tira de reforço externo entre o dedo polegar e indicador, punho em malha de poliéster, ilhoses nos dedos polegar e indicador, fios de aço no dorso", 
      MarcaCA: "NO CORPO DO EPI (ETIQUETA)", Referencia: "Série PSS 100", Cor:"Amarela", 
      AprovadoParaLaudo: "PROTEÇÃO DAS VIAS RESPIRATÓRIAS EM ATMOSFERAS IMEDIATAMENTE PERIGOSA À VIDA E A SAÚDE (IPVS) E PORCENTAGEM DE OXIGÊNCIO MENOR QUE 12,5 % AO NÍVEL DO MAR", 
      RestricaoLaudo:"Nenhuma", ObservacaoAnaliseLaudo: "PARA A ADEQUADA UTILIZAÇÃO DO EQUIPAMENTO DE PROTEÇÃO RESPIRATÓRIA, DEVEM SER OBSERVADAS AS RECOMENDAÇÕES DA FUNDAÇÃO JORGE DUPRAT FIGUEIREDO DE SEGURANÇA E MEDICINA DO TRABALHO -FUNDACENTRO, CONTIDAS NA PUBLICAÇÃO INTITULADA PROGRAMA DE PROTEÇÃO RESPIRATÓRIA - RECOMENDAÇÕES, SELEÇÃO E USO DE RESPIRADORES, ALÉM DO DISPOSTO NAS NORMAS REGULAMENTADORAS DE SEGURANÇA E SAÚDE NO TRABALHO", 
      CNPJLaboratorio: "62428073000136", RazaoSocialLaboratorio: "FUNDACENTRO - FUNDAÇÃO JORGE DUPRAT FIGUEIREDO DE SEG E MED DO TRABALHO", 
      NRLaudo: "040/2011-A", Norma: "ABNT NBR 13716:1996"}
    
    ];
    // this.props.onUserInput(data);
    this.setState({ searchText: event.target.value });
    this.setState({ listaCa: data });
    this.setState({ selecionouEpiBool: false });
  }

  selecionouEpiBool(bool) {
    this.setState({ selecionouEpiBool: bool });   //se o usuario ja selecionou um CA na pesquisa some com a tabela de resultados da pesquisa
    this.setState({ searchText: "" });  //limpar o campo de pesquisa qndo o usuario clicar em algum CA pesquisado
  }
  
  // test = () => {
  //   console.log(this.props.selecionouEpi.BoundThis);
  //   console.log(this.props);
  // }

  render() {
    return (
      <div>
        <div className="d-flex align-items-center">
          <h3 className="m-0"><b>Consulta CA</b></h3>
          <input style={{ zIndex: "10", position: "relative" }} className="ml-3 col-md-6 form-control btn-sm" type="text" value={this.state.searchText} placeholder="Search..." onChange={this.handleChange.bind(this)}/>
        </div>
        {(this.state.listaCa !== "" && this.state.selecionouEpiBool === false && this.state.searchText !== "") && <Table linhas={this.state.listaCa} selecionouEpi={this.props.selecionouEpi} selecionouEpiBool={this.selecionouEpiBool.bind(this)}/>} 
      </div>
    );
  }
}








class Table extends React.Component {

  render() {
    return (
      <div> 
        <div style={{
          opacity: "0.7",
          position: "absolute",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px",
          zIndex: "5",
          backgroundColor: "rgb(255, 255, 255)"
        }}/>   
        <table style={{ zIndex: "10", position: "absolute", boxShadow: "0 6px 12px rgba(0,0,0,.175)", left: "366px" }}>       
          <tbody>
            {this.props.linhas.map(linha => <Row linha={linha} selecionouEpi={this.props.selecionouEpi} selecionouEpiBool={this.props.selecionouEpiBool} />)}
          </tbody>
        </table>
      </div>
    );
  }
}






class Row extends React.Component {
  test = () => {
    console.log(this.state);
  }
  selecionouEpi() {
    this.props.selecionouEpi(this.props.linha); //passar dados do CA selecionado na pesquisa para componente de cima por props
    this.props.selecionouEpiBool(true); 
  }
  render() {
    
    return (
      <tr style={{border: "1px solid #ced4da", borderRadius: "5px", backgroundColor: "white" }} className="align-items-start d-flex flex-column p-3" onClick={this.selecionouEpi.bind(this)}>

        <span>CA: <b>{this.props.linha.NRRegistroCA}</b></span>
        <span>EPI:  <b>{this.props.linha.NomeEquipamento}</b></span>
        <span>Validade:  <b>{this.props.linha.DataValidade}</b></span>
        <span>Fabricante:  <b>{this.props.linha.RazaoSocial}</b></span>
      </tr>
    );
  }
}


export default ConsultaCA;