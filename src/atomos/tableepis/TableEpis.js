import React from 'react';
import $ from 'jquery';
import InputMask from 'react-input-mask';
// import PropTypes from 'prop-types';

class TableEpis extends React.Component {
initialState = {
  employeesInitial: []
  // setInitial: false
}

state = {
  //  this.state.employees = [];
  // ...this.employeesInitial,
  // state : {},
  filterText : "",
  employees: this.props.lista
  // employees : [
  //   {
  //     id: 1,
  //     name: 'Jhon jhonson',
  //     rg: '48.449.652',
  //     cpf: '187.899.486-66',
  //     email: 'teste@teste.com',
  //     gh: '123123',
  //     turno: 'Noturno',
  //     sexo: 'masc'
  //   }, {
  //     id: 2,
  //     name: 'Jhon jhonson2',
  //     rg: '48.449.652',
  //     cpf: '187.899.486-66',
  //     email: 'teste@teste.com',
  //     gh: '123123',
  //     turno: 'Noturno',
  //     sexo: 'masc'
  //   }, {
  //     id: 3,
  //     name: 'Jhon jhonson3',
  //     rg: '48.449.652',
  //     cpf: '187.899.486-66',
  //     email: 'teste@teste.com',
  //     gh: '123123',
  //     turno: 'Noturno',
  //     sexo: 'masc'
  //   }, {
  //     id: 4,
  //     name: 'Jhon jhonson4',
  //     rg: '48.449.652',
  //     cpf: '187.899.486-66',
  //     email: 'teste@teste.com',
  //     gh: '123123',
  //     turno: 'Noturno',
  //     sexo: 'masc'
  //   }, {
  //     id: 5,
  //     name: 'Jhon jhonson5',
  //     rg: '48.449.652',
  //     cpf: '187.899.486-66',
  //     email: 'teste@teste.com',
  //     gh: '123123',
  //     turno: 'Noturno',
  //     sexo: 'masc'
  //   }, {
  //     id: 6,
  //     name: 'Jhon jhonson6',
  //     rg: '48.449.652',
  //     cpf: '187.899.486-66',
  //     email: 'teste@teste.com',
  //     gh: '123123',
  //     turno: 'Noturno',
  //     sexo: 'masc'
  //   }
  // ]

}

componentWillMount(){
  console.log('WILL MOUNT');
  this.initialState.employeesInitial = JSON.parse(JSON.stringify(this.props.lista));
}



componentWillUpdate(){
  console.log('WILL UPDATE');

  if(JSON.stringify(this.initialState.employeesInitial) !== JSON.stringify(this.state.employees)){
    console.log('MEU PAU');
    document.getElementById("table-buttons").style.display = "flex";
  }
  else{
    console.log('meu CU');
    document.getElementById("table-buttons").style.display = "none";
  }
}

// shouldComponentUpdate(nextProps, nextState) {
//   if (nextProps.lista === this.state.employees) {
//     return false;
//   }
//   else{
//     return true;
//   }
// }

  componentWillReceiveProps(nextProps){    
    console.log('WILL RECEIVE PROPS');
    if(this.state.employees !== nextProps.lista){
      this.setState({ employees : nextProps.lista});  
      // this.initialState.employeesInitial = nextProps.lista;  
    }     
    if(this.initialState.employeesInitial !== nextProps.lista){
      this.initialState.employeesInitial = JSON.parse(JSON.stringify(nextProps.lista));
    }
  }


  handleUserInput(filterText) {
    this.setState({filterText: filterText});
  };

  handleRowDel(employee) {
    var index = this.state.employees.indexOf(employee);
    this.state.employees.splice(index, 1);
    this.setState(this.state.employees);
  };

  // handleAddEvent(evt) {
  //   var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
  //   var employee = {
  //     id: id,
  //     nome: "",
  //     rg: "",
  //     cpf: "",
  //     email: "",
  //     gh: "",
  //     turno: "",
  //     sexo: ""
  //   }
  //   this.state.employees.push(employee);
  //   this.setState(this.state.employees);
  // }

  handleProductTable(evt) {
    var item = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value
    };
    var employees = this.state.employees.slice();
    var newProducts = employees.map(function(employee) {
      for (var key in employee) {
        if (key == item.name && employee.id == item.id) {
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
      () => document.getElementById("table-buttons").style.display = "none"
    );
  }

  SalvarEditar = () =>{
    alert('DADOS MODIFICADOS SALVOS');
  }

  
  teste = () =>{  
    console.log(this.state.employees);
    console.log(JSON.stringify(this.state.employees));
  }
  teste2 = () =>{  
    console.log(this.initialState.employeesInitial);
  }
  teste3 = () =>{  
    if(JSON.stringify(this.initialState.employeesInitial) === JSON.stringify(this.state.employees)){
      console.log("IGUAL");
    }
    else{
      console.log("DIFERENT")
    }
  }




  render() {
    
    return (
      <div className="panel">        
      <div onClick={this.teste}>TEST</div>
      <div onClick={this.teste2}>TEST2</div>
      <div onClick={this.teste3}>TEST3</div>
        <div className="panel-heading d-flex justify-content-between align-items-center">
          <h6 className="text-left mb-0"><i className="fa fa-user pr-2" aria-hidden="true"></i>Funcionários({this.state.employees.length})</h6>
          
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
        <input className="form-control" type="text" placeholder="Search..." value={this.props.filterText} ref="filterTextInput" onChange={this.handleChange.bind(this)}/>
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
      if (employee.nome.indexOf(filterText) === -1) {
        return;
      }
      return (<ProductRow  onEmployeeTableUpdate={onEmployeeTableUpdate} employee={employee} onDelEvent={rowDel.bind(this)} key={employee.id}/>)
    });
    return (
      <div>      

    {/* <button type="button" onClick={this.props.onRowAdd} className="btn btn-success pull-right">Add</button>  */}
        <table id="table_funcionarios" className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Nome</th>
              <th>rg</th>
              <th>cpf</th>
              <th>email</th>
              <th>gh</th>
              <th>turno</th>
              <th>sexo</th>
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
  
  render() {
    return (
      <tr className="eachRow">
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
          type: "turno",
          value: this.props.employee.turno,
          id: this.props.employee.id
        }}/>
        <EditableCell onEmployeeTableUpdate={this.props.onEmployeeTableUpdate} cellData={{
          type: "sexo",
          value: this.props.employee.sexo,
          id: this.props.employee.id
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
        <input className="form-control" type='text' name={this.props.cellData.type} id={this.props.cellData.id} value={this.props.cellData.value} onChange={this.props.onEmployeeTableUpdate}/>
      </td>
    );
  }
}





export default TableEpis;

/*
(The MIT License)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
