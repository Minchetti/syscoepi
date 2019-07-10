import React from 'react';
import FontAwesome from 'react-fontawesome';
import SearchBar from '../searchbar';
import { Button, Modal, ButtonGroup, Form, Col } from 'react-bootstrap';


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





export default ModalCriarRequisicao;
