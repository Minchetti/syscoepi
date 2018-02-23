import React from 'react';
import PropTypes from 'prop-types';

{/* <script src="https://cdnjs.com/libraries/jquery.mask"></script> */}



// @flow
const CriarConta = props => (
 
<div className="p-30">

<div className="modal fade" id="modal-criar-conta" tabIndex="-1" role="dialog" aria-labelledby="modal-criar-conta-label" aria-hidden="true">
  <div className="modal-dialog " role="document">
    <div className="modal-content z-9999">
      <div className="modal-header d-flex justify-content-between align-center">
        <div className="d-flex align-center">
          <i className="fa fa-user-plus fa-lg pr-10" aria-hidden="true"/>
          <h6 className="modal-title" id="exampleModalLabel">Criar Usuário</h6>
        </div>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>


      <div className="modal-body ">
        <form id="form-criar-conta" className="text-left d-flex flex-wrap" method="post" action="">
          <div className="form-group col-md-6">
            <label for="input-nome"><i className="fa fa-truck pr-2" aria-hidden="true"></i>Nome</label>
            <input type="text" className="form-control" id="input-nome" aria-describedby="emailHelp" required />
          </div>
          <div className="form-group col-md-6">
            <label for="input-cpf"><i className="fa fa-truck pr-2" aria-hidden="true"></i>CPF</label>
            <input type="text" className="form-control" id="input-cpf" aria-describedby="emailHelp" required/>
          </div>
          <div className="form-group col-md-6">
            <label for="input-celular"><i className="fa fa-truck pr-2" aria-hidden="true"></i>Celular</label>
            <input type="text" className="form-control" id="input-celular" />
          </div>
          <div className="form-group col-md-6">
            <label for="input-email"><i className="fa fa-truck pr-2" aria-hidden="true"></i>Email</label>
            <input type="email" className="form-control" id="input-email" aria-describedby="emailHelp" required/>
          </div>
          <div className="form-group col-md-6">
            <label for="input-senha"><i className="fa fa-truck pr-2" aria-hidden="true"></i>Senha</label>
            <input type="password" className="form-control" id="input-senha" aria-describedby="emailHelp" required/>
          </div>
          <div className="form-group col-md-6">
            <label for="input-confirma-senha"><i className="fa fa-truck pr-2" aria-hidden="true"></i>Confirma Senha</label>
            <input type="password" className="form-control" id="input-confirma-senha" aria-describedby="emailHelp" required/>
          </div>
          {/* <div className="form-group col-md-6">
            <label for="exampleFormControlSelect1">
            <i className="fa fa-clock-o pr-2" aria-hidden="true"></i>Turno
            </label>
            <select className="form-control" id="exampleFormControlSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            </select>
          </div> */}
        </form>        
      </div>


      <div className="modal-footer">
        <button type="button" className="btn btn-danger" data-dismiss="modal">
          <i className="fa fa-times pr-2" aria-hidden="true" />Fechar
        </button>
        <button id="criar-conta" type="button" className="btn btn-primary">
          <i className="fa fa-plus pr-2" aria-hidden="true"/>Salvar
        </button>
      </div>


    </div>
  </div>
</div>



</div> 



);

CriarConta.propTypes = {
  text: PropTypes.string.isRequired,
};

export default CriarConta;