import React from 'react';
// import PropTypes from 'prop-types';

class TableFuncionarios extends React.Component {
  state = {
    lista: this.props.lista,
    listaInicial: this.props.lista,
    search:null
  };


  onChange = e => {    
    e.preventDefault();  
    // var search = this.state.search;
    // this.setState({ lista: [ {Nome: "Marcello Minchetti", Turno: "Noturno", Sexo: "Masculino", RG: "16778405", CPF: "10770546617", GH: "123456", Email: "teste@gmail.com"}] });    
    var campo_search = document.getElementById("input-search-funcionario").value;
    // var campo_search = "Marcello Minchetti";
    // console.log(campo_search + ' DIGITADO NO INPUT');
    var funcionario_pesquisado = this.state.lista.filter((i) => i.Nome == campo_search);
    // console.log(funcionario_pesquisado);

    // {funcionario_pesquisado && this.setState({ lista: funcionario_pesquisado })};
    if (funcionario_pesquisado.length > 0){
      // console.log('asdwwwe');
        this.setState({ lista: funcionario_pesquisado });
    }
    if (campo_search === ''){
      console.log("CAMPO VAZIO");
      console.log(this.state.listaInicial);
      this.setState({ lista: this.state.listaInicial });
    }
    

    // if(document.getElementById("input-search-funcionarios").value == ''){
    //   window.location.reload(true);
    // }
    // fetch('http://192.168.10.30/v1/empresas/ID/funcionarios', {
    //   method: 'get',
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
  }



  render(){

    var MontarLista = () => this.state.lista.map(function(value, i){ //.data
      return (
        <tr>          
          <td>{i}</td>
          <td>{value.Nome}</td>
          <td>{value.RG}</td>
          <td>{value.CPF}</td>
          <td>{value.Email}</td>
          <td>{value.GH}</td>
          <td>{value.Turno}</td>
          <td>{value.Sexo}</td>
          <td><i class="far fa-trash-alt"></i></td>
        </tr>  
        )
    });


    return(  

      <div className="panel mb-4">
        <div className="panel-heading d-flex justify-content-between">
          
          <h6 className="text-left mb-0"><i className="fa fa-user pr-10" aria-hidden="true"></i>Funcionários</h6>
        
          <form id="" onChange={this.onChange} className="text-left" method="post" action="">
            <input type="text"  className="form-control" id="input-search-funcionario" name="input-search-funcionario" aria-describedby=""/> {/*value={this.state.search} onChange={e => this.setState({ search: e.target.value })}*/}
          </form>


        </div>
        <div className="panel-body">
          <table className="table m-0 ">
            <thead className="thead-dark">
              <tr>
                <th className="text-center">#</th>
                <th className="text-center">Nome </th>
                <th className="text-center">RG</th>
                <th className="text-center">CPF</th>
                <th className="text-center">Email</th>
                <th className="text-center">GH</th>
                <th className="text-center">Turno</th>
                <th className="text-center">Sexo</th>
                <th className="text-center"><i class="far fa-trash-alt"></i></th>
              </tr>
            </thead>
            <tbody>              
            {MontarLista()}
            </tbody>
          </table>
        </div>
      </div> 


    );
  }

}
// TableFuncionarios.propTypes = {
//   text: PropTypes.string.isRequired,
// };

export default TableFuncionarios;