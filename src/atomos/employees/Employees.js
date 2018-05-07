import React from 'react';
import TableFuncionarios from '../tablefuncionarios';
import Table2 from '../table2';
import Table3 from '../table3';
import Modal2 from '../modal1';
import Button from '../button';
import PreviewFuncionarios from '../previewfuncionarios';
import ModalCriarEmpresa from '../modalcriarempresa';
import ModalAddFuncionario from '../modaladdfuncionario';
import * as Papa from 'papaparse';
import $ from 'jquery'; 
import IdUsuarioLogado from '../login/Login.js';

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
    empresaSelecionada: null,
    empresaSelecionadaId: '',
    listaFuncionarios: [
      {Id:"0123", Nome: "Marcello Minchetti", Turno: "Noturno", Sexo: "Masculino", RG: "16778405", CPF: "10770546617", GH: "123456", Email: "teste@gmail.com"},   
      {Id:"1123", Nome: "Leandro Santos", Turno: "vespertino", Sexo: "Masculino", RG: "16698405", CPF: "78970546617", GH: "123456", Email: "teste@gmail.com"}, 
      {Id:"2123", Nome: "Luciano Braga", Turno: "Matutino", Sexo: "Masculino", RG: "16771105", CPF: "11570546617", GH: "123456", Email: "teste@gmail.com"},
      {Id:"3123", Nome: "Rodolfo Augusto", Turno: "Vespertino", Sexo: "Masculino", RG: "16772605", CPF: "11980546617", GH: "123456", Email: "teste@gmail.com"},    
      {Id:"4123", Nome: "Susi Ribeiro", Turno: "Noturno", Sexo: "Feminino", RG: "16488405", CPF: "10770774617", GH: "123456", Email: "teste@gmail.com"}
    ]
  };
  


  componentWillMount(){
    this.CarregarEmpresas();
    this.MontarSelect();    
  }



  handleFileSelect(evt) {
    var file = evt.target.files[0];
    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      complete: function(csv) {
        this.setState({ csv });
        console.log(csv);
        
      $('#JAJA').show();
        // PreviewComponent = <PreviewFuncionarios lista={csv}/> 
      }.bind(this)
      });
  }





  CarregarEmpresas = () => {   
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
    this.setState({ arrayEmpresas: data });  
    this.setState({ empresaSelecionada: data[0] });  
    this.setState({ empresaSelecionadaId: data[0].empresaId });  
    // this.setState({ .: data[0].nomeAmigavel });  
    // alert("Lista de empresas carregados!");
  }




  CarregarDadosEmpresa = () => {   
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
    if (this.state.empresaSelecionada == 'Empresa 1' ){
      this.setState({ empresaSelecionadaId: data[0].empresaId });  
    }    
    if (this.state.empresaSelecionada == 'Empresa 2' ){
      this.setState({ empresaSelecionadaId: data2[0].empresaId });  
    }
    if (this.state.empresaSelecionada == 'Empresa 3' ){
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
  };
  Teste = () => {console.log(this.state);}
  
  render() {   

    this.CarregarFuncionarios();
    
    return (
      
      <div id="Employees">
      <div onClick={this.Teste}>AQUI</div>
      
        <h4 className="mt-2 mb-4"><i className="fa fa-users mr-2" aria-hidden="true"></i>Funcionários</h4>  
          <div className=" d-flex flex-column">              
            <div className="d-flex mb-4">
              <div className="col-md-6 d-flex align-items-center p-0">
                  <select id="select-empresas" className="form-control" onChange={e => this.setState({ empresaSelecionada: e.target.value },this.CarregarDadosEmpresa)}>
                    {this.MontarSelect()}
                  </select>
              </div>
              <div className="col-md-6 p-0 align-items-center">
                {/* <Button class="btn-dark ml-2" icon="fa-user-plus pr-2" text="Importar Funcionários"/>  */}

                <input type="file" className="btn btn-dark" id="csv-file" name="files" onChange={this.handleFileSelect.bind(this)}/>
                <Button class="btn-dark pr-2 ml-3" icon="fa-plus fa-lg mr-1" text="Adicionar Funcionário" target="#modal-add-funcionario"/>
                
                {/* <Button class="testeok btn-dark ml-2" icon="fa-user-plus pr-2" text="OK"/>  */}
                {/* <Button class="btn-dark ml-2" icon="fa-plus pr-2" text="Criar GH"/>  */}
                {/* <Button class="btn-dark ml-2" icon="fa-plus pr-2" text="Criar CC"/> */}
              </div>
            </div>

            
            {this.state.csv && <PreviewFuncionarios lista={this.state.csv} />}

            {this.state.listaFuncionarios && <TableFuncionarios lista={this.state.listaFuncionarios}  /> }


             {/* <Table2 />
            <Table3 />  */}

          </div>      

        {/* <Modal2/>    */}
        {/* <ModalCriarEmpresa/>  */}
        
        <ModalAddFuncionario empresaId={this.state.empresaSelecionadaId}  /> 


      </div>

    );
  }
}

export default Employees;






