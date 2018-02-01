import React from 'react';
import PropTypes from 'prop-types';

// @flow
const Modal2 = props => (
  // <span>{props.text}</span>


<div className="p-30">

<div className="modal fade md-lg" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg" role="document">
    <div className="modal-content">
      <div className="modal-header d-flex justify-content-between align-center">
        <div className="d-flex align-center">
          <i className="fa fa-user-plus fa-lg pr-10" aria-hidden="true"/>
          <h5 className="modal-title" id="exampleModalLabel">Editar Empresa</h5>
        </div>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body d-flex">


        <form className="text-left col">
          <div className="form-group col-md-6">
            <label for="exampleInputPassword1" className="pr-10"><i className="fa fa-user pr-5" aria-hidden="true"/>CNPJ: </label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="12054998817"/>
          </div>
          <div className="form-group col-md-6">
            <label for="exampleInputPassword1" className="pr-10"><i className="fa fa-user pr-5" aria-hidden="true"/>Razão Social: </label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Fitassul"/>
          </div>
          <div className="form-group col-md-6">
            <label for="exampleInputPassword1" className="pr-10"><i className="fa fa-user pr-5" aria-hidden="true"/>Responsável: </label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Luciano"/>
          </div>
          <div className="form-group col-md-6">
            <label for="exampleInputPassword1" className="pr-10"><i className="fa fa-building pr-5" aria-hidden="true"/>Setor: </label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="A"/>
          </div>
          <div className="form-group col-md-6">
            <label for="exampleFormControlSelect1"><i className="fa fa-truck pr-5" aria-hidden="true"></i>Local da Entrega</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Fitassul"/>
          </div>
          <div className="form-group col-md-6">
            <label for="exampleFormControlSelect1">
              <i className="fa fa-clock-o pr-5" aria-hidden="true"></i>Turno
            </label>
            <select className="form-control" id="exampleFormControlSelect1">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </form>


        
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-danger" data-dismiss="modal">
          <i className="fa fa-times pr-5" aria-hidden="true" />Fechar
        </button>
        <button type="button" className="btn btn-primary">
          <i className="fa fa-plus pr-5" aria-hidden="true"/>Salvar
        </button>
      </div>
    </div>
  </div>
</div>



</div> 



);

Modal2.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Modal2;