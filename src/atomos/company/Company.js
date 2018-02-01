import React from 'react';
import PropTypes from 'prop-types';
import Table1 from '../table1';
import Table2 from '../table2';
import Table3 from '../table3';
import Form1 from '../form1';
import Form2 from '../form2';
// import Modal1 from '../modal1';
import Modal2 from '../modal1';
import Button from '../button';

// @flow
const Company = props => (
  // <span>{props.text}</span>


  <div id="company" className="d-none">
    <h3 className="mt-10"><i className="fa fa-building" aria-hidden="true"></i> Empresas</h3>        

        <div className="panel"> 
          {/* <Button class="btn-dark" icon="fa-user-plus" text="Adicionar"/> */}
          <div className="panel-heading">
          </div>
          <div className="panel-body">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item active">
                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">
                  Metrosul 
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">
                  Empresa2
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="add-tab" data-toggle="tab" href="#add" role="tab" aria-controls="add" aria-selected="false">
                  <i className="fa fa-plus" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane  active" id="home" role="tabpanel" aria-labelledby="home-tab"> {/* fade show */}
                <div className="d-flex align-center justify-content-center mt-30">
                  <h4 className="m-0">Metrosul</h4>
                  <Button class="btn-dark m-0 ml-10" icon="fa-info"/>
                  <Button class="btn-dark m-0 ml-10" icon="fa-info pr-10" text="Importar Funcionários"/> 
                </div>
                <Table1 />
                <Table2 />
                <Table3 />

              </div>   
              <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"> <Form2 /> </div>
              <div className="tab-pane fade" id="add" role="tabpanel" aria-labelledby="add-tab"> <Form2 /> </div>
            </div>   

            {/* <Modal1/>            */}                     
          </div>      
        </div>

      </div>


);

Company.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Company;






