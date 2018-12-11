import React from 'react';
// import PropTypes from 'prop-types';
import capacete from '../../capacete.png';
import bota2 from '../../bota2.png';
import abafador from '../../abafador.png';

// @flow
const ReqAberta = props => (

<div className={props.size + ' ReqAberta'}>

  <div className={'panel ' + props.small}>
    <div className="panel-heading thead-dark">
      <h6 className="text-left mb-0"><i className="fa fa-folder-open pr-2" aria-hidden="true"></i>Requisições em Aberto  </h6>
    </div>
    <div className="panel-body">
      <table className="table m-0">
        <thead className="">
          <tr>
            <th className="text-center">Thumb</th>
            <th className="text-center">CA</th>
            <th className="text-center">Código</th>
            <th className="text-center">Empresa</th>
          </tr>
        </thead>
        <tbody >
          <tr>
            <td scope="row"><div><img src={abafador} className="thumb" alt="logo" /></div></td>
            <td><div>125468</div></td>
            <td><div>195436</div></td>
            <td><div>Siemens</div></td>
          </tr>
          <tr>
            <td scope="row"><div><img src={capacete} className="thumb" alt="logo" /></div></td>
            <td><div>103254</div></td>
            <td><div>195436</div></td>
            <td><div>Votorantin</div></td>
          </tr>
          <tr>
            <td scope="row"><div><img src={bota2} className="thumb" alt="logo" /></div></td>
            <td><div>013256</div></td>
            <td><div>195436</div></td>
            <td><div>Helibras</div></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div> 


  
  <div className={'ReqAberta2 panel mb-4 ' + props.big}>
    <div className="panel-heading thead-dark">
      <h6 className="text-left mb-0"><i className="fa fa-folder-open pr-2" aria-hidden="true"></i>Requisições em Aberto  </h6>
    </div>
    <div className="panel-body">
      <table className="table m-0">
        <thead className="">
          <tr>
            <th className="text-center">Thumb</th>
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
            <td scope="row"><div><img src={abafador} className="thumb" alt="logo" /></div></td>
            <td><div>125468</div></td>
            <td><div>195436</div></td>
            <td><div>Siemens</div></td>
            <td><div>012345</div></td>
            <td><div>Obras</div></td>
            <td><div>Noturno</div></td>
            <td><div>Adriano Torres</div></td>
            <td><div>10/02/2018</div></td>
            <td><div>01</div></td>
          </tr>
          <tr>
            <td scope="row"><div><img src={capacete} className="thumb" alt="logo" /></div></td>
            <td><div>103254</div></td>
            <td><div>195436</div></td>
            <td><div>Votorantin</div></td>
            <td><div>012345</div></td>
            <td><div>Obras</div></td>
            <td><div>Noturno</div></td>
            <td><div>Lucas Andadre</div></td>
            <td><div>10/02/2018</div></td>
            <td><div>01</div></td>
          </tr>
          <tr>
            <td scope="row"><div><img src={bota2} className="thumb" alt="logo" /></div></td>
            <td><div>013256</div></td>
            <td><div>195436</div></td>
            <td><div>Helibras</div></td>
            <td><div>012345</div></td>
            <td><div>Obras</div></td>
            <td><div>Noturno</div></td>
            <td><div>Julio Faria</div></td>
            <td><div>10/02/2018</div></td>
            <td><div>01</div></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div> 



</div>



);

// ReqAberta.propTypes = {
//   text: PropTypes.string.isRequired,
// };

export default ReqAberta;