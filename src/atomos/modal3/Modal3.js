import React from 'react';
import PropTypes from 'prop-types';

// @flow
const Modal3 = props => (
  // <span>{props.text}</span>
  // .modal-backdrop.in     opacity: .5;
 

<div className="p-4">

<div>
  <div className="modal-dialog modal-sm" role="document">
    <div className="modal-content">
      <div className="modal-header d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <i className="fa fa-user-plus fa-lg pr-2" aria-hidden="true"/>
          <h5 className="modal-title" id="exampleModalLabel">LOGIN</h5>
        </div>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body d-flex">


        {/* <form className="text-left col">
          <div className="form-group col-md-6">
            <label for="exampleInputPassword1" className="pr-2"><i className="fa fa-user pr-1" aria-hidden="true"/>CNPJ: </label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="12054998817"/>
          </div>
          <div className="form-group col-md-6">
            <label for="exampleInputPassword1" className="pr-2"><i className="fa fa-user pr-1" aria-hidden="true"/>Razão Social: </label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Fitassul"/>
          </div>
          <div className="form-group col-md-6">
            <label for="exampleInputPassword1" className="pr-2"><i className="fa fa-user pr-1" aria-hidden="true"/>Responsável: </label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Luciano"/>
          </div>
          <div className="form-group col-md-6">
            <label for="exampleInputPassword1" className="pr-2"><i className="fa fa-building pr-1" aria-hidden="true"/>Setor: </label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="A"/>
          </div>
          <div className="form-group col-md-6">
            <label for="exampleFormControlSelect1"><i className="fa fa-truck pr-1" aria-hidden="true"></i>Local da Entrega</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Fitassul"/>
          </div>
          <div className="form-group col-md-6">
            <label for="exampleFormControlSelect1">
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
        </form> */}





        <form className="col text-left">
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
          </div>
          {/* <div className="form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" for="exampleCheck1">Check me out</label>
          </div> */}
          <button type="submit" className="btn btn-primary">Entrar</button>
        </form>




        
      </div>
      {/* <div className="modal-footer">
        <button type="button" className="btn btn-danger" data-dismiss="modal">
          <i className="fa fa-times pr-1" aria-hidden="true" />Fechar
        </button>
        <button type="button" className="btn btn-primary">
          <i className="fa fa-plus pr-1" aria-hidden="true"/>Salvar
        </button>
      </div> */}
    </div>
  </div>
</div>



</div> 



);

Modal3.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Modal3;