import React from 'react';
// import PropTypes from 'prop-types';
import Table1 from '../table1';
import Table2 from '../table2';
import Table3 from '../table3';
// import Modal1 from '../modal1';
import Modal2 from '../modal1';
import Button from '../button';


// @flow

const Company = props => (


  <div id="company" className="">
    <h4 className="mt-10 mb-4"><i className="fa fa-building" aria-hidden="true"></i> Empresas</h4>        

        <div className=""> 
          <div className="">
          </div>
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



            <Table1 />
            <Table2 />
            <Table3 />


          </div>      
        </div>


        <Modal2/>  

      </div>


);

// Company.propTypes = {
//   text: PropTypes.string.isRequired,
// };

export default Company;






