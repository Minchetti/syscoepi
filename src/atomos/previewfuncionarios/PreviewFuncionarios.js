import React from 'react';
import $ from 'jquery';
// import PropTypes from 'prop-types';

class PreviewFuncionarios extends React.Component {
  state = {
  };

  AddFuncionarios = () => {     
    // var EmpresaSelecionada = document.getElementById("select-empresas").value;
    
    // fetch('http://192.168.10.30/v1/?', {
    //   method: 'post',
    //   body: JSON.stringify(),
    //   headers: {
      //     'content-type': 'application/json'
      //   }
      // })
      // .then(response => {
        //   response.json().then(data => {
          //     if (data.success == true) {      
    //     } 
    //     else {
      //       alert(data.message+' - '+data.data[0].message);    
    //     }
    //   });
    // })
    // .catch(err => {
      //   console.error('Failed retrieving information', err);
      //   alert(err);
      // });
      alert("Funcionarios adicionados!") ;
      $('#JAJA').remove();
    };
    
    

  render() {      

    var MontarLista = () => this.props.lista.data.map(function(value){
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
      <div id="JAJA">
        <button onClick={this.AddFuncionarios} className="btn btn-dark ml-10"> <i className="fa fa-share-square fa-lg pr-10"></i> Enviar Dados </button>
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
            {MontarLista()}
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