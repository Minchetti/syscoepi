import React from 'react';
import Table1 from '../table1';
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
    csv: null
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


  
  render() {   
    const preview = this.state.csv;   
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

            
            {preview && <PreviewFuncionarios lista={this.state.csv} />}
  
            <br/><br/><br/>


            {/* <Table1 />
            <Table2 />
            <Table3 /> */}

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






