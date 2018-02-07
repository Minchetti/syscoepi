import React from 'react';
import PropTypes from 'prop-types';

// @flow
const Table3 = props => (
  // <span>{props.text}</span>



<div className="panel mb-20">
  <div className="panel-heading">
    <h6 className="text-left mb-0"><i className="fa fa-dollar pr-10" aria-hidden="true"></i>Centro de Custo</h6>
  </div>
  <div className="panel-body">
    <table className="table m-0 ">
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
</div> 




  

// <div className="">
//   <h6 className="text-left"><i className="fa fa-dollar pr-10"></i>Centro de Custo</h6>
//   <table className="table table-striped ">
//     <thead className="thead-dark">
//       <tr>
//         <th className="text-center">#</th>
//         <th className="text-center">Matrícula</th>
//         <th className="text-center">Nome </th>
//         <th className="text-center">Setor</th>
//         <th className="text-center">Local de Entrega</th>
//         <th className="text-center">Turno</th>
//         <th className="text-center">CC</th>
//         <th className="text-center">GH</th>
//         <th className="text-center">Ação</th>
//       </tr>
//     </thead>
//     <tbody >
//       <tr>
//         <th scope="row">1</th>
//         <td>012345</td>
//         <td>Mark</td>
//         <td>A</td>
//         <td>Loja Fitassul</td>
//         <td>Noturno</td>
//         <td>1231233</td>
//         <td>31231233</td>
//         <td><i class="fa fa-times" aria-hidden="true"></i></td>
//       </tr>
//       <tr>
//         <th scope="row">2</th>
//         <td>103254</td>
//         <td>Jack</td>
//         <td>C</td>
//         <td>Filial SP</td>
//         <td>Diurno</td>
//         <td>1231233</td>
//         <td>31231233</td>
//         <td><i class="fa fa-times" aria-hidden="true"></i></td>
//       </tr>
//       <tr>
//         <th scope="row">3</th>
//         <td>013256</td>
//         <td>Jhon</td>
//         <td>B</td>
//         <td>Loja Fitassul</td>
//         <td>Matutino</td>
//         <td>1231233</td>
//         <td>31231233</td>
//         <td><i class="fa fa-times" aria-hidden="true"></i></td>
//       </tr>
//     </tbody>
//   </table>
// </div> 




   /* <span>FORMULARIO 1</span> */
);

Table3.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Table3;