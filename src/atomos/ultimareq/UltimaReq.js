import React from 'react';
// import PropTypes from 'prop-types';
import capacete from '../../capacete.png';
import bota2 from '../../bota2.png';
import abafador from '../../abafador.png';

// @flow
const UltimaReq = props => (


<div className={props.size}>


  <div className={'UltimaReq panel mb-4 ' + props.small}>
    <div className="panel-heading ">
      <h6 className="text-left mb-0"><i className="fa fa-check-square-o pr-10" aria-hidden="true"></i>Ultimas Requisições  </h6>
    </div>
    <div className="panel-body">
      <table className="table m-0">
        <thead className="thead-dark">
          <tr>
            <th className="text-center"></th>
            <th className="text-center">CA</th>
            <th className="text-center">Código</th>
            <th className="text-center">Empresa</th>
          </tr>
        </thead>
        <tbody >
          <tr>
            <td scope="row"><img src={abafador} className="thumb" alt="logo" /></td>
            <td>125468</td>
            <td>195436</td>
            <td>Siemens</td>
          </tr>
          <tr>
            <td scope="row"><img src={capacete} className="thumb" alt="logo" /></td>
            <td>103254</td>
            <td>195436</td>
            <td>Votorantin</td>
          </tr>
          <tr>
            <td scope="row"><img src={bota2} className="thumb" alt="logo" /></td>
            <td>013256</td>
            <td>195436</td>
            <td>Helibras</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div> 



    
  <div className={'UltimaReq panel mb-4 ' + props.big}>
    <div className="panel-heading">
      <h6 className="text-left mb-0"><i className="fa fa-check-square-o pr-10" aria-hidden="true"></i>Últimas Requisições</h6>
    </div>
    <div className="panel-body">
      <table className="table m-0">
        <thead className="thead-dark">
          <tr>
            <th className="text-center"></th>
            <th className="text-center">CA</th>
            <th className="text-center">Código</th>
            <th className="text-center">Empresa</th>
            <th className="text-center">CC</th>
            <th className="text-center">GH</th>
            <th className="text-center">Turno</th>
            <th className="text-center">Funcionário</th>
            <th className="text-center">Validade</th>
            <th className="text-center">Quantidade</th>
          </tr>
        </thead>
        <tbody >
          <tr>
            <td scope="row"><img src={abafador} className="thumb" alt="logo" /></td>
            <td>125468</td>
            <td>195436</td>
            <td>Siemens</td>
            <td>012345</td>
            <td>Obras</td>
            <td>Noturno</td>
            <td>Adriano Torres</td>
            <td>10/02/2018</td>
            <td>01</td>
          </tr>
          <tr>
            <td scope="row"><img src={capacete} className="thumb" alt="logo" /></td>
            <td>103254</td>
            <td>195436</td>
            <td>Votorantin</td>
            <td>012345</td>
            <td>Obras</td>
            <td>Noturno</td>
            <td>Lucas Andadre</td>
            <td>10/02/2018</td>
            <td>01</td>
          </tr>
          <tr>
            <td scope="row"><img src={bota2} className="thumb" alt="logo" /></td>
            <td>013256</td>
            <td>195436</td>
            <td>Helibras</td>
            <td>012345</td>
            <td>Obras</td>
            <td>Noturno</td>
            <td>Julio Faria</td>
            <td>10/02/2018</td>
            <td>01</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div> 






</div>





);

// UltimaReq.propTypes = {
//   text: PropTypes.string.isRequired,
// };

export default UltimaReq;