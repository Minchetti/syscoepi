import React from 'react';
// import PropTypes from 'prop-types';

class TableFuncionarios extends React.Component {
  state = {
    search:null
  };


  onChange = e => {    
    e.preventDefault(); 
    var search = this.state.search;
    
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
  }



  render(){

    var MontarLista = () => this.props.lista.map(function(value, i){ //.data
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
            <input type="text" value={this.state.search} onChange={e => this.setState({ search: e.target.value })} className="form-control" id="input-search-funcionario" name="input-search-funcionario" aria-describedby=""/>
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