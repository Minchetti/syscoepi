import React from 'react';
// import PropTypes from 'prop-types';
import capacete from '../../capacete.png';
import bota2 from '../../bota2.png';
import abafador from '../../abafador.png';

// @flow
const AlertaEpi = props => (
  // <span>{props.text}</span>



<div className="AlertaEpi panel col p-0 mb-4">
  <div className="panel-heading thead-dark">
    <h6 className="text-left mb-0"><i className="fa fa-exclamation-triangle pr-2" aria-hidden="true"></i>EPI's em Alerta  </h6>
  </div>
  <div className="panel-body">
    <table className="table m-0">
      <thead className="">
        <tr>
          <th className="text-center">Thumb</th>
          <th className="text-center">CA</th>
          <th className="text-center">Empresa</th>
          <th className="text-center">CC</th>
          <th className="text-center">GH </th>
          <th className="text-center">Turno</th>
          <th className="text-center">Funcionário(s)</th>
          <th className="text-center">Validade</th>
          <th className="text-center">Qtd Estoque</th>
        </tr>
      </thead>
      <tbody >
        <tr>
          <td scope="row"><div><img src={abafador} className="thumb" alt="logo" /></div></td>
          <td><div>125468</div></td>
          <td><div>Siemens</div></td>
          <td><div>012345</div></td>
          <td><div>Obras</div></td>
          <td><div>Noturno</div></td>
          <td><div>Adriano Torres</div></td>
          <td className="alerta"><div>10/02/2018</div></td>
          <td><div>01</div></td>
        </tr>
        <tr>
          <td scope="row"><div><img src={capacete} className="thumb" alt="logo" /></div></td>
          <td><div>103254</div></td>
          <td><div>Votorantin</div></td>
          <td><div>201354</div></td>
          <td><div>Obras</div></td>
          <td><div>Diurno</div></td>
          <td><div>Marcello Dias</div></td>
          <td><div>01/01/2020</div></td>
          <td className="alerta"><div>09</div></td>
        </tr>
        <tr>
          <td scope="row"><div><img src={bota2} className="thumb" alt="logo" /></div></td>
          <td><div>013256</div></td>
          <td><div>Helibras</div></td>
          <td><div>254463</div></td>
          <td><div>Obras</div></td>
          <td><div>Matutino</div></td>
          <td><div>Lucas Pereira</div></td>
          <td className="alerta"><div>08/02/2018</div></td>
          <td><div>01</div></td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>



   /* <span>FORMULARIO 1</span> */
);

// AlertaEpi.propTypes = {
//   text: PropTypes.string.isRequired,
// };

export default AlertaEpi;