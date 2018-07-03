import React from 'react';

import $ from 'jquery'; 
 
// import PropTypes from 'prop-types';

//descobrir pq n está editando o campo

class TableEpis2 extends React.Component {
initialState = {
  episInitialD: [],
  episInitialA: [],
  action: ''
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
componentDidMount(){
  
  this.changeArrowAssign();
}

changeArrowAssign = () =>{
    var lengthD = this.state.episDisponiveis.length;
    var lengthA = this.state.episAtribuidos.length;
    var length = lengthA + lengthD;
    console.log(document.getElementsByClassName("eachRow"));
    console.log(document.getElementsByClassName("eachRow")[length-1]);

    for (var i = length-1; i > lengthD-1; i--){
      document.getElementsByClassName("eachRow")[i].lastChild.firstChild.classList.add("rotated");
    }
}

componentWillUpdate(nextProps){  
  console.log('WUP');
  if(JSON.stringify(this.initialState.episInitialD) !== JSON.stringify(this.state.episDisponiveis)  && this.props.listaD == nextProps.listaD){
    document.getElementById("table-edit-buttonsD").style.display = "flex";
    // alert('1');
  }
  else{
    document.getElementById("table-edit-buttonsD").style.display = "none";
    // alert('2');
  }

  if(JSON.stringify(this.initialState.episInitialA) !== JSON.stringify(this.state.episAtribuidos)  && this.props.listaA == nextProps.listaA){
    document.getElementById("table-edit-buttonsA").style.display = "flex";
    // alert('3');
  }
  else{
    document.getElementById("table-edit-buttonsA").style.display = "none";
    // alert('4');
  }
}

componentWillReceiveProps(nextProps){    
  if(this.state.episDisponiveis !== nextProps.listaD){
    this.setState({ episDisponiveis : nextProps.listaD});   
  }     
  if(this.initialState.episInitialD !== nextProps.listaD){
    this.initialState.episInitialD = JSON.parse(JSON.stringify(nextProps.listaD));
  }

      
  if(this.state.episAtribuidos !== nextProps.listaA){
    this.setState({ episAtribuidos : nextProps.listaA});   
  }     
  if(this.initialState.episInitialA !== nextProps.listaA){
    this.initialState.episInitialA = JSON.parse(JSON.stringify(nextProps.listaA));
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
  document.getElementById("table-delete-buttonsD").style.display = "flex";
};
handleRowDelA(epi) {
  var index = this.state.episAtribuidos.indexOf(epi);
  this.state.episAtribuidos.splice(index, 1);
  this.setState(this.state.episAtribuidos);
  document.getElementById("table-delete-buttonsA").style.display = "flex";
};






disableChangeBtn = () =>{
  var btns = document.getElementsByClassName("change-btn"); //desabilitar botao de change
  for(var i = 0; i < btns.length; i++) {
    btns[i].disabled = true;
  } 
  var btns = document.getElementsByClassName("del-btn"); //desabilitar botao de excluir
  for(var i = 0; i < btns.length; i++) {
    btns[i].disabled = true;
  } 
}
enableChangeBtn = () =>{
  var btns = document.getElementsByClassName("change-btn"); //habilitar botao de change
  for(var i = 0; i < btns.length; i++) {
    btns[i].disabled = false;
  }  
  var btns = document.getElementsByClassName("del-btn"); //habilitar botao de excluir
  for(var i = 0; i < btns.length; i++) {
    btns[i].disabled = false;
  } 
}













handleRowAssignD(epi) {
  var arrayD = this.state.episDisponiveis;
  var arrayA = this.state.episAtribuidos;
  var index = arrayD.indexOf(epi);
  var achouIgual = false; //variavel aux pra logica de ver se tem outro registro igual na outra tabela
  
  var estoqueInicial = arrayD[index].estoque;   //estoque inicial
  var assignedEpi = Object.assign({}, arrayD[index]);  //seleciona o obj escolhido

  var assignedEpiHTML = document.getElementsByClassName("eachRow")[index];  //seleciona o html do epi escolhido
  var qntdPassada = assignedEpiHTML.lastChild.lastChild.firstChild.value; //pega o value da qntd passada digitada

  assignedEpiHTML.lastChild.lastChild.style.display = "none"; //esconder a qntd ok text e cancel
  assignedEpiHTML.lastChild.firstChild.style.display = "flex"; //mostrar botao d trocar d tabela
  
  if(assignedEpi.estoque > 0 && qntdPassada < assignedEpi.estoque) {    //se a qntd em estoque eh maior q a qntd passada
    
    arrayD[index].estoque = estoqueInicial - qntdPassada;      //ajustar o estoque D 
     
    arrayA.map((value) => {   //laço para varrer o outro array e ver se ja tem um registro com cod igual
      if(value.cod == assignedEpi.cod){  //se achar só adicionar no estoque da outra 
        value.estoque = parseInt(value.estoque) + parseInt(qntdPassada);          
        achouIgual = true;
        this.setState({episAtribuidos: arrayA});
      }
    });      
    if(achouIgual == false){  // se não cria um novo registro desse epi na outra
      assignedEpi.estoque = qntdPassada;  //atualiza para a qntd digitada antes de juntar com o arrayA
      arrayA = arrayA.concat(assignedEpi);  //concatena o registro passado pro final do arrayA
      this.setState({episAtribuidos: arrayA});
    }    
  }
  else if(assignedEpi.estoque > 0){ //arrumar aqui
    arrayD.splice(index, 1);   //tirar do array
    this.setState({episDisponiveis: arrayD});

    arrayA.map((value) => {   //laço para varrer o outro array e ver se ja tem um registro com cod igual
      if(value.cod == assignedEpi.cod){  //se achar só adicionar no estoque da outra 
        value.estoque = parseInt(value.estoque) + parseInt(qntdPassada);          
        achouIgual = true;
      }
    });    
    if(achouIgual == false){  // se não cria um novo registro desse epi na outra
      arrayA = arrayA.concat(assignedEpi);  //concatena o registro passado pro final do arrayA
      this.setState({episAtribuidos: arrayA});
    }  
  }    
  this.enableChangeBtn(); //ao final da troca habilitar denovo os botoes  
  document.getElementById("table-assign-buttonsD").style.display = "flex";
};






handleRowAssignA(epi) { 
 var arrayD = this.state.episDisponiveis;
  var arrayA = this.state.episAtribuidos;
  var index = arrayA.indexOf(epi);
  var achouIgual = false; //variavel aux pra logica de ver se tem outro registro igual na outra tabela
  
  var estoqueInicial = arrayA[index].estoque;   //estoque inicial
  var assignedEpi = Object.assign({}, arrayA[index]);  //seleciona o obj escolhido

  var lengthD = this.state.episDisponiveis.length; //descobrir qntos registro tem na tabela de cima 
  var assignedEpiHTML = document.getElementsByClassName("eachRow")[index + lengthD];  //seleciona o html do epi escolhido
  var qntdPassada = assignedEpiHTML.lastChild.lastChild.firstChild.value; //pega o value da qntd passada digitada

  assignedEpiHTML.lastChild.lastChild.style.display = "none"; //esconder a qntd ok text e cancel
  assignedEpiHTML.lastChild.firstChild.style.display = "flex"; //mostrar botao d trocar d tabela
  
  if(assignedEpi.estoque > 0 && qntdPassada < assignedEpi.estoque) {    //se a qntd em estoque eh maior q a qntd passada
    
    arrayA[index].estoque = estoqueInicial - qntdPassada;      //ajustar o estoque A

    arrayD.map((value) => {   //laço para varrer o outro array e ver se ja tem um registro com cod igual
      if(value.cod == assignedEpi.cod){  //se achar só adicionar no estoque da outra 
        value.estoque = parseInt(value.estoque) + parseInt(qntdPassada);          
        achouIgual = true;
        this.setState({episDisponiveis: arrayD});
      }
    });

    if(achouIgual == false){  // se não cria um novo registro desse epi na outra
      assignedEpi.estoque = qntdPassada;  //atualiza para a qntd digitada antes de juntar com o arrayA
      arrayD = arrayD.concat(assignedEpi);  //concatena o registro passado pro final do arrayA
      this.setState({episDisponiveis: arrayD});
    }  
  }

  else if(assignedEpi.estoque > 0){
    arrayA.splice(index, 1);   //tirar do array
    this.setState({episAtribuidos: arrayA});

    arrayD.map((value) => {   //laço para varrer o outro array e ver se ja tem um registro com cod igual
      if(value.cod == assignedEpi.cod){  //se achar só adicionar no estoque da outra 
        value.estoque = parseInt(value.estoque) + parseInt(qntdPassada);          
        achouIgual = true;
      }
    });
    
    if(achouIgual == false){  // se não cria um novo registro desse epi na outra
      arrayD = arrayD.concat(assignedEpi);  //concatena o registro passado pro final do arrayA
      this.setState({episDisponiveis: arrayD});
    }  
  }    
  this.enableChangeBtn(); //ao final da troca habilitar denovo os botoes  
  document.getElementById("table-assign-buttonsA").style.display = "flex";
};












handleRowCancelAssignD(epi) { 
  var index = this.state.episDisponiveis.indexOf(epi);
  var chosenEpi = document.getElementsByClassName("eachRow")[index];
  chosenEpi.lastChild.lastChild.style.display = "none"; //esconder a qntd ok e cancel
  chosenEpi.lastChild.firstChild.style.display = "flex"; //mostrar botao d trocar d tabela

  this.enableChangeBtn();
};
handleRowCancelAssignA(epi) {  
  var index = this.state.episAtribuidos.indexOf(epi);
  var lengthD = this.state.episDisponiveis.length;
  var chosenEpi = document.getElementsByClassName("eachRow")[index + lengthD];
  chosenEpi.lastChild.lastChild.style.display = "none"; //mostrar o text e btn OK
  chosenEpi.lastChild.firstChild.style.display = "flex"; //esconder botao d trocar d tabela

  this.enableChangeBtn();
};


handleRowChangeButtonD(epi) {
  var index = this.state.episDisponiveis.indexOf(epi);
  var chosenEpi = document.getElementsByClassName("eachRow")[index];
  chosenEpi.lastChild.lastChild.style.display = "flex"; //mostrar o text e btn OK
  chosenEpi.lastChild.firstChild.style.display = "none"; //esconder botao d trocar d tabela

  this.disableChangeBtn();
};
handleRowChangeButtonA(epi) {  
  var index = this.state.episAtribuidos.indexOf(epi);
  var lengthD = this.state.episDisponiveis.length;
  var chosenEpi = document.getElementsByClassName("eachRow")[index + lengthD];
  chosenEpi.lastChild.lastChild.style.display = "flex"; //mostrar o text e btn OK
  chosenEpi.lastChild.firstChild.style.display = "none"; //esconder botao d trocar d tabela

 this.disableChangeBtn();
};


handleEpisTableD(evt) {  
  console.log('HET D');
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
  console.log('HET A');
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


CancelarDeletarD = () =>{      
  this.setState(
    {episDisponiveis : JSON.parse(JSON.stringify(this.initialState.episInitialD))},
    () => document.getElementById("table-delete-buttonsD").style.display = "none"
  );  
}


CancelarAtribuirD = () =>{      
  this.setState(
    {
      episDisponiveis : JSON.parse(JSON.stringify(this.initialState.episInitialD)),
      episAtribuidos : JSON.parse(JSON.stringify(this.initialState.episInitialA))
    },
    () => document.getElementById("table-assign-buttonsD").style.display = "none"
  );
}

CancelarEditarD = () =>{      
  this.setState(
    {episDisponiveis : JSON.parse(JSON.stringify(this.initialState.episInitialD))},
    () => document.getElementById("table-edit-buttonsD").style.display = "none"
  );  
}

CancelarDeletarA = () =>{      
  this.setState(
    {episAtribuidos : JSON.parse(JSON.stringify(this.initialState.episInitialA))},
    () => document.getElementById("table-delete-buttonsA").style.display = "none"
  );
}
CancelarAtribuirA = () =>{      
  this.setState(
    {
      episDisponiveis : JSON.parse(JSON.stringify(this.initialState.episInitialD)),
      episAtribuidos : JSON.parse(JSON.stringify(this.initialState.episInitialA))
    },
    () => document.getElementById("table-assign-buttonsA").style.display = "none"
  );
}
CancelarEditarA = () =>{      
  this.setState(
    {episAtribuidos : JSON.parse(JSON.stringify(this.initialState.episInitialA))},
    () => document.getElementById("table-edit-buttonsA").style.display = "none"
  );  
}



SalvarDeletarD = () =>{
  document.getElementById("table-delete-buttonsD").style.display = "none";

  // var EmpresaSelecionada = document.getElementById("select-empresas").value;
    
    // fetch('http://192.168.10.30/v1/cliente/{id}/empresas', {
    //   method: 'get',
    //   body: JSON.stringify(),
    //   headers: {
      //     'content-type': 'application/json'
      //   }
      // })
      // .then(response => {
        //   response.json().then(data => {
          //     if (data.success == true) {   
        //        this.setState({ arrayEmpresas: data });   
    //          } 
    //          else {
      //       alert(data.message+' - '+data.data[0].message);    
    //     }
    //   });
    // })
    // .catch(err => {
    //   console.error('Failed retrieving information', err);
    //   alert(err);
    // });
    
    $('#progress-bar').text('Epi D excluido com sucesso !');
    $('#progress-bar').fadeIn(2000);
    setTimeout(function() {$('#progress-bar').fadeOut(2000);}, 2000); 
}

SalvarAtribuirD = () =>{
  console.log('foi asdasds');
  document.getElementById("table-assign-buttonsD").style.display = "none";

  // var EmpresaSelecionada = document.getElementById("select-empresas").value;
    
    // fetch('http://192.168.10.30/v1/cliente/{id}/empresas', {
    //   method: 'get',
    //   body: JSON.stringify(),
    //   headers: {
      //     'content-type': 'application/json'
      //   }
      // })
      // .then(response => {
        //   response.json().then(data => {
          //     if (data.success == true) {   
        //        this.setState({ arrayEmpresas: data });   
    //          } 
    //          else {
      //       alert(data.message+' - '+data.data[0].message);    
    //     }
    //   });
    // })
    // .catch(err => {
    //   console.error('Failed retrieving information', err);
    //   alert(err);
    // });
    
    $('#progress-bar').text('Epi D atribuído com sucesso 2!');
    $('#progress-bar').fadeIn(2000);
    setTimeout(function() {$('#progress-bar').fadeOut(2000);}, 2000); 
}

SalvarEditarD = () =>{
  document.getElementById("table-edit-buttonsD").style.display = "none";

  // var EmpresaSelecionada = document.getElementById("select-empresas").value;
    
    // fetch('http://192.168.10.30/v1/cliente/{id}/empresas', {
    //   method: 'get',
    //   body: JSON.stringify(),
    //   headers: {
      //     'content-type': 'application/json'
      //   }
      // })
      // .then(response => {
        //   response.json().then(data => {
          //     if (data.success == true) {   
        //        this.setState({ arrayEmpresas: data });   
    //          } 
    //          else {
      //       alert(data.message+' - '+data.data[0].message);    
    //     }
    //   });
    // })
    // .catch(err => {
    //   console.error('Failed retrieving information', err);
    //   alert(err);
    // });
    
    $('#progress-bar').text('Epi D editado com sucesso!');
    $('#progress-bar').fadeIn(2000);
    setTimeout(function() {$('#progress-bar').fadeOut(2000);}, 2000); 
}


SalvarDeletarA = () =>{
  document.getElementById("table-delete-buttonsA").style.display = "none";
    
  $('#progress-bar').text('Epi A excluído com sucesso!');
  $('#progress-bar').fadeIn(2000);
  setTimeout(function() {$('#progress-bar').fadeOut(2000);}, 2000); 
}

SalvarAtribuirA = () =>{
  document.getElementById("table-assign-buttonsA").style.display = "none";
    
  $('#progress-bar').text('Epi A atribuído com sucesso2!');
  $('#progress-bar').fadeIn(2000);
  setTimeout(function() {$('#progress-bar').fadeOut(2000);}, 2000); 
}

SalvarEditarA = () =>{
  document.getElementById("table-edit-buttonsA").style.display = "none";

  // var EmpresaSelecionada = document.getElementById("select-empresas").value;
    
    // fetch('http://192.168.10.30/v1/cliente/{id}/empresas', {
    //   method: 'get',
    //   body: JSON.stringify(),
    //   headers: {
      //     'content-type': 'application/json'
      //   }
      // })
      // .then(response => {
        //   response.json().then(data => {
          //     if (data.success == true) {   
        //        this.setState({ arrayEmpresas: data });   
    //          } 
    //          else {
      //       alert(data.message+' - '+data.data[0].message);    
    //     }
    //   });
    // })
    // .catch(err => {
    //   console.error('Failed retrieving information', err);
    //   alert(err);
    // });
    
    $('#progress-bar').text('Epi A editado com sucesso!');
    $('#progress-bar').fadeIn(2000);
    setTimeout(function() {$('#progress-bar').fadeOut(2000);}, 2000); 
}





  render() {    
    return (
      <div>
        <div className="panel">        
          <div className="panel-heading d-flex justify-content-between align-items-center">
            <h6 className="text-left mb-0"><i className="fa fa-user pr-2" aria-hidden="true"></i>Epi's Disponíveis({this.state.episDisponiveis.length})</h6>
            
            <div className="d-nonin" id="table-delete-buttonsD">      
              <button type="button" onClick={this.CancelarDeletarD} className="btn btn-danger mr-2" > {/*data-dismiss="modal"*/}
                <i className="fa fa-times pr-2 " aria-hidden="true" />Cancelar Deletar D
              </button>
              <button onClick={this.SalvarDeletarD} type="submit" className="btn btn-primary" >
                <i className="fa fa-check pr-2 " aria-hidden="true"/>Salvar Deletar D
              </button>
            </div>
            
            <div className="d-nonin" id="table-assign-buttonsD">      
              <button type="button" onClick={this.CancelarAtribuirD} className="btn btn-danger mr-2" > {/*data-dismiss="modal"*/}
                <i className="fa fa-times pr-2 " aria-hidden="true" />Cancelar Atribuir D
              </button>
              <button onClick={this.SalvarAtribuirD} type="submit" className="btn btn-primary" >
                <i className="fa fa-check pr-2 " aria-hidden="true"/>Salvar Atribuir D
              </button>
            </div>

            <div className="d-nonin" id="table-edit-buttonsD">      
              <button type="button" onClick={this.CancelarEditarD} className="btn btn-danger mr-2" > {/*data-dismiss="modal"*/}
                <i className="fa fa-times pr-2 " aria-hidden="true" />Cancelar Editar D
              </button>
              <button onClick={this.SalvarEditarD} type="submit" className="btn btn-primary" >
                <i className="fa fa-check pr-2 " aria-hidden="true"/>Salvar Editar D
              </button>
            </div>
            
            <div className="d-flex align-items-center">
              <i class="fas fa-search fa-lg mr-2"></i>
              <SearchBar filterText={this.state.filterTextD} onUserInput={this.handleUserInputD.bind(this)}/>
            </div>
          </div>
          <div className="panel-body">
            <EpisTable onEpisTableUpdate={this.handleEpisTableD.bind(this)}  onRowDel={this.handleRowDelD.bind(this)} onRowAssign={this.handleRowAssignD.bind(this)} onRowCancelAssign={this.handleRowCancelAssignD.bind(this)} onRowChangeButton={this.handleRowChangeButtonD.bind(this)} epis={this.state.episDisponiveis} filterText={this.state.filterTextD}/> {/*onRowAdd={this.handleAddEvent.bind(this)}*/}
          </div>
        </div>


        <div className="panel mt-5">        
          <div className="panel-heading d-flex justify-content-between align-items-center">
            <h6 className="text-left mb-0"><i className="fa fa-user pr-2" aria-hidden="true"></i>Epi's Atribuidos({this.state.episAtribuidos.length})</h6>
            
            <div className="d-nonin" id="table-delete-buttonsA">      
              <button type="button" onClick={this.CancelarDeletarA} className="btn btn-danger mr-2" > {/*data-dismiss="modal"*/}
                <i className="fa fa-times pr-2 " aria-hidden="true" />Cancelar Delete A
              </button>
              <button onClick={this.SalvarDeletarA} type="submit" className="btn btn-primary" >
                <i className="fa fa-check pr-2 " aria-hidden="true"/>Salvar Delete A
              </button>
            </div>
            
            <div className="d-nonin" id="table-assign-buttonsA">      
              <button type="button" onClick={this.CancelarAtribuirA} className="btn btn-danger mr-2" > {/*data-dismiss="modal"*/}
                <i className="fa fa-times pr-2 " aria-hidden="true" />Cancelar Atribuir A
              </button>
              <button onClick={this.SalvarAtribuirA} type="submit" className="btn btn-primary" >
                <i className="fa fa-check pr-2 " aria-hidden="true"/>Salvar Atribuir A
              </button>
            </div>

            <div className="d-nonin" id="table-edit-buttonsA">      
              <button type="button" onClick={this.CancelarEditarA} className="btn btn-danger mr-2" > {/*data-dismiss="modal"*/}
                <i className="fa fa-times pr-2 " aria-hidden="true" />Cancelar Editar A
              </button>
              <button onClick={this.SalvarEditarA} type="submit" className="btn btn-primary" >
                <i className="fa fa-check pr-2 " aria-hidden="true"/>Salvar Editar A
              </button>
            </div>
            
            <div className="d-flex align-items-center">
              <i class="fas fa-search fa-lg mr-2"></i>
              <SearchBar filterText={this.state.filterTextA} onUserInput={this.handleUserInputA.bind(this)}/>
            </div>
          </div>
          <div className="panel-body">
            <EpisTable onEpisTableUpdate={this.handleEpisTableA.bind(this)}  onRowDel={this.handleRowDelA.bind(this)} onRowAssign={this.handleRowAssignA.bind(this)} onRowCancelAssign={this.handleRowCancelAssignA.bind(this)} onRowChangeButton={this.handleRowChangeButtonA.bind(this)} epis={this.state.episAtribuidos} filterText={this.state.filterTextA}/> {/*onRowAdd={this.handleAddEvent.bind(this)}*/}
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
    var rowAssign = this.props.onRowAssign;
    var rowCancelAssign = this.props.onRowCancelAssign;
    var rowChangeButton = this.props.onRowChangeButton;
    var filterText = this.props.filterText;
    var epi = this.props.epis.map(function(epi) {
      if (epi.nome.indexOf(filterText) === -1) {
        return;
      }
      return (<TableRow  onEpisTableUpdate={onEpisTableUpdate} epi={epi} onDelEvent={rowDel.bind(this)} onAssignEvent={rowAssign.bind(this)} onCancelAssignEvent={rowCancelAssign.bind(this)} onChangeButtonEvent={rowChangeButton.bind(this)} key={epi.id}/>)
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
  onAssignEvent() {
    this.props.onAssignEvent(this.props.epi);
  }  
  onCancelAssignEvent() {
    this.props.onCancelAssignEvent(this.props.epi);
  }
  onChangeButtonEvent() {
    this.props.onChangeButtonEvent(this.props.epi);
  }

  render() {
    return (
      <tr className="eachRow">
        <EditableCell onEpisTableUpdate={this.props.onEpisTableUpdate} cellData={{
          type: "cod",
          value: this.props.epi.cod,
          id: this.props.epi.id
        }}/>
        <EditableCell onEpisTableUpdate={this.props.onEpisTableUpdate} cellData={{
          type: "nome",
          value: this.props.epi.nome,
          id: this.props.epi.id
        }}/>
        <EditableCell onEpisTableUpdate={this.props.onEpisTableUpdate} cellData={{
          type: "descricao",
          value: this.props.epi.descricao,
          id: this.props.epi.id
        }}/>
        <EditableCell onEpisTableUpdate={this.props.onEpisTableUpdate} cellData={{
          type: "validade",
          value: this.props.epi.validade,
          id: this.props.epi.id
        }}/>
        <EditableCell onEpisTableUpdate={this.props.onEpisTableUpdate} cellData={{
          type: "minEstoque",
          value: this.props.epi.minEstoque,
          id: this.props.epi.id
        }}/>
        <EditableCell onEpisTableUpdate={this.props.onEpisTableUpdate} cellData={{
          type: "estoque",
          value: this.props.epi.estoque,
          id: this.props.epi.id
        }}/>
        <EditableCell onEpisTableUpdate={this.props.onEpisTableUpdate} cellData={{
          type: "maxEstoque",
          value: this.props.epi.maxEstoque,
          id: this.props.epi.id
        }}/>
        <EditableCell onEpisTableUpdate={this.props.onEpisTableUpdate} cellData={{
          type: "ca",
          value: this.props.epi.ca,
          id: this.props.epi.id
        }}/>
        <EditableCell onEpisTableUpdate={this.props.onEpisTableUpdate} cellData={{
          type: "dataArmazenamento",
          value: this.props.epi.dataArmazenamento,
          id: this.props.epi.id
        }}/>
        <EditableCell onEpisTableUpdate={this.props.onEpisTableUpdate} cellData={{
          type: "dataDevolucao",
          value: this.props.epi.dataDevolucao,
          id: this.props.epi.id
        }}/>
        <EditableCell onEpisTableUpdate={this.props.onEpisTableUpdate} cellData={{
          type: "motivoDevolucao",
          value: this.props.epi.motivoDevolucao,
          id: this.props.epi.id
        }}/>
        <EditableCell onEpisTableUpdate={this.props.onEpisTableUpdate} cellData={{
          type: "cor",
          value: this.props.epi.cor,
          id: this.props.epi.id
        }}/>
        <EditableCell onEpisTableUpdate={this.props.onEpisTableUpdate} cellData={{
          type: "fatorReducao",
          value: this.props.epi.fatorReducao,
          id: this.props.epi.id
        }}/>
        <td>
          <div className="del-btn form-control" onClick={this.onDelEvent.bind(this)}>
            <i class="far fa-trash-alt"></i>
          </div>
        </td>
        <td>
          <div className="change-btn form-control" onClick={this.onChangeButtonEvent.bind(this)}>
            <i className="fas fa-arrow-down "></i>
          </div>
          <div className="assign-btn d-nonin">          
            <input type="text" placeholder="Qntd..." className="input-qntd form-control"/> 
            <input type="button" onClick={this.onAssignEvent.bind(this)} value="OK" className="form-control"/>            
            <input type="button" onClick={this.onCancelAssignEvent.bind(this)} value="Cancelar" className="form-control"/>            
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
        <input className="form-control" type='text' name={this.props.cellData.type} id={this.props.cellData.id} value={this.props.cellData.value} onChange={this.props.onEpisTableUpdate}/>
      </td>
    );
  }
}



export default TableEpis2;
