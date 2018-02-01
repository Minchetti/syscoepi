import React from 'react';
import PropTypes from 'prop-types';
import capacete from '../../capacete.png';
import bota2 from '../../bota2.png';
import abafador from '../../abafador.png';
import Button from '../button';

// @flow
const AlertaEpi = props => (
  // <span>{props.text}</span>


<div className="alertaepi panel col">
  <div className="panel-heading">
    <h5 className="text-left mb-0"><i className="fa fa-exclamation-triangle pr-10" aria-hidden="true"></i>EPI's em Alerta  </h5>
  </div>
  <div className="panel-body">
    <table className="table m-0">
      <thead className="thead-dark">
        <tr>
          <th className="text-center"></th>
          <th className="text-center">CA</th>
          <th className="text-center">Empresa</th>
          <th className="text-center">CC</th>
          <th className="text-center">GH </th>
          <th className="text-center">Turno</th>
          <th className="text-center">Funcionário</th>
          <th className="text-center">Validade</th>
          <th className="text-center">Qtd Estoque</th>
        </tr>
      </thead>
      <tbody >
        <tr>
          <td scope="row"><img src={abafador} className="thumb" alt="logo" /></td>
          <td>125468</td>
          <td>Siemens</td>
          <td>012345</td>
          <td>Obras</td>
          <td>Noturno</td>
          <td>Adriano Torres</td>
          <td className="alerta">10/02/2018</td>
          <td>01</td>
        </tr>
        <tr>
          <td scope="row"><img src={capacete} className="thumb" alt="logo" /></td>
          <td>103254</td>
          <td>Votorantin</td>
          <td>201354</td>
          <td>Obras</td>
          <td>Diurno</td>
          <td><i className="fa fa-info" aria-hidden="true"></i></td>
          <td>01/01/2020</td>
          <td className="alerta">09</td>
        </tr>
        <tr>
          <td scope="row"><img src={bota2} className="thumb" alt="logo" /></td>
          <td>013256</td>
          <td>Helibras</td>
          <td>254463</td>
          <td>Obras</td>
          <td>Matutino</td>
          <td>Lucas Pereira</td>
          <td className="alerta">08/02/2018</td>
          <td>01</td>
        </tr>
      </tbody>
    </table>
  </div>
</div> 




   /* <span>FORMULARIO 1</span> */
);

AlertaEpi.propTypes = {
  text: PropTypes.string.isRequired,
};

export default AlertaEpi;