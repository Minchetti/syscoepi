import React from 'react';
import PropTypes from 'prop-types';

// @flow
const Form1 = props => (
  // <span>{props.text}</span>




      <div className="form1 p-30">
        <button type="button" className="btn btn-dark mr-20" data-toggle="modal" data-target="#exampleModal"><i className="fa fa-user-plus pr-10" aria-hidden="true" ></i>Adicionar</button>
        <button type="button" className="btn btn-dark mr-20"><i className="fa fa-users pr-10" aria-hidden="true"></i>Adicionar por Setor</button>
        <button type="button" className="btn btn-dark"><i className="fa fa-folder-open pr-10" aria-hidden="true"></i>Template</button>
      </div>






   /* <span>FORMULARIO 1</span> */
);

Form1.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Form1;