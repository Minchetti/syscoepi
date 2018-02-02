import React from 'react';
import PropTypes from 'prop-types';

// @flow
const Table1 = props => (
  // <span>{props.text}</span>


<div className="mb-30">
  <h5 className="text-left"><i className="fa fa-user pr-10" aria-hidden="true"></i>Funcionários</h5>
  <table className="table table-striped ">
    <thead className="thead-dark">
      <tr>
        <th className="text-center">#</th>
        <th className="text-center">Matrícula</th>
        <th className="text-center">Nome </th>
        <th className="text-center">Setor</th>
        <th className="text-center">Local de Entrega</th>
        <th className="text-center">Turno</th>
        <th className="text-center">CC</th>
        <th className="text-center">GH</th>
        <th className="text-center">Ação</th>
      </tr>
    </thead>
    <tbody >
      <tr>
        <th scope="row">1</th>
        <td>012345</td>
        <td>Mark</td>
        <td>A</td>
        <td>Loja Fitassul</td>
        <td>Noturno</td>
        <td>1231233</td>
        <td>31231233</td>
        <td><i class="fa fa-times" aria-hidden="true"></i></td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>103254</td>
        <td>Jack</td>
        <td>C</td>
        <td>Filial SP</td>
        <td>Diurno</td>
        <td>1231233</td>
        <td>31231233</td>
        <td><i class="fa fa-times" aria-hidden="true"></i></td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>013256</td>
        <td>Jhon</td>
        <td>B</td>
        <td>Loja Fitassul</td>
        <td>Matutino</td>
        <td>1231233</td>
        <td>31231233</td>
        <td><i class="fa fa-times" aria-hidden="true"></i></td>
      </tr>
    </tbody>
  </table>
</div> 




   /* <span>FORMULARIO 1</span> */
);

Table1.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Table1;