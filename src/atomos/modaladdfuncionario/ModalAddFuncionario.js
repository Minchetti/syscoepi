import React from 'react';
// import $ from 'jquery'; 
// import PropTypes from 'prop-types';



// habilitar botao para cadastro e edição

    
    
    class ModalAddFuncionario extends React.Component {
      state = {
        nome: '',
        cpf: '',
        rg: '',
        email: '', 
        gh: ''
      };
      


  onSubmit = e => {  
    // e.preventDefault(); 
    // fetch('http://192.168.10.30/v1/funcionarios', {
    //   method: 'POST',
    //   body: JSON.stringify(this.state),
    //   headers: {
    //     'content-type': 'application/json'
    //   }
    // })
    // .then(response => {
    //   response.json().then(data => {
    //     if (data.success === true) {
    //       console.log('if');
    //       alert(data.message);
    //       window.location.reload(true);
    //     } 
    //     else {
    //       console.log('else');
    //       alert(data.message+' - '+data.data[0].message);
    //     }
    //   })
    //   // console.log(response);
    //   // console.log(this.state);
    // })
    // .catch(err => {
    //   // console.error('Failed retrieving information', err);
    //   console.log('err');
    //   this.setState({ logged: false });
    // });
    alert('Funcionário Avulso Adicionado')
  };

  render() {
    
    return (
      <div className="p-4">
        <div className="modal fade" id="modal-add-funcionario" tabIndex="-1" role="dialog" aria-labelledby="modal-usuario-label" >
          <div className="modal-dialog " role="document">
            <div className="modal-content z-9999">
              <div className="modal-header d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <i className="fas fa-user-plus fa-lg pr-2" />
                  <h6 className="modal-title">Adicionar Funcionário Avulso</h6>
                </div>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span >&times;</span>
                </button>
              </div>


              <div className="modal-body ">
                <form id="form-usuario" onSubmit={this.onSubmit} className="text-left d-flex flex-wrap" method="post" action="">
                  <div class="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="input-nome"><i className="far fa-user  pr-2" ></i>Nome</label>
                      <input type="text" value={this.state.nome} onChange={e => this.setState({ nome: e.target.value })} className="form-control" id="input-nome" name="input-nome" aria-describedby="nomeHelp" required />
                      <div class="valid-tooltip">Looks good!</div><div class="invalid-tooltip">Looks bad!</div>
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="input-cpf"><i className="far fa-address-card  pr-2" ></i>CPF</label>
                      <input type="text" value={this.state.cpf} onChange={e => this.setState({ cpf: e.target.value })} className="form-control" id="input-cpf" name="input-cpf" aria-describedby="cpfHelp" data-minlength="14" required />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="input-rg"><i className="far fa-address-card  pr-2" ></i>RG</label>
                      <input type="text" value={this.state.rg} onChange={e => this.setState({ rg: e.target.value })} className="form-control" id="input-rg" name="input-rg" aria-describedby="rgHelp" data-minlength="10" required />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="input-email"><i className="far fa-envelope  pr-2" ></i>Email</label>
                      <input type="email" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} className="form-control" id="input-email" name="input-email" aria-describedby="emailHelp" required/>
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="input-gh"><i className="far fa-envelope  pr-2" ></i>GH</label>
                      <input type="email" value={this.state.gh} onChange={e => this.setState({ gh: e.target.value })} className="form-control" id="input-gh" name="input-gh" aria-describedby="emailHelp" required/>
                    </div>
                    <div className="form-group mb-0">
                      <button type="button" className="btn btn-danger mr-2" data-dismiss="modal">
                        <i className="fa fa-times  pr-2"  />Fechar
                      </button>
                      <button id="btn-conta" type="submit" className="btn btn-primary" >
                        <i className="fa fa-plus  pr-2" />Salvar
                      </button>
                    </div>
                  </div>
                </form>        
              </div>

              {/* <div className="modal-footer">
                
              </div> */}



            </div>
          </div>
        </div>


      </div> 
    )
  }
}




// ModalUsuario.propTypes = {
//   name: PropTypes.string.isRequired,
// };

export default ModalAddFuncionario;