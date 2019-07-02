import React from 'react';
//  
// import InputMask from 'react-input-mask';
// import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

class TableFuncionarios2 extends React.Component {
initialState = {
  employeesInitial: [],
  disableds: 0

}

state = {
  //  this.state.employees = [];
  // ...this.employeesInitial,
  // state : {},
  filterText : "",
  employees: this.props.lista

}

CountDisableds = () =>{ //para contar qntos funcionarios estao desabilitados e com isso eu tirar o css "inactive" de todos - o nº de desabilitados
  var j = 0;
  this.state.employees.forEach(i => {
    if(i.ativo === false){
      j ++;
    }
  });
  this.initialState.disableds = j;  
}


componentWillMount(){
  console.log('WILL MOUNT');
  this.initialState.employeesInitial = JSON.parse(JSON.stringify(this.props.lista));
}


componentWillUpdate = (nextProps) =>{
  console.log('WILL UPDATE');
  
  this.CountDisableds(); //contar os desabilitados a cada atualização

  if(JSON.stringify(this.initialState.employeesInitial) !== JSON.stringify(this.state.employees) && this.props.lista === nextProps.lista){
    document.getElementById("table-buttons").style.display = "flex";
     
    var btns = document.getElementsByClassName("delete-buttons");
    for(var i = 0; i < btns.length; i++) {
      btns[i].disabled = true;
    }
  }
  else{
    document.getElementById("table-buttons").style.display = "none";
  }
}


  componentWillReceiveProps(nextProps){    
    console.log('WILL RECEIVE PROPS');
    if(this.state.employees !== nextProps.lista){
      this.setState({ employees : nextProps.lista});   
    }     
    if(this.initialState.employeesInitial !== nextProps.lista){
      this.initialState.employeesInitial = JSON.parse(JSON.stringify(nextProps.lista));
    }
  }


  handleUserInput(filterText) {
    this.setState({filterText: filterText});
  };


  handleRowDel(employee) {
    if(employee.ativo === false){ //se o funcionario eh inativo reativar
      var employee2 = [];
      var index = this.state.employees.indexOf(employee);
      this.state.employees.splice(index, 1);
      employee.ativo = true;
      var array = employee2.concat(employee, this.state.employees);

      this.setState(
        {employees: array},
        () => {
          var lastEmp = document.getElementsByClassName("eachRow")[0];
          lastEmp.classList.remove("inactive");
        }
      );    
    }
    else{ //senao ele é ativo entao desativar
      var index2 = this.state.employees.indexOf(employee);
      this.state.employees.splice(index2, 1);
      
      employee.ativo = false;
      var array2 = this.state.employees.concat(employee);
      
      this.setState(
        {employees: array2},
        () => {
          var arrayLength = document.getElementsByClassName("eachRow").length;
          var lastEmp = document.getElementsByClassName("eachRow")[arrayLength-1];
          lastEmp.classList.add("inactive");
        }
      ); 
    }
  };


  handleProductTable(evt) {
    console.log("ará!")
    var item = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value
    };
    var employees = this.state.employees.slice();
    var newProducts = employees.map(function(employee) {
      for (var key in employee) {
        if (key === item.name && employee.id === item.id) {
          employee[key] = item.value;
        }
      }
      return employee;
    });
    this.setState({employees:newProducts});
  };


  CancelarEditar = () =>{      
    this.setState(
      {employees : JSON.parse(JSON.stringify(this.initialState.employeesInitial))},
      () => {
        document.getElementById("table-buttons").style.display = "none";    
      }
    )    
  }


  SalvarEditar = () =>{
    document.getElementById("table-buttons").style.display = "none"; 

    var btns = document.getElementsByClassName("delete-buttons");
    for(var i = 0; i < btns.length; i++) {
      btns[i].disabled = false;
    }
    
    // $('#progress-bar').text('Dados salvos com sucesso!');
    document.querySelector("#progress-bar").textContent = "Dados salvos com sucesso!";

    // $('#progress-bar').fadeIn(2000);
    // setTimeout(function() {$('#progress-bar').fadeOut(2000);}, 2000); //arrumar js
  }

  

  render() {
    
    return (
      <div className="panel">        
        <div className="panel-heading d-flex justify-content-between align-items-center thead-dark">
          <h6 className="text-left mb-0"><FontAwesome name="user"/>Funcionários({this.state.employees.length})</h6>
          
          <div className="d-nonin" id="table-buttons">      
            <button type="button" onClick={this.CancelarEditar} className="btn btn-danger mr-2" > {/*data-dismiss="modal"*/}
             <FontAwesome name="times"/>Cancelar
            </button>
            <button onClick={this.SalvarEditar} type="submit" className="btn btn-primary" >
             <FontAwesome name="check"/>Salvar
            </button>
          </div>
          
          <div className="d-flex align-items-center">
            <FontAwesome name="search"/>
            <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)}/>
          </div>
        </div>
        <div className="panel-body">
          <ProductTable onEmployeeTableUpdate={this.handleProductTable.bind(this)}  onRowDel={this.handleRowDel.bind(this)} employees={this.state.employees} filterText={this.state.filterText}/> {/*onRowAdd={this.handleAddEvent.bind(this)}*/}
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
        <input className="form-control btn-sm" type="text" placeholder="Search..." value={this.props.filterText} ref="filterTextInput" onChange={this.handleChange.bind(this)}/>
      </div>
    );
  }
}




class ProductTable extends React.Component {

  render() {

    var onEmployeeTableUpdate = this.props.onEmployeeTableUpdate;
    var rowDel = this.props.onRowDel;
    var filterText = this.props.filterText;
    var employee = this.props.employees.map(function(employee) {
      if (employee.nome.indexOf(filterText) === -1 && employee.sexo.indexOf(filterText) === -1 && employee.rg.indexOf(filterText) === -1
          && employee.cpf.indexOf(filterText) === -1 && employee.email.indexOf(filterText) === -1 && employee.gh.indexOf(filterText) === -1
          && employee.cc.indexOf(filterText) === -1 && employee.turno.indexOf(filterText) === -1 ) {
        return null;
      }
      return (<ProductRow  onEmployeeTableUpdate={onEmployeeTableUpdate} employee={employee} onDelEvent={rowDel.bind(this)} key={employee.id}/>)
    });
    return (
      <div>      

    {/* <button type="button" onClick={this.props.onRowAdd} className="btn btn-success pull-right">Add</button>  */}
        <table id="table_funcionarios" className="w-100 mb-0">
          <thead className="">
            <tr>
              <th>Nome</th>
              <th>RG</th>
              <th>CPF</th>
              <th>Email</th>
              <th>GH</th>
              <th>CC</th>
              <th>Turno</th>
              <th>Sexo</th>
              <th>Ativo</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {employee}
          </tbody>
        </table>
      </div>
    );
  }
}







class ProductRow extends React.Component {
  onDelEvent() {
    this.props.onDelEvent(this.props.employee);
  }

  VerificarAtivosRow = () =>{  //verificar qndo o funcionarios vair ser ativo ou não, os não ativos colocar o css "inactive"
      if(this.props.employee.ativo === false){
        return "inactive";
      }
      else{
        return "active";
      }
    }
  
  render() {
    
    return (
      <tr className={"eachRow " + this.VerificarAtivosRow()}>
        <EditableCell onEmployeeTableUpdate={this.props.onEmployeeTableUpdate} cellData={{
          "type": "nome",
          value: this.props.employee.nome,
          id: this.props.employee.id
        }}/>
        <EditableCell onEmployeeTableUpdate={this.props.onEmployeeTableUpdate} cellData={{
          type: "rg",
          value: this.props.employee.rg,
          id: this.props.employee.id
        }}/>
        <EditableCell onEmployeeTableUpdate={this.props.onEmployeeTableUpdate} cellData={{
          type: "cpf",
          value: this.props.employee.cpf,
          id: this.props.employee.id
        }}/>
        <EditableCell onEmployeeTableUpdate={this.props.onEmployeeTableUpdate} cellData={{
          type: "email",
          value: this.props.employee.email,
          id: this.props.employee.id
        }}/>
        <EditableCell onEmployeeTableUpdate={this.props.onEmployeeTableUpdate} cellData={{
          type: "gh",
          value: this.props.employee.gh,
          id: this.props.employee.id
        }}/>
        <EditableCell onEmployeeTableUpdate={this.props.onEmployeeTableUpdate} cellData={{
          type: "cc",
          value: this.props.employee.cc,
          id: this.props.employee.id
        }}/>
        <EditableCell onEmployeeTableUpdate={this.props.onEmployeeTableUpdate} cellData={{
          type: "turno",
          value: this.props.employee.turno,
          id: this.props.employee.id
        }}/>
        <EditableCell onEmployeeTableUpdate={this.props.onEmployeeTableUpdate} cellData={{
          type: "sexo",
          value: this.props.employee.sexo,
          id: this.props.employee.id
        }}/>
        <EditableCell onEmployeeTableUpdate={this.props.onEmployeeTableUpdate} cellData={{
          type: "ativo",
          value: this.props.employee.ativo,
          id: this.props.employee.id
        }}/>
        <td className="del-cell">          
          <div className="del-btn form-control c-pointer delete-buttons" onClick={this.onDelEvent.bind(this)}>
            <FontAwesome name="trash-alt"/>
          </div>
          <div className="del-btn form-control c-pointer delete-buttons" onClick={this.onDelEvent.bind(this)}>
            <FontAwesome name="user-plus"/>
          </div>
        </td>
      </tr>
    );
  }
}







class EditableCell extends React.Component {
  render() {
    return (
      <td>
        <input className="form-control" type='text' name={this.props.cellData.type} id={this.props.cellData.id} value={this.props.cellData.value} onChange={this.props.onEmployeeTableUpdate}/>
      </td>
    );
  }
}





export default TableFuncionarios2;

