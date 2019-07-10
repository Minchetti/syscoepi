import React from 'react';

import FontAwesome from 'react-fontawesome';

// import Button from '../button';

import { Button, Modal, Table, Form, Col } from 'react-bootstrap';




class SearchBar extends React.Component {
  state = {
    lista : "",
    searchText: ""
    // listaSelecionados: this.props.selecionados
  } 
  handleChange(event) {   
    if (this.props.tipo === "funcionario"){
      var data = [
        {nome: "Marcello Minchetti", rg: "16778405", cpf: "78970546617", email: "teste@gmail.com", gh: "123456", cc: "123456", 
          turno: "vespertino", sexo: "Masculino"},
        {nome: "Rodolfo  Augusto", rg: "16778405", cpf: "78970546617", email: "teste@gmail.com", gh: "123456", cc: "123456", 
          turno: "vespertino", sexo: "Masculino"},
        {nome: "Susi  Ribeiro", rg: "16778405", cpf: "78970546617", email: "teste@gmail.com", gh: "123456", cc: "123456", 
          turno: "vespertino", sexo: "Masculino"}       
      ]
    }
    else if(this.props.tipo === "setor"){      
      var data = [
        {nomeCC: "Setor Informática", cc: "159487", gestor: "Leandro", funcionarios: [
          {nome: "Marcello Minchetti", rg: "16778405", cpf: "78970546617", email: "teste@gmail.com", gh: "123456", cc: "123456", 
            turno: "vespertino", sexo: "Masculino"},
          {nome: "Rodolfo  Augusto", rg: "16778405", cpf: "78970546617", email: "teste@gmail.com", gh: "123456", cc: "123456", 
            turno: "vespertino", sexo: "Masculino"},
          {nome: "Susi  Ribeiro", rg: "16778405", cpf: "78970546617", email: "teste@gmail.com", gh: "123456", cc: "123456", 
            turno: "vespertino", sexo: "Masculino"}      
        ]}, 
        {nomeCC: "Setor Estoque", cc: "321654", gestor: "Augusto", funcionarios: [
          {nome: "Willian Coasta", rg: "16778405", cpf: "78970546617", email: "teste@gmail.com", gh: "123456", cc: "123456", 
            turno: "vespertino", sexo: "Masculino"},
          {nome: "Rodolfo  Augusto", rg: "16778405", cpf: "78970546617", email: "teste@gmail.com", gh: "123456", cc: "123456", 
            turno: "vespertino", sexo: "Masculino"},
          {nome: "Susi  Ribeiro", rg: "16778405", cpf: "78970546617", email: "teste@gmail.com", gh: "123456", cc: "123456", 
            turno: "vespertino", sexo: "Masculino"}      
        ]}    
      ]
    }
    else if(this.props.busca === "epis"){
      var data = [
        {cod: "13524", nome: "Cotoveleira BreakGlass1", descricao: "Cotoveleira para Obras", validade: "10/10/2025", ca: "0776584", cc: "123456", 
        estoque: "20"},
        {cod: "13526", nome: "Cotoveleira BreakGlass2", descricao: "Cotoveleira para Obras", validade: "10/10/2025", ca: "0776584", cc: "123456", 
        estoque: "20"},
        {cod: "13528", nome: "Cotoveleira BreakGlass3", descricao: "Cotoveleira para Obras", validade: "10/10/2025", ca: "0776584", cc: "123456", 
        estoque: "20"}        
      ]
      
      data.map((epi) => {
        if(this.props.selecionados !== "" && this.props.selecionados !== [] && this.props.selecionados !== null){
          this.props.selecionados.map((selecionado) => {
            if(epi.cod === selecionado.cod ){
              var index = data.indexOf(epi)
               data.splice(index, 1);
            }
          })

        } 
      })
    }

    this.setState({ searchText: event.target.value });
    this.setState({ lista: data });
  }

  selecionouBool() {
    this.setState({ searchText: "" });  //limpar o campo de pesquisa qndo o usuario clicar em algum CA pesquisado
  }
  
  render() {
    return (
    <div>
      <Form.Row>
        <Form.Group as={Col} md="5">
          <b>Pesquisa {this.props.tipo}</b>                        
        </Form.Group>
        <Form.Group as={Col} md="7">
          <Form.Control as="input" style={{ zIndex: "10", position: "relative" }} value={this.state.searchText} placeholder={"Busca " +this.props.tipo+ "..."} onChange={this.handleChange.bind(this)}/>  
        </Form.Group>
      </Form.Row> 
      {(this.state.lista !== "" && this.state.searchText !== "") 
        && <Tabela row={this.props.busca} linhas={this.state.lista} selecionou={this.props.selecionou} selecionouBool={this.selecionouBool.bind(this)}/>} 
    </div>

     
    );
  }
}




class Tabela extends React.Component {

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
        <Table style={{ zIndex: "11", position: "absolute", boxShadow: "0 6px 12px rgba(0,0,0,.175)", left: "222px" }}>       
          <tbody>
            {this.props.row === "funcionarios" && this.props.linhas.map(linha => <SimpleRow linha={linha} selecionou={this.props.selecionou} selecionouBool={this.props.selecionouBool} />)}
            {this.props.row === "epis" && this.props.linhas.map(linha => <ComplexRow linha={linha} selecionou={this.props.selecionou} selecionouBool={this.props.selecionouBool} />)}
          </tbody>
        </Table>
      </div>
    );
  }
}







class SimpleRow extends React.Component {
  selecionou() {
    this.props.selecionou(this.props.linha); //passar dados do CA selecionado na pesquisa para componente de cima por props
    this.props.selecionouBool(); 
  }
  
  render() {
    var linha = [];

    Object.keys(this.props.linha).map((campo) => 
      linha.push(<td className="p-3"> {campo}: <b>{typeof this.props.linha[campo] === 'object' 
        ? "*"
        : this.props.linha[campo]}</b></td>
      )
    )   

    return (
      <tr style={{border: "1px solid #ced4da", borderRadius: "5px", backgroundColor: "white" }} className="align-items-start d-flex p-3" onClick={this.selecionou.bind(this)}>
        {linha}
      </tr>
    )    

  }
}










class ComplexRow extends React.Component {
  state = {
    qntd: "",
  }
  
  selecionou() {
    console.log(this.props.linha.estoque);
    console.log(this.state.qntd);

    if(this.props.linha.estoque >= this.state.qntd){
      console.log("ENTROU");
  

      var props = this.props.linha;
      props.qntd = this.state.qntd;

      this.props.selecionou(props); //passar dados do CA selecionado na pesquisa para componente de cima por props
      this.props.selecionouBool();
    }
  }

  
  render() {
 

    var linha = [];

    Object.keys(this.props.linha).map((campo) =>       
      linha.push(<span className="p-2"> {campo}: <b>{this.props.linha[campo]}</b></span>) 
    )   
    
    return (
      <tr style={{border: "1px solid #ced4da", borderRadius: "5px", backgroundColor: "white" }} className="align-items-center d-flex p-1">
        {linha}
        <Form.Control as="input" style={{width: "auto"}} value={this.state.qntd} placeholder="qntd..." onChange={e => this.setState({ qntd: e.target.value })}/>  
        <Button variant="primary" onClick={this.selecionou.bind(this)}>Adicionar</Button>           
      </tr>
    );
  }
}





export default SearchBar;