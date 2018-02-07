import React from 'react';
import PropTypes from 'prop-types';
import Table1 from '../table1';
import Form1 from '../form1';
import Form2 from '../form2';
import ReqAberta from '../reqaberta';
import ReqCancelada from '../reqcancelada';
import UltimaReq from '../ultimareq';
// import Modal1 from '../modal1';
import Button from '../button';

// @flow
const Request = props => (
  // <span>{props.text}</span>


        <div id="request" className="d-none "> 
         {/* <Button class="btn-dark" icon="fa-user-plus" text="Adicionar"/> */}
          <h3 className="mt-10"><i className="fa fa-clipboard" aria-hidden="true"></i> Requisições</h3> 
          

          {/* <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item active">
              <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">
              <i className="fa fa-users pr-10" aria-hidden="true"></i>Funcionários</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">
              <i className="fa fa-shopping-cart pr-10" aria-hidden="true"></i>Produtos</a>
            </li>
          </ul> */}

          
          {/* <div className="tab-content" id="myTabContent">
            <div className="tab-pane  active" id="home" role="tabpanel" aria-labelledby="home-tab"> {/* fade show */}{/*
              <ReqAberta size="col" small="d-none"/> 
              <Table1 />
            </div>   
            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"> <Form2 /></div>
          </div>    */}

          {/* <Modal1/>            */}
          
          {/* <UltimaReq size="col" small="d-none "/> 
          <ReqAberta size="col" small="d-none "/> 
          <ReqCancelada size="col" small="d-none "/>  */}
          
          
        </div>      


);

Request.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Request;