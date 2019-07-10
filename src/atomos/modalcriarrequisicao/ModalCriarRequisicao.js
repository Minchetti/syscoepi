import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Button, Modal, ButtonGroup, Form, Row, Col, Table } from 'react-bootstrap';


class ModalCriarRequisicao extends React.Component {
  state = {
    tipoReq: null,
    show: this.props.show
  }
  
  handleClick(event){
    this.setState({ tipoReq: event.target.value });  
  }

  componentWillReceiveProps(props){    
    this.setState({ show: props }); 
  }

  
  fechar(fechar){
    this.setState({ tipoReq: fechar }); 
  }

  handleHide = () => {
    this.setState({ show: false }); 
  }

  
  render(){
    return(

        <Modal show={this.state.show} onHide={this.handleHide}>

          <Modal.Header closeButton>
            <Modal.Title><FontAwesome name="user-plus"/> Criar Requisição</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <ButtonGroup className="w-100">
              <Button variant="primary" onClick={this.handleClick.bind(this)} value="1">Por Funcionário</Button>
              <Button variant="primary" onClick={this.handleClick.bind(this)} value="2">Por Setor</Button>
            </ButtonGroup>

            {this.state.tipoReq == 1 && (<AdicionarPorFuncionario fechar={this.fechar.bind(this)}/>)} 
            {this.state.tipoReq == 2 && (<AdicionarPorSetor fechar={this.fechar.bind(this)}/>)}
          </Modal.Body>

          {/* <Modal.Footer>
          </Modal.Footer> */}
        </Modal>
          
  
    );
  };
}






class AdicionarPorFuncionario extends React.Component {
  state = {
    funcionarioSelecionado : "",
    localEntrega: "fitassul",
    turnoEntrega: "vespertino",

    episSelecionados: []
  }
    
  selecionouFunc(func) {
    this.setState({ funcionarioSelecionado: func });  
  } 
  selecionouEpi(epi) {
    var episRequisitados = this.state.episSelecionados;
    episRequisitados.push(epi);
    this.setState({ episSelecionados: episRequisitados });  
  }

  onDelEvent(epi) {
    var index = this.state.episSelecionados.indexOf(epi);
    this.state.episSelecionados.splice(index, 1);    
    this.setState({ episSelecionados: this.state.episSelecionados });  
  }

  finalizar(){
    var requisicao = [ this.state.funcionarioSelecionado + this.state.localEntrega + this.state.turnoEntrega + this.state.episSelecionados ];
    console.log(requisicao);

  }


  render(){
    return(
      <Form className="mt-4">
        <SearchBar tipo={"funcionario"} busca={"funcionarios"} selecionou={this.selecionouFunc.bind(this)}/>
        {this.state.funcionarioSelecionado !== "" && (
          
        <div>
          <Form.Row className="mt-3"> 
            <Form.Group as={Col}>
              <Form.Label><FontAwesome name="user"/> Nome</Form.Label>
              <Form.Control type="text" value={this.state.funcionarioSelecionado.nome}/>                
            </Form.Group>   
            <Form.Group as={Col}>
              <Form.Label><FontAwesome name="user"/> CC</Form.Label>
              <Form.Control type="text" value={this.state.funcionarioSelecionado.cc}/>                
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label><FontAwesome name="user"/> Local Entrega</Form.Label>
              <Form.Control as="select" onChange={e => this.setState({ localEntrega: e.target.value })}>  
                <option>Retirar na loja Fitassul</option>      
                <option>Retirar na loja central</option>               
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label><FontAwesome name="user"/> Turno Entrega</Form.Label>
              <Form.Control as="select" onChange={e => this.setState({ turnoEntrega: e.target.value })}>  
                <option>Vespertino</option>      
                <option>Matutino</option>               
              </Form.Control>
            </Form.Group>
          </Form.Row>


             
          <SearchBar selecionados={this.state.episSelecionados} tipo={"epis"} busca={"epis"} selecionou={this.selecionouEpi.bind(this)}/>
            
          {this.state.episSelecionados.length > 0 && (

            <div className="mt-3">
              {this.state.episSelecionados.map(epiSelecionado =>             
                <Form.Row>
                  <Form.Group as={Col} md="6">
                    <Form.Label><FontAwesome name="user"/> Nome</Form.Label>
                    <Form.Control type="text" value={epiSelecionado.nome}/>                
                  </Form.Group>
                  <Form.Group as={Col} md="3">
                    <Form.Label><FontAwesome name="user"/> CA</Form.Label>
                    <Form.Control type="text" value={epiSelecionado.ca}/>                
                  </Form.Group>
                  <Form.Group as={Col} md="2">
                    <Form.Label><FontAwesome name="user"/> Qtd</Form.Label>
                    <Form.Control type="text" value={epiSelecionado.qntd}/>                
                  </Form.Group>
                  <Form.Group as={Col} md="1">
                    <FontAwesome name="times-circle" onClick={() => this.onDelEvent(epiSelecionado)}/>               
                  </Form.Group>
                </Form.Row>
              )}
              <Buttons fechar={this.props.fechar} finalizar={this.finalizar.bind(this)}/>
            </div>
          )}

        </div>
        )}




      
      </Form>
    );
  };
};
/****************************************************************************************************************************/

class AdicionarPorSetor extends React.Component { //editar
  state = {
    funcionariosSelecionados : "",
    localEntrega: "fitassul",
    turnoEntrega: "vespertino",

    episSelecionados: []
  }
    
  selecionouFunc(func) {
    this.setState({ funcionariosSelecionados: func });  
  } 
  selecionouEpi(epi) {
    var episRequisitados = this.state.episSelecionados;
    episRequisitados.push(epi);
    this.setState({ episSelecionados: episRequisitados });  
  }

  onDelEvent(epi) {
    var index = this.state.episSelecionados.indexOf(epi);
    this.state.episSelecionados.splice(index, 1);    
    this.setState({ episSelecionados: this.state.episSelecionados });  
  }
  onDelEventF(func) {
    var index = this.state.funcionariosSelecionados.funcionarios.indexOf(func);
    this.state.funcionariosSelecionados.funcionarios.splice(index, 1);    
    this.setState({ funcionariosSelecionados: this.state.funcionariosSelecionados });  
  }

  finalizar(){
    var requisicao = [ this.state.funcionariosSelecionados + this.state.localEntrega + this.state.turnoEntrega + this.state.episSelecionados ];
    console.log(requisicao);

  }
  render(){
    return(

      <Form className="mt-4">
        <SearchBar tipo={"setor"} busca={"funcionarios"} selecionou={this.selecionouFunc.bind(this)}/>
        {this.state.funcionariosSelecionados !== "" && (
          <div>
            <Form.Row className="mt-3">
              <Form.Group as={Col}>
                <Form.Label><FontAwesome name="user"/> Nome CC</Form.Label>
                <Form.Control type="text" value={this.state.funcionariosSelecionados.nomeCC}/>                
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label><FontAwesome name="user"/> CC</Form.Label>
                <Form.Control type="text" value={this.state.funcionariosSelecionados.cc}/>                
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label><FontAwesome name="user"/> Gestor</Form.Label>
                <Form.Control type="text" value={this.state.funcionariosSelecionados.gestor}/>                
              </Form.Group>
            </Form.Row>

            {this.state.funcionariosSelecionados.funcionarios.map(funcionario =>

              <Form.Row>
                <Form.Group as={Col} md="6">
                  <Form.Label><FontAwesome name="user"/> Nome</Form.Label>
                  <Form.Control type="text" value={funcionario.nome}/>                
                </Form.Group>
                <Form.Group as={Col} md="3">
                  <Form.Label><FontAwesome name="user"/> CPF</Form.Label>
                  <Form.Control type="text" value={funcionario.cpf}/>                
                </Form.Group>
                <Form.Group as={Col} md="2">
                  <Form.Label><FontAwesome name="user"/> RG</Form.Label>
                  <Form.Control type="text" value={funcionario.rg}/>                
                </Form.Group>
                <Form.Group as={Col} md="1">
                  <FontAwesome name="times-circle" onClick={() => this.onDelEventF(funcionario)}/>           
                </Form.Group>
              </Form.Row>
            )}
            
            <SearchBar selecionados={this.state.episSelecionados} tipo={"epis"} busca={"epis"} selecionou={this.selecionouEpi.bind(this)}/>

            {this.state.episSelecionados.length > 0 && ( 
              <div className="mt-3">               
                {this.state.episSelecionados.map(epiSelecionado => 
                  <Form.Row>
                    <Form.Group as={Col} md="6">
                      <Form.Label><FontAwesome name="user"/> Nome</Form.Label>
                      <Form.Control type="text" value={epiSelecionado.nome}/>                
                    </Form.Group>
                    <Form.Group as={Col} md="3">
                      <Form.Label><FontAwesome name="user"/> CA</Form.Label>
                      <Form.Control type="text" value={epiSelecionado.ca}/>                
                    </Form.Group>
                    <Form.Group as={Col} md="2">
                      <Form.Label><FontAwesome name="user"/> Qtd</Form.Label>
                      <Form.Control type="text" value={epiSelecionado.qntd}/>                
                    </Form.Group>
                    <Form.Group as={Col} md="1">
                      <FontAwesome name="times-circle" onClick={() => this.onDelEvent(epiSelecionado)}/>           
                    </Form.Group>
                  </Form.Row>
                )}
              <Buttons fechar={this.props.fechar} finalizar={this.finalizar.bind(this)}/>
            </div>
            )}
          </div>
        )}
                      
  </Form>

    )
  }
}









/****************************************************************************************************************************/


class Buttons extends React.Component {
  render() {
    
    return (
      <ButtonGroup>
        <Button variant="danger" onClick={() => this.props.fechar(null)}>
          <FontAwesome name="times"/> Fechar
        </Button>
        <Button variant="primary" onClick={() => this.props.finalizar()} >
          <FontAwesome name="check"/> Finalizar
        </Button>
      </ButtonGroup>



      // <div>
      //   <button type="button" className="btn btn-danger mr-2" data-dismiss="modal" onClick={() => this.props.fechar(null)}> 
      //     <FontAwesome name="times"/> Fechar
      //   </button>
      //   <button id="btn-conta" type="submit" className="btn btn-primary" onClick={() => this.props.finalizar()}>
      //     <FontAwesome name="check"/>Finalizar
      //   </button>        
      // </div>
    );
  }
}




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
    this.setState({ selecionouBool: false });
  }

  selecionouBool(bool) {
    this.setState({ selecionouBool: bool });   //se o usuario ja selecionou um CA na pesquisa some com a tabela de resultados da pesquisa
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
      {(this.state.lista !== "" && this.state.selecionouBool === false && this.state.searchText !== "") 
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
    this.props.selecionouBool(true); 
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
      this.props.selecionouBool(true);
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
        <Button variant="primary" onClick={this.selecionou.bind(this)} >Adicionar</Button>           
      </tr>
    );
  }
}




export default ModalCriarRequisicao;
