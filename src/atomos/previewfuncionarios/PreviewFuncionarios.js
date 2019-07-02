import React from 'react';
// import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

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

      // $('#previewfuncionarios').hide(); 
      document.querySelector("#previewfuncionarios").style.display = 'none';
    };
    
    
  render() {      

    var MontarLista = () => this.props.lista.data.map(function(value){
      return (
        <tr>
          <td><input class="form-control" value={value.Nome} /></td>
          <td><input class="form-control" value={value.RG} /></td>
          <td><input class="form-control" value={value.CPF} /></td>
          <td><input class="form-control" value={value.Email} /></td>
          <td><input class="form-control" value={value.GH} /></td>
          <td><input class="form-control" value={value.CC} /></td>
          <td><input class="form-control" value={value.Turno} /></td>
          <td><input class="form-control" value={value.Sexo} /></td>
          <td><input class="form-control" value={value.Ativo} /></td>
        </tr>  
        )
    });
      
    return (
      <div id="previewfuncionarios" className=" mb-3">
        
        <div className="panel">
          <div className="panel-body">
            <table className="w-100">
              <thead className="thead-dark">
                <tr>
                  <th>Nome</th>
                  <th>RG</th>
                  <th>CPF</th>
                  <th>Email</th>
                  <th>GH</th>
                  <th>CC</th>
                  <th>Turno</th>
                  <th>Sexo</th>
                  <th>Ativo</th>
                  {/* <th>hghg</th> */}
                </tr>
              </thead>
              <tbody>
                {MontarLista()}
              </tbody>
            </table>                  
          </div>                 
        </div>  

        <div className=" ">
          <button onClick={this.AddFuncionarios} className="btn btn-dark w-100 h-100 pb-2 pt-2" > <FontAwesome name="share-square"/> Enviar Funcionarios </button>             
        </div>                
      </div>
    )
  }
};


// PreviewFuncionarios.propTypes = {
//   text: PropTypes.string.isRequired,
// };

export default PreviewFuncionarios;