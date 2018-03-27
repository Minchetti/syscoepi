import React from 'react';
// import PropTypes from 'prop-types';
import Table1 from '../table1';
import Table2 from '../table2';
import Table3 from '../table3';
// import Modal1 from '../modal1';
import Modal2 from '../modal1';
import Button from '../button';
import * as Papa from 'papaparse';
import $ from 'jquery'; 


var data;
function handleFileSelect(evt) {
  var file = evt.target.files[0];
  Papa.parse(file, {
    header: true,
    dynamicTyping: true,
    complete: function(csv) {
      console.log(csv);

      var tam = csv.data.length;

      var i=0;
      while ( i != tam ){
        $('#test tbody').append(
          '<tr><td>'+ csv.data[i].Nome +'</td><td>'+ csv.data[i].Turno +'</td><td>'+ csv.data[i].Sexo +'</td><td>'+ csv.data[i].RG +'</td><td>'+ csv.data[i].CPF +'</td></tr>'
        );

        i++;
      }
      
    }    
  });
}

$(document).ready(function(){
  $("#csv-file").change(handleFileSelect);
});




class Company extends React.Component {
  state = {
  };



  render() {

    return (
      <div id="company" className="">
        <h4 className="mt-10 mb-4"><i className="fa fa-building" aria-hidden="true"></i> Empresas</h4>      

          <div className=""> 
            <div className=""></div>
            <div className=" d-flex flex-column">            
              
              <div className="d-flex mb-4">
                <div className="col-md-4 d-flex align-center p-0">
                  <div className="col-md-11 p-0">
                    <select className="form-control">
                      <option>Metrosul</option>
                      <option>BrazOffice</option>
                      <option>Fitassul</option>
                      <option>Helibras</option>
                    </select>
                  </div>
                  <div className="col-md-1 p-0">
                    <Button class="btn-dark m-0 col" icon="fa-plus fa-lg"/>
                  </div>
                </div>
                <div className="col-md-8 p-0 align-center">
                  <Button class="btn-dark" icon="fa-info pr-10" text="Dados" target="#criar-conta"/>
                  <Button class="btn-dark ml-10" icon="fa-user-plus pr-10" text="Importar Funcionários"/> 
                  <Button class="btn-dark ml-10" icon="fa-plus pr-10" text="Criar GH"/> 
                  <Button class="btn-dark ml-10" icon="fa-plus pr-10" text="Criar CC"/>
                </div>
              </div>

    <input type="file" id="csv-file" name="files"/>
    
                <br/><br/><br/>
                <table id="test">
                  <thead className="thead-dark">
                    <tr>
                      <th>Nome</th>
                      <th>Turno</th>
                      <th>Sexo</th>
                      <th>RG</th>
                      <th>CPF</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                    </tr>
                  </tbody>
                </table><br/><br/><br/>

                <Table1 />
                <Table2 />
                <Table3 />

              </div>      
            </div>

            <Modal2/>           

          </div>

    );
  }
}

export default Company;






