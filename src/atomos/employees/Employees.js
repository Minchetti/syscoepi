import React from 'react';
// import TableFuncionarios from '../tablefuncionarios';
import TableFuncionarios2 from '../tablefuncionarios2';
// import Table2 from '../table2';
// import Table3 from '../table3';
// import Modal2 from '../modal1';
import Button from '../button';
import PreviewFuncionarios from '../previewfuncionarios';
import ModalAddFuncionario from '../modaladdfuncionario';
import * as Papa from 'papaparse';
import $ from 'jquery'; 
// import IdUsuarioLogado from '../login/Login.js';

// var data;


// let PreviewComponent;

// $(document).ready(function(){
//   $("#csv-file").change(handleFileSelect);
//   alert(IdUsuarioLogado);
// });



class Employees extends React.Component {
  state = {
    csv: null,
    arrayEmpresas: [],
    nomeEmpresaSelecionada: null,
    empresaSelecionadaId: '',
    listaFuncionarios: []
  };
  

  componentWillMount(){
    this.CarregarEmpresas();
    this.MontarSelect();     
    this.CarregarDadosEmpresa();   
  }
  componentDidMount(){
    this.CarregarFuncionarios();   

  }


  handleFileSelect(evt) {
    var file = evt.target.files[0];
    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      complete: function(csv) {
        this.setState({ csv });
        console.log(csv);
        
      $('#previewfuncionarios').show();
        // PreviewComponent = <PreviewFuncionarios lista={csv}/> 
      }.bind(this)
      });
  }


  CarregarEmpresas = () => {   
    // alert('CARREGAR EMPRESAS');
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

    //TESTE
    var data = [
      {cnpj:'123999123', nomeAmigavel:'Empresa 1', razaoSocial: 'Razao1', empresaId: '111' },    
      {cnpj:'123678123', nomeAmigavel:'Empresa 2', razaoSocial: 'Razao2', empresaId: '222' },
      {cnpj:'123123123', nomeAmigavel:'Empresa 3', razaoSocial: 'Razao3', empresaId: '39e6158e-f2eb-894d-3bb4-530504615482' }
    ]
    // var data = null;

    if(data !== null){
      this.setState({ arrayEmpresas: data });  
      this.setState({ nomeEmpresaSelecionada: data[0].nomeAmigavel });  
      this.setState({ empresaSelecionadaId: data[0].empresaId });  
      // alert("Lista de empresas carregados!");
    }
  }


  Callback = () =>{
    this.CarregarDadosEmpresa();
    this.CarregarFuncionarios();
  }




  CarregarDadosEmpresa = () => {   
    // alert('CARREGAR DADOS EMPRESA');
    // var EmpresaSelecionada = document.getElementById("select-empresas").value;
    // this.setState({ empresaSelecionada: EmpresaSelecionada });

    // var id = this.state.empresaSelecionada;
  
    // fetch('http://192.168.10.30/v1/empresa/{id}?', {
    //   method: 'get',
    //   body: JSON.stringify(),
    //   headers: {
      //     'content-type': 'application/json'
      //   }
      // })
      // .then(response => {
        //   response.json().then(data => {
          //     if (data.success == true) {   
        //        this.setState({ data });   
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

    var data = [
      {cnpj: '12345678998765', nomeAmigavel:'Empresa 1', razaoSocial: 'Razao1', empresaId: '111'} 
    ]
    var data2 = [
      {cnpj: '222222', nomeAmigavel:'Empresa 2', razaoSocial: 'Razao2', empresaId: '222'} 
    ]
    var data3 = [
      {cnpj: '333333', nomeAmigavel:'Empresa 3', razaoSocial: 'Razao3', empresaId: '39e6158ef2eb894d3bb4530504615482'} 
    ]
    if (this.state.nomeEmpresaSelecionada === 'Empresa 1' ){
      this.setState({ empresaSelecionadaId: data[0].empresaId });  
    }    
    if (this.state.nomeEmpresaSelecionada === 'Empresa 2' ){
      this.setState({ empresaSelecionadaId: data2[0].empresaId });  
    }
    if (this.state.nomeEmpresaSelecionada === 'Empresa 3' ){
      this.setState({ empresaSelecionadaId: data3[0].empresaId });  
    }
    // alert("Dados da empresa carregados!") ;
  }


  MontarSelect = () => this.state.arrayEmpresas.map((value) => { //.data
    return (
      <option>{value.nomeAmigavel}</option>
      )
  });



  CarregarFuncionarios = () => {   
    // alert('FUNCIONARIOS');
    // var EmpresaSelecionada = document.getElementById("select-empresas").value;
    
    // fetch('http://192.168.10.30/v1/?', {
    //   method: 'post',
    //   body: JSON.stringify(),
    //   headers: {
      //     'content-type': 'application/json'
      //   }
      // })
      // .then(response => {
        //   response.json().then(data => {
          //     if (data.success == true) {   
            
        //        this.setState({ listaFuncionarios });   
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
    // alert("Funcionarios carregados!") ;

    var data = [
      {id:"0123", nome: "Marcello Minchetti1", turno: "Noturno", sexo: "Masculino", rg: "16778405", cpf: "10770546617", gh: "123456", cc: "123456", email: "teste@gmail.com", ativo: false},   
      {id:"1123", nome: "Leandro Santos1", turno: "vespertino", sexo: "Masculino", rg: "16698405", cpf: "78970546617", gh: "123456", cc: "123456", email: "teste@gmail.com", ativo: true}, 
      {id:"2123", nome: "Luciano Braga1", turno: "Matutino", sexo: "Masculino", rg: "16771105", cpf: "11570546617", gh: "123456", cc: "123456", email: "teste@gmail.com", ativo: false},
      {id:"3123", nome: "Rodolfo Augusto1", turno: "Vespertino", sexo: "Masculino", rg: "16772605", cpf: "11980546617", gh: "123456", cc: "123456", email: "teste@gmail.com", ativo: true},    
      {id:"4123", nome: "Susi Ribeiro1", turno: "Noturno", sexo: "Feminino", rg: "16488405", cpf: "10770774617", gh: "123456", cc: "123456", email: "teste@gmail.com", ativo: true}
    ]
    var data2 = [
      {id:"0123", nome: "Marcello Minchetti2", turno: "Noturno", sexo: "Masculino", rg: "16778405", cpf: "10770546617", gh: "123456", cc: "123456", email: "teste@gmail.com", ativo: true},   
      {id:"1123", nome: "Leandro Santos2", turno: "vespertino", sexo: "Masculino", rg: "16698405", cpf: "78970546617", gh: "123456", cc: "123456", email: "teste@gmail.com", ativo: true}, 
      {id:"2123", nome: "Luciano Braga2", turno: "Matutino", sexo: "Masculino", rg: "16771105", cpf: "11570546617", gh: "123456", cc: "123456", email: "teste@gmail.com", ativo: true},
      {id:"3123", nome: "Rodolfo Augusto2", turno: "Vespertino", sexo: "Masculino", rg: "16772605", cpf: "11980546617", gh: "123456", cc: "123456", email: "teste@gmail.com", ativo: true},    
      {id:"4123", nome: "Susi Ribeiro2", turno: "Noturno", sexo: "Feminino", rg: "16488405", cpf: "10770774617", gh: "123456", cc: "123456", email: "teste@gmail.com", ativo: true}
    ]
    var data3 = [
      {id:"0123", nome: "Marcello Minchetti3", turno: "Noturno", sexo: "Masculino", rg: "16778405", cpf: "10770546617", gh: "123456", cc: "123456", email: "teste@gmail.com", ativo: true},   
      {id:"1123", nome: "Leandro Santos3", turno: "vespertino", sexo: "Masculino", rg: "16698405", cpf: "78970546617", gh: "123456", cc: "123456", email: "teste@gmail.com", ativo: true}, 
      {id:"2123", nome: "Luciano Braga3", turno: "Matutino", sexo: "Masculino", rg: "16771105", cpf: "11570546617", gh: "123456", cc: "123456", email: "teste@gmail.com", ativo: true},
      {id:"3123", nome: "Rodolfo Augusto3", turno: "Vespertino", sexo: "Masculino", rg: "16772605", cpf: "11980546617", gh: "123456", cc: "123456", email: "teste@gmail.com", ativo: true},    
      {id:"4123", nome: "Susi Ribeiro3", turno: "Noturno", sexo: "Feminino", rg: "16488405", cpf: "10770774617", gh: "123456", cc: "123456", email: "teste@gmail.com", ativo: true}
    ]    


    if (this.state.nomeEmpresaSelecionada === 'Empresa 1' ){

      var ativos = [];
      var inativos = [];
      var listaFuncionariosReorganizada;

      data.forEach(i => { //criar array pros inativos
        if(i.ativo === false){
          inativos = inativos.concat(i);
          console.log(inativos);
        }
      });

      data.forEach(i => { //criar array pros ativos
        if(i.ativo === true){
          ativos = ativos.concat(i);
          console.log(ativos);
        }
      });

      listaFuncionariosReorganizada = ativos.concat(inativos);  //setar lista na ordem certa pra lista de funcionarioss
      console.log(listaFuncionariosReorganizada);
      this.setState({ listaFuncionarios: listaFuncionariosReorganizada });  
    }    
    
    if (this.state.nomeEmpresaSelecionada === 'Empresa 2' ){
      // this.setState({ nomeEmpresaSelecionada: data2[0].nomeAmigavel });  
      this.setState({ listaFuncionarios: data2 });  
    }
    if (this.state.nomeEmpresaSelecionada === 'Empresa 3' ){
      // this.setState({ nomeEmpresaSelecionada: data3[0].nomeAmigavel }); 
      this.setState({ listaFuncionarios: data3 });   
    }


    // var data = null;

    // if(data != null){
    //   this.setState({ listaFuncionarios : data });
    // }  
  };


  PrimeiroFuncionario = () =>{
    const empresas = this.state.arrayEmpresas;

    if(empresas.length !== 0 ){
      return (
        <div className=" d-flex flex-column">              
        <div className="d-flex mb-3">
          <div className="col-md-4 d-flex align-items-center p-0">
              <select id="select-empresas" className="form-control btn-dark" onChange={e => this.setState({ nomeEmpresaSelecionada: e.target.value },this.Callback)}>
                {this.MontarSelect()}
              </select>
          </div>
          <div className="col-md-4 pl-2 pr-2 align-items-center ">
            <input type="file" className="btn btn-dark w-100 h-100" id="csv-file" name="files" onChange={this.handleFileSelect.bind(this)}/>
          </div>          
          <div className="col-md-4 p-0 align-items-center ">
            <Button class="btn-dark pr-2 w-100 h-100" icon="fa-plus fa-lg mr-2" text="Adicionar Funcionário" target="#modal-add-funcionario"/>
          </div>
        </div>
        
        {this.state.csv && <PreviewFuncionarios lista={this.state.csv} />}
        
        {/* {this.state.listaFuncionarios != 0 ? (<TableFuncionarios lista={this.state.listaFuncionarios}  />) : (<h1>TA VAZIO MANÉ</h1>) } */}
        {this.state.listaFuncionarios !== 0 ? (<TableFuncionarios2 lista={this.state.listaFuncionarios}  />) : (<h1>Cadastre seus primeiros funcionários</h1>) }
        {/* <TableFuncionarios2 /> */}


      </div>
      )
    }
    else{
      return(
        <div className="d-flex justify-content-center">
          <h2 className="mr-3">Nenhuma Empresa Cadastrada!</h2>
          {/* <Button class="btn-dark" icon="fa-plus fa-lg mr-1" text="Adicionar Empresa" target="#modal-criar-empresa"/> */}
        </div>
      )      
    }
  }

  Teste = () => {console.log(this.state);}
  
  render() {   

    
    return (
      
      <div id="Employees">
      {/* <div onClick={this.Teste}>AQUI</div> */}
      
        <h4 className="position-absolute m-auto l-0 r-0 t-15 text-white "><i className="fa fa-users mr-2" aria-hidden="true"></i>Funcionários</h4>  
               
        {this.PrimeiroFuncionario()}
        {/* <Modal2/>    */}
        {/* <ModalCriarEmpresa/>  */}
        
        <ModalAddFuncionario empresaId={this.state.empresaSelecionadaId} lista={this.state.listaFuncionarios} /> 


      </div>

    );
  }
}

export default Employees;






