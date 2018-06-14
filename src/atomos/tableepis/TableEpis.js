import React from 'react';
import InputMask from 'react-input-mask';
// import PropTypes from 'prop-types';

class TableEpis extends React.Component {
initialState = {
  episInitial: []
}

state = {
  filterText : "",
  epis: this.props.lista
}

componentWillMount(){
  this.initialState.episInitial = JSON.parse(JSON.stringify(this.props.lista));
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


handleUserInput(filterText) {
  this.setState({filterText: filterText});
};

handleRowDel(epi) {
  var index = this.state.epis.indexOf(epi);
  this.state.epis.splice(index, 1);
  this.setState(this.state.epis);
};

handleEpisTable(evt) {
  var item = {
    id: evt.target.id,
    name: evt.target.name,
    value: evt.target.value
  };
  var epis = this.state.epis.slice();
  var newEpis = epis.map(function(epi) {
    for (var key in epi) {
      if (key == item.name && epi.id == item.id) {
        epi[key] = item.value;

      }
    }
    return epi;
  });
  this.setState({epis:newEpis});
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
      <div className="panel">        
        <div className="panel-heading d-flex justify-content-between align-items-center">
          <h6 className="text-left mb-0"><i className="fa fa-user pr-2" aria-hidden="true"></i>Epi's({this.state.epis.length})</h6>
          
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
            <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)}/>
          </div>
        </div>
        <div className="panel-body">
          <EpisTable onEpisTableUpdate={this.handleEpisTable.bind(this)}  onRowDel={this.handleRowDel.bind(this)} epis={this.state.epis} filterText={this.state.filterText}/> {/*onRowAdd={this.handleAddEvent.bind(this)}*/}
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



export default TableEpis;
