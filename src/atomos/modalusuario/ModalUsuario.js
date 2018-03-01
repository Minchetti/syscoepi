import React from 'react';
import PropTypes from 'prop-types';



{/* <script src="https://code.jquery.com/jquery-2.2.4.js" integrity="sha256-iT6Q9iMJYuQiMWNd9lDyBUStIq/8PuOW33aOqmvFpqI=" crossorigin="anonymous"></script> */}



// @flow
const ModalUsuario = props => (
  
  <div className="p-30">

    <div className="modal fade" id="modal-usuario" tabIndex="-1" role="dialog" aria-labelledby="modal-usuario-label" aria-hidden="true">
      <div className="modal-dialog " role="document">
        <div className="modal-content z-9999">
          <div className="modal-header d-flex justify-content-between align-center">
            <div className="d-flex align-center">
              <i className="fa fa-user-circle fa-lg pr-10" aria-hidden="true"/>
              <h6 className="nome-usuario modal-title">{props.name}</h6>
            </div>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>


          <div className="modal-body ">
            <form id="form-usuario" className="text-left d-flex flex-wrap" method="post" action="" data-toggle="validator" role="form">
              <div className="form-group col-md-6">
                <label for="input-nome"><i className="fa fa-user pr-2" aria-hidden="true"></i>Nome</label>
                <input type="text" className="form-control" id="input-nome" aria-describedby="emailHelp" required />
                <div class="help-block with-errors"></div>
              </div>
              <div className="form-group col-md-6">
                <label for="input-cpf"><i className="fa fa-id-card-o pr-2" aria-hidden="true"></i>CPF</label>
                <input type="text" className="form-control" id="input-cpf" name="input-cpf" aria-describedby="emailHelp" data-minlength="14" required />
                <div class="help-block with-errors"></div>
              </div>
              <div className="form-group col-md-6">
                <label for="input-celular"><i className="fa fa-address-book pr-2" aria-hidden="true" data-minlength="16"></i>Celular</label>
                <input type="text" className="form-control" id="input-celular" />
                <div class="help-block with-errors"></div>
              </div>
              <div className="form-group col-md-6">
                <label for="input-email"><i className="fa fa-envelope pr-2" aria-hidden="true"></i>Email</label>
                <input type="email" className="form-control" id="input-email" aria-describedby="emailHelp" required/>
                <div class="help-block with-errors"></div>
              </div>
              <div className="form-group col-md-6">
                <label for="input-senha"><i className="fa fa-key pr-2" aria-hidden="true"></i>Senha</label>
                <input type="password" className="form-control" id="input-senha" aria-describedby="emailHelp" required/>
                <div class="help-block with-errors"></div>
              </div>
              <div className="form-group col-md-6">
                <label for="input-confirma-senha"><i className="fa fa-key pr-2" aria-hidden="true"></i>Confirma Senha</label>
                <input type="password" className="form-control" id="input-confirma-senha" aria-describedby="emailHelp" data-match="#input-senha" data-match-error="Atenção! As senhas não estão iguais." required/>
                <div class="help-block with-errors"></div>
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
            <div className="form-group mb-0">
              <button type="button" className="btn btn-danger mr-10" data-dismiss="modal">
                <i className="fa fa-times pr-2" aria-hidden="true" />Fechar
              </button>
              <button id="btn-conta" type="button" className="btn btn-primary" disabled>
                <i className="fa fa-plus pr-2" aria-hidden="true"/>Salvar
              </button>
            </div>
          </div>



        </div>
      </div>
    </div>


  </div> 



);

ModalUsuario.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ModalUsuario;