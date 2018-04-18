import React from 'react';
// import PropTypes from 'prop-types';

// @flow
const Modal1 = props => (


<div className="p-4">


<div className="modal fade md-lg" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg" role="document">
    <div className="modal-content">
      <div className="modal-header d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <i className="fa fa-user-plus fa-lg pr-2" aria-hidden="true"/>
          <h5 className="modal-title" id="exampleModalLabel">Adicionar Funcionários</h5>
        </div>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body d-flex">


        <form className="text-left col">
          <div className="col-md-12 p-0">
            <div className="form-group col-md-6">
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
            </div>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="exampleInputPassword1" className="pr-2"><i className="fa fa-user pr-1" aria-hidden="true"/>Nome: </label>
            <span>Adriano</span>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="exampleInputPassword1" className="pr-2"><i className="fa fa-building pr-1" aria-hidden="true"/>Setor: </label>
            <span>Produção</span>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="exampleFormControlSelect1">
              <i className="fa fa-truck pr-1" aria-hidden="true"></i>Local da Entrega
            </label>
            <select className="form-control" id="exampleFormControlSelect1">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="exampleFormControlSelect1">
              <i className="fa fa-clock-o pr-1" aria-hidden="true"></i>Turno
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
          <i className="fa fa-times pr-1" aria-hidden="true" />Fechar
        </button>
        <button type="button" className="btn btn-primary">
          <i className="fa fa-plus pr-1" aria-hidden="true"/>Adicionar
        </button>
      </div>
    </div>
  </div>
</div>



</div> 



);

// Modal1.propTypes = {
//   text: PropTypes.string.isRequired,
// };

export default Modal1;