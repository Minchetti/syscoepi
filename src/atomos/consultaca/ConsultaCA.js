

import React from "react";
import mte from '../../mte.jpg';
import ModalCA from '../modalca';
import html2canvas from 'html2canvas';
import brasao from '../../brasao.gif';

import FontAwesome from 'react-fontawesome';
import { Image, Row, Col, Container } from 'react-bootstrap';


class ConsultaCA extends React.Component {
  state = {
    epiSelecionado : ""
  }
   
  selecionouEpi(epi) {
    this.setState({ epiSelecionado: epi });  
  }


  render() {


    return (

      <Container>
        <SearchBar selecionouEpi={this.selecionouEpi.bind(this)}/>
        {this.state.epiSelecionado !== "" &&
          <div>
            <Row className="align-items-center mt-3 text-left">
              <Col md={6}>
                <FontAwesome name="briefcase"/><b> {this.state.epiSelecionado.NomeEquipamento}</b>
              </Col>
              <Col md={3}>
                Nº CA: <b>{this.state.epiSelecionado.NRRegistroCA}</b>
              </Col>
              <Col md={3}>
                <Image src={mte}/>
              </Col>
            </Row>
            <Row className="mt-4 text-left">
              <Col>Situação: <b>{this.state.epiSelecionado.Situacao}</b></Col>
              <Col>Data Validade: <b>{this.state.epiSelecionado.DataValidade}</b></Col>
              <Col>Nº Processo: <b>{this.state.epiSelecionado.NRProcesso}</b></Col>
            </Row>
            <Row className="mt-4 text-left">
              <Col>Descrição: <b>{this.state.epiSelecionado.DescricaoEquipamento}</b></Col>
              <Col className="d-flex flex-column">
                <span>Fabricante:</span>
                <span>CNPJ: <b>{this.state.epiSelecionado.CNPJ}</b></span>
                <span>Razão Social: <b>{this.state.epiSelecionado.RazaoSocial}</b></span>        
              </Col>
              <Col>Aprovado Para: <b>{this.state.epiSelecionado.AprovadoParaLaudo}</b></Col>
              <Col className="d-flex flex-column">
                <span>Laboratório:</span>
                <span>CNPJ: <b>{this.state.epiSelecionado.CNPJLaboratorio}</b></span>
                <span>Razão Social: <b>{this.state.epiSelecionado.RazaoSocialLaboratorio}</b></span>            
              </Col>
            </Row>
            <ModalCA epiSelecionado={this.state.epiSelecionado}/>  
          </div>
        }
      </Container>

    );
  }
}








class SearchBar extends React.Component {
  state = {
    listaCa : "",
    searchText: ""
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
  }

  selecionouBool() {
    this.setState({ searchText: "" });  //limpar o campo de pesquisa qndo o usuario clicar em algum CA pesquisado
  }
  
  // test = () => {
  //   console.log(this.props.selecionouEpi.BoundThis);
  //   console.log(this.props);
  // }

  render() {
    return (

      // <div>
      //   <Form.Row>
      //     <Form.Group as={Col} md="5">
      //       <b>Consulta CA</b>                        
      //     </Form.Group>
      //     <Form.Group as={Col} md="7">
      //       <Form.Control as="input" style={{ zIndex: "10", position: "relative" }} value={this.state.searchText} placeholder={"Busca CA"} onChange={this.handleChange.bind(this)}/>  
      //     </Form.Group>
      //   </Form.Row> 
      //   {(this.state.listaCa !== "" && this.state.selecionouBool === false && this.state.searchText !== "") &&
      //    <Table linhas={this.state.listaCa} selecionouEpi={this.props.selecionouEpi} selecionouBool={this.selecionouBool.bind(this)}/>}
      // </div>



      <div>
        <div className="d-flex align-items-center">
          <h3 className="m-0"><b>Consulta CA</b></h3>
          <input style={{ zIndex: "10", position: "relative" }} className="ml-3 col-md-6 form-control btn-sm" type="text" value={this.state.searchText} placeholder="Search..." onChange={this.handleChange.bind(this)}/>
        </div>
        {(this.state.listaCa !== "" && this.state.searchText !== "") 
        && <Table linhas={this.state.listaCa} selecionouEpi={this.props.selecionouEpi} selecionouBool={this.selecionouBool.bind(this)}/>} 
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
            {this.props.linhas.map(linha => <TableRow linha={linha} selecionouEpi={this.props.selecionouEpi} selecionouBool={this.props.selecionouBool} />)}
          </tbody>
        </table>
      </div>
    );
  }
}






class TableRow extends React.Component {
  test = () => {
    console.log(this.state);
  }
  selecionouEpi() {
    this.props.selecionouEpi(this.props.linha); //passar dados do CA selecionado na pesquisa para componente de cima por props
    this.props.selecionouBool(); 
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