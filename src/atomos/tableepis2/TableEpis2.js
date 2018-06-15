import React from 'react';
import InputMask from 'react-input-mask';
// import PropTypes from 'prop-types';

class TableEpis2 extends React.Component {
initialState = {
  episInitialD: [],
  episInitialA: [],
}

state = {
  filterTextD : "",
  filterTextA : "",
  episDisponiveis: this.props.listaD,
  episAtribuidos: this.props.listaA
}

componentWillMount(){
  this.initialState.episInitialD = JSON.parse(JSON.stringify(this.props.listaD));
  this.initialState.episInitialA = JSON.parse(JSON.stringify(this.props.listaA));
}


componentWillUpdate(nextProps){
  if(JSON.stringify(this.initialState.episInitial) !== JSON.stringify(this.state.epis)  && this.props.lista == nextProps.lista){
    document.getElementById("table-buttons").style.display = "flex";
  }
  else{
    document.getElementById("table-buttons").style.display = "none";
  }
}

componentWillReceiveProps(nextProps){    
  if(this.state.epis !== nextProps.lista){
    this.setState({ epis : nextProps.lista});   
  }     
  if(this.initialState.episInitial !== nextProps.lista){
    this.initialState.episInitial = JSON.parse(JSON.stringify(nextProps.lista));
  }
}


handleUserInputD(filterText) {
  this.setState({filterTextD: filterText});
};
handleUserInputA(filterText) {
  this.setState({filterTextA: filterText});
};

handleRowDelD(epi) {
  var index = this.state.episDisponiveis.indexOf(epi);
  this.state.episDisponiveis.splice(index, 1);
  this.setState(this.state.episDisponiveis);
};
handleRowDelA(epi) {
  var index = this.state.episAtribuidos.indexOf(epi);
  this.state.episAtribuidos.splice(index, 1);
  this.setState(this.state.episAtribuidos);
};

handleEpisTableD(evt) {
  var item = {
    id: evt.target.id,
    name: evt.target.name,
    value: evt.target.value
  };
  var epis = this.state.episDisponiveis.slice();
  var newEpis = epis.map(function(epi) {
    for (var key in epi) {
      if (key == item.name && epi.id == item.id) {
        epi[key] = item.value;
      }
    }
    return epi;
  });
  this.setState({episDisponiveis:newEpis});
};
handleEpisTableA(evt) {
  var item = {
    id: evt.target.id,
    name: evt.target.name,
    value: evt.target.value
  };
  var epis = this.state.episAtribuidos.slice();
  var newEpis = epis.map(function(epi) {
    for (var key in epi) {
      if (key == item.name && epi.id == item.id) {
        epi[key] = item.value;
      }
    }
    return epi;
  });
  this.setState({episAtribuidos:newEpis});
};


CancelarEditar = () =>{      
  this.setState(
    {epis : JSON.parse(JSON.stringify(this.initialState.episInitial))},
    () => document.getElementById("table-buttons").style.display = "none"
  );
}

SalvarEditar = () =>{
  alert('DADOS MODIFICADOS SALVOS');
}





  render() {    
    return (
      <div>
        <div className="panel">        
          <div className="panel-heading d-flex justify-content-between align-items-center">
            <h6 className="text-left mb-0"><i className="fa fa-user pr-2" aria-hidden="true"></i>Epi's Disponíveis({this.state.episDisponiveis.length})</h6>
            
            <div className="d-nonin" id="table-buttons">      
              <button type="button" onClick={this.CancelarEditar} className="btn btn-danger mr-2" > {/*data-dismiss="modal"*/}
                <i className="fa fa-times pr-2 " aria-hidden="true" />Cancelar
              </button>
              <button onClick={this.SalvarEditar} type="submit" className="btn btn-primary" >
                <i className="fa fa-check pr-2 " aria-hidden="true"/>Salvar
              </button>
            </div>
            
            <div className="d-flex align-items-center">
              <i class="fas fa-search fa-lg mr-2"></i>
              <SearchBar filterText={this.state.filterTextD} onUserInput={this.handleUserInputD.bind(this)}/>
            </div>
          </div>
          <div className="panel-body">
            <EpisTable onEpisTableUpdate={this.handleEpisTableD.bind(this)}  onRowDel={this.handleRowDelD.bind(this)} epis={this.state.episDisponiveis} filterText={this.state.filterTextD}/> {/*onRowAdd={this.handleAddEvent.bind(this)}*/}
          </div>
        </div>

        <div className="panel mt-5">        
          <div className="panel-heading d-flex justify-content-between align-items-center">
            <h6 className="text-left mb-0"><i className="fa fa-user pr-2" aria-hidden="true"></i>Epi's Atribuidos({this.state.episAtribuidos.length})</h6>
            
            <div className="d-nonin" id="table-buttons">      
              <button type="button" onClick={this.CancelarEditar} className="btn btn-danger mr-2" > {/*data-dismiss="modal"*/}
                <i className="fa fa-times pr-2 " aria-hidden="true" />Cancelar
              </button>
              <button onClick={this.SalvarEditar} type="submit" className="btn btn-primary" >
                <i className="fa fa-check pr-2 " aria-hidden="true"/>Salvar
              </button>
            </div>
            
            <div className="d-flex align-items-center">
              <i class="fas fa-search fa-lg mr-2"></i>
              <SearchBar filterText={this.state.filterTextA} onUserInput={this.handleUserInputA.bind(this)}/>
            </div>
          </div>
          <div className="panel-body">
            <EpisTable onEpisTableUpdate={this.handleEpisTableA.bind(this)}  onRowDel={this.handleRowDelA.bind(this)} epis={this.state.episAtribuidos} filterText={this.state.filterTextA}/> {/*onRowAdd={this.handleAddEvent.bind(this)}*/}
          </div>
        </div>
      </div>
    );
  }
}







class SearchBar extends React.Component {
  handleChange() {
    this.props.onUserInput(this.refs.filterTextInput.value);
  }
  render() {
    return (
      <div>
        <input className="form-control" type="text" placeholder="Search..." value={this.props.filterText} ref="filterTextInput" onChange={this.handleChange.bind(this)}/>
      </div>
    );
  }
}








class EpisTable extends React.Component {

  render() {

    var onEpisTableUpdate = this.props.onEpisTableUpdate;
    var rowDel = this.props.onRowDel;
    var filterText = this.props.filterText;
    var epi = this.props.epis.map(function(epi) {
      if (epi.nome.indexOf(filterText) === -1) {
        return;
      }
      return (<TableRow  onEpisTableUpdate={onEpisTableUpdate} epi={epi} onDelEvent={rowDel.bind(this)} key={epi.id}/>)
    });
    return (
      <div className="table-responsive">      
        <table id="table_epis" className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Cod</th>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Validade</th>
              <th>Min Estoque</th>
              <th>Estoque</th>
              <th>Max Estoque</th>
              <th>CA</th>
              <th>Data Armazenamento</th>
              <th>Data Devolução</th>
              <th>Motivo Devolução</th>
              <th>Cor</th>
              <th>Fator Redução</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {epi}
          </tbody>
        </table>
      </div>
    );
  }
}



class TableRow extends React.Component {
  onDelEvent() {
    this.props.onDelEvent(this.props.epi);
  }
  
  render() {
    return (
      <tr className="eachRow">
        <EditableCell onEpisTableUpdate={this.props.onEpisTableUpdate} cellData={{
          "type": "nome",
          value: this.props.epi.cod,
          id: this.props.epi.id
        }}/>
        <EditableCell onEpisTableUpdate={this.props.onEpisTableUpdate} cellData={{
          type: "rg",
          value: this.props.epi.nome,
          id: this.props.epi.id
        }}/>
        <EditableCell onEpisTableUpdate={this.props.onEpisTableUpdate} cellData={{
          type: "cpf",
          value: this.props.epi.descricao,
          id: this.props.epi.id
        }}/>
        <EditableCell onEpisTableUpdate={this.props.onEpisTableUpdate} cellData={{
          type: "email",
          value: this.props.epi.validade,
          id: this.props.epi.id
        }}/>
        <EditableCell onEpisTableUpdate={this.props.onEpisTableUpdate} cellData={{
          type: "gh",
          value: this.props.epi.minEstoque,
          id: this.props.epi.id
        }}/>
        <EditableCell onEpisTableUpdate={this.props.onEpisTableUpdate} cellData={{
          type: "turno",
          value: this.props.epi.estoque,
          id: this.props.epi.id
        }}/>
        <EditableCell onEpisTableUpdate={this.props.onEpisTableUpdate} cellData={{
          type: "sexo",
          value: this.props.epi.maxEstoque,
          id: this.props.epi.id
        }}/>
        <EditableCell onEpisTableUpdate={this.props.onEpisTableUpdate} cellData={{
          type: "sexo",
          value: this.props.epi.ca,
          id: this.props.epi.id
        }}/>
        <EditableCell onEpisTableUpdate={this.props.onEpisTableUpdate} cellData={{
          type: "sexo",
          value: this.props.epi.dataArmazenamento,
          id: this.props.epi.id
        }}/>
        <EditableCell onEpisTableUpdate={this.props.onEpisTableUpdate} cellData={{
          type: "sexo",
          value: this.props.epi.dataDevolucao,
          id: this.props.epi.id
        }}/>
        <EditableCell onEpisTableUpdate={this.props.onEpisTableUpdate} cellData={{
          type: "sexo",
          value: this.props.epi.motivoDevolucao,
          id: this.props.epi.id
        }}/>
        <EditableCell onEpisTableUpdate={this.props.onEpisTableUpdate} cellData={{
          type: "sexo",
          value: this.props.epi.cor,
          id: this.props.epi.id
        }}/>
        <EditableCell onEpisTableUpdate={this.props.onEpisTableUpdate} cellData={{
          type: "sexo",
          value: this.props.epi.fatorReducao,
          id: this.props.epi.id
        }}/>
        <td className="del-cell">
          <input type="button" onClick={this.onDelEvent.bind(this)} value="X" className="del-btn form-control"/>
        </td>
        <td className="">
          <input type="button" onClick={this.onDelEvent.bind(this)} value="" className="del-btn form-control"/>
          {/* <input className="form-control" type='text'  onChange={this.props.onEpisTableUpdate}/>        {/*name={this.props.cellData.type} id={this.props.cellData.id} value={this.props.cellData.value}*/}
          {/*<input type="button" onClick={this.onDelEvent.bind(this)} value="X" className="del-btn form-control"/> */}
        </td>
      </tr>
    );
  }
}



class EditableCell extends React.Component {
  render() {
    return (
      <td>
        <input className="form-control" type='text' name={this.props.cellData.type} id={this.props.cellData.id} value={this.props.cellData.value} onChange={this.props.onEpisTableUpdate}/>
      </td>
    );
  }
}



export default TableEpis2;
