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








class Company extends React.Component {
  state = {
    csv: null,
    listaFuncionarios: [
      {Nome: "Marcello Minchetti", Turno: "Noturno", Sexo: "Masculino", RG: "16778405", CPF: "10770546617", GH: "123456", Email: "teste@gmail.com"},   
      {Nome: "Leandro Santos", Turno: "vespertino", Sexo: "Masculino", RG: "16698405", CPF: "78970546617", GH: "123456", Email: "teste@gmail.com"}, 
      {Nome: "Luciano Braga", Turno: "Matutino", Sexo: "Masculino", RG: "16771105", CPF: "11570546617", GH: "123456", Email: "teste@gmail.com"},
      {Nome: "Rodolfo Augusto", Turno: "Vespertino", Sexo: "Masculino", RG: "16772605", CPF: "11980546617", GH: "123456", Email: "teste@gmail.com"},    
      {Nome: "Susi Ribeiro", Turno: "Noturno", Sexo: "Feminino", RG: "16488405", CPF: "10770774617", GH: "123456", Email: "teste@gmail.com"}
    ]
  };
  
  handleFileSelect(evt) {
    var file = evt.target.files[0];
    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      complete: function(csv) {
        this.setState({ csv });
        console.log(csv);
        // PreviewComponent = <PreviewFuncionarios lista={csv}/> 
      }.bind(this)
      });
  }


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
    alert("Funcionarios carregados!") ;
  };

  
  render() {   

    this.CarregarFuncionarios();
    
    


    return (
      
      <div id="company">
      
        <h4 className="mt-10 mb-4"><i className="fa fa-building" aria-hidden="true"></i> Empresas</h4>  
        <div className=""> 
          <div className=" d-flex flex-column">              
            <div className="d-flex mb-4">
              <div className="col-md-4 d-flex align-center p-0">
                <div className="col-md-11 p-0">
                  <select id="select-empresas" className="form-control">
                    <option>Metrosul</option>
                    <option>BrazOffice</option>
                    <option>Fitassul</option>
                    <option>Helibras</option>
                  </select>
                </div>
                <div className="col-md-1 p-0">
                  <Button class="btn-dark pr-10" icon="fa-plus fa-lg" text="" target="#modal-criar-empresa"/>
                </div>
              </div>
              <div className="col-md-8 p-0 align-center">
                {/* <Button class="btn-dark ml-10" icon="fa-user-plus pr-10" text="Importar Funcionários"/>  */}

                <input type="file" className="btn btn-dark ml-10" id="csv-file" name="files" onChange={this.handleFileSelect.bind(this)}/>
                <Button class="btn-dark pr-10" icon="fa-plus fa-lg" text="Adicionar Funcionário Avulso" target="#modal-add-funcionario"/>

                {/* <Button class="testeok btn-dark ml-10" icon="fa-user-plus pr-10" text="OK"/>  */}
                {/* <Button class="btn-dark ml-10" icon="fa-plus pr-10" text="Criar GH"/>  */}
                {/* <Button class="btn-dark ml-10" icon="fa-plus pr-10" text="Criar CC"/> */}
              </div>
            </div>

            
            {this.state.csv && <PreviewFuncionarios lista={this.state.csv} />}

            {this.state.listaFuncionarios && <TableFuncionarios lista={this.state.listaFuncionarios}  /> }


             {/* <Table2 />
            <Table3 />  */}

          </div>      
        </div>

        {/* <Modal2/>    */}
        <ModalCriarEmpresa/>
        <ModalAddFuncionario/>           

      </div>

    );
  }
}

export default Company;






