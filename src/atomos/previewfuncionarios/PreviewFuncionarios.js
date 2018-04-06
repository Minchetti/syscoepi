import React from 'react';
// import PropTypes from 'prop-types';

class PreviewFuncionarios extends React.Component {
  state = {
  };

  render() {  

    var V1 = this.props.lista.data;
    console.log(V1);
    console.log('V1');
    var V2 = () => V1.map(function(value){
      return (
        <tr>
          <td>{value.Nome}</td>
          <td>{value.Turno}</td>
          <td>{value.Sexo}</td>
          <td>{value.RG}</td>
          <td>{value.CPF}</td>
        </tr>  
        )
    });
      
    return (
      <div>
        <button className="btn btn-dark ml-10"> <i className="fa fa-share-square fa-lg pr-10"></i> Enviar Dados </button>
        <table>
          <thead className="thead-dark">
            <tr>
              <th>Nome</th>
              <th>Turno</th>
              <th>Sexo</th>
              <th>RG</th>
              <th>CPF</th>
            </tr>
          </thead>
          <tbody>
            {V2()}
          </tbody>
        </table>                  
      </div>
    )
  }
};


// PreviewFuncionarios.propTypes = {
//   text: PropTypes.string.isRequired,
// };

export default PreviewFuncionarios;