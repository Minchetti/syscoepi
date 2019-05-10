import React from 'react';
// import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';
import $ from 'jquery'; 


class ModalCriarRequisicao extends React.Component {
  state = {
    ca: '',
    cod: '',
    empresa: '',
    cc: '',    
    gh: '',
    turno: '',
    funcionario: '',
    validade: '',
    quantidade: '',


    filterText : "",
    employees: this.props.lista


  };


  // componentWillMount(){
  //   this.initialState.employeesInitial = JSON.parse(JSON.stringify(this.props.lista));
  // }
  

  // componentWillReceiveProps(nextProps){    
  //   console.log('WILL RECEIVE PROPS');
  //   if(this.state.employees !== nextProps.lista){
  //     this.setState({ employees : nextProps.lista});   
  //   }     
  //   if(this.initialState.employeesInitial !== nextProps.lista){
  //     this.initialState.employeesInitial = JSON.parse(JSON.stringify(nextProps.lista));
  //   }
  // }


  handleUserInput(filterText) {
    this.setState({filterText: filterText});
  };
  
  
  onSubmit = e => {  
    e.preventDefault(); 
  $('#progress-bar').text('Empresa adicionada com sucesso!');
    $('#progress-bar').fadeIn(2000);
    setTimeout(function() {$('#progress-bar').fadeOut(2000);}, 2000); 
  // e.preventDefault(); 
  // fetch('http://192.168.10.30/v1/empresas', {
  //   method: 'POST',
  //   body: JSON.stringify(this.state),
  //   headers: {
  //     'content-type': 'application/json'
  //   }
  // })
  // .then(response => {
  //   response.json().then(data => {
  //     if (data.success === true) {
  //       alert(data.message);
  //       window.location.reload(true);
  //     } 
  //     else {
  //       alert(data.message+' - '+data.data[0].message);
  //     }
  //   })
  // })
  // .catch(err => {
  //   console.log('err');
  //   this.setState({ logged: false });
  // });
};

render(){
  return(
    <div className="p-4">
    <div className="modal fade" id="modal-criar-requisicao" tabIndex="-1" role="dialog" aria-labelledby="modal-criar-requisicao-label" >
      <div className="modal-dialog " role="document">
        <div className="modal-content z-9999">
          <div className="modal-header d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <i className="fas fa-user-plus fa-lg pr-2" />
              <h6 className="modal-title">Criar Nova Requisição</h6>
            </div>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span >&times;</span>
            </button>
          </div>


            <form id="form-usuario" onSubmit={this.onSubmit} className="" action=""> {/*method="post"*/}
          <div className="modal-body text-left d-flex flex-wrap">
           
                <div className="p-3 col-md-6">
                  <label htmlFor="input-ca"><i className="far fa-id-card fa-lg pr-2" ></i>CA</label>
                  <input type="text" value={this.state.ca} onChange={e => this.setState({ ca: e.target.value })} className="form-control" id="input-ca" name="input-ca" aria-describedby="caHelp" required />
                </div>
                <div className="p-3 col-md-6">  
                  <label htmlFor="input-cod"><i className="far fa-id-card fa-lg pr-2" ></i>Código</label>
                  <input type="text" value={this.state.cod} onChange={e => this.setState({ cod: e.target.value })} className="form-control" id="input-cod" name="input-cod" aria-describedby="codHelp" required />
                </div>
                <div className="p-3 col-md-6">
                    <label htmlFor="input-empresa"><i className="far fa-id-card fa-lg pr-2" ></i>Empresa</label>
                    <input type="text" value={this.state.empresa} onChange={e => this.setState({ empresa: e.target.value })} className="form-control" id="input-empresa" name="input-empresa" aria-describedby="empresaHelp" required />
                </div>
                <div className="p-3 col-md-6">
                    <label htmlFor="input-cc"><i className="far fa-id-card fa-lg pr-2" ></i>CC</label>
                    <input type="text" value={this.state.cc} onChange={e => this.setState({ cc: e.target.value })} className="form-control" id="input-cc" name="input-cc" aria-describedby="ccHelp" required />
                </div>

                <div className="p-3 col-md-6">  
                  <label htmlFor="input-cod"><i className="far fa-id-card fa-lg pr-2" ></i>CA</label>
                  <input type="text" value={this.state.cod} onChange={e => this.setState({ cod: e.target.value })} className="form-control" id="input-cod" name="input-cod" aria-describedby="codHelp" required />
                </div>





                <div className="panel">        
                    <div className="panel-heading d-flex justify-content-between align-items-center thead-dark">
                      <h6 className="text-left mb-0"><i className="fa fa-user pr-2" aria-hidden="true"></i>TESTE TESTE</h6>
                      
                      <div className="d-nonin" id="table-buttons">      
                        <button type="button" onClick={this.CancelarEditar} className="btn btn-danger mr-2" > {/*data-dismiss="modal"*/}
                          <i className="fa fa-times pr-2 " aria-hidden="true" />Cancelar
                        </button>
                        <button onClick={this.SalvarEditar} type="submit" className="btn btn-primary" >
                          <i className="fa fa-check pr-2 " aria-hidden="true"/>Salvar
                        </button>
                      </div>
                      
                      <div className="d-flex align-items-center">
                        <i className="fas fa-search  mr-2"></i>
                        <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)}/>
                      </div>
                    </div>
                    <div className="panel-body">
                      <ProductTable onEmployeeTableUpdate={this.handleProductTable.bind(this)}  onRowDel={this.handleRowDel.bind(this)} employees={this.state.employees} filterText={this.state.filterText}/> {/*onRowAdd={this.handleAddEvent.bind(this)}*/}
                    </div>
                  </div>







          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-danger mr-2" data-dismiss="modal">
              <i className="fa fa-times fa-lg pr-2"  />Fechar
            </button>
            <button id="btn-conta" type="submit" className="btn btn-primary" >
              <i className="fa fa-plus fa-lg pr-2" />Salvar 
            </button>
          </div>
            </form>        

        </div>
      </div>
    </div>


  </div> 

  );
  

}};










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
            <i class="far fa-trash-alt"></i>
          </div>
          <div className="del-btn form-control c-pointer delete-buttons" onClick={this.onDelEvent.bind(this)}>
            <i class="fas fa-user-plus"></i>
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













export default ModalCriarRequisicao;