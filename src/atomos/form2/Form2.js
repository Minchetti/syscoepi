import React from 'react';
import PropTypes from 'prop-types';

// @flow
const Form2 = props => (
  // <span>{props.text}</span>



    <div>
      <h4>Cadastrar Nova Empresa</h4>
      <form className="form2 p-4 desactive text-left col">
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
        <button type="button" className="btn btn-primary">
          <i className="fa fa-plus pr-1" aria-hidden="true"/>Salvar
        </button>
      </form>
    </div>






   /* <span>FORMULARIO 1</span> */
);

Form2.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Form2;