import React from 'react';
// import PropTypes from 'prop-types';


class ModalUsuario extends React.Component {
  state = {
    nome: '',
    cpf: '',
    celular: '',
    email: '',
    senha: '',
    confirmaSenha: ''
  };

  onSubmit = e => {
    e.preventDefault(); 
    fetch('http://192.168.10.30/v1/clientes/novo', {
      method: 'post',
      body: JSON.stringify(this.state),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => {
      response.json().then(data => {
        if (data.success == true) {
          alert(data.message);
          console.log('CHEGOU');
        } 
        else {
          alert(data.message);
        }
      });
    })
    .catch(err => {
      console.error('Failed retrieving information', err);
      this.setState({ logged: false });
    });
  };

  render() {
    
    return (
      <div className="p-30">
        <div className="modal fade" id="modal-usuario" tabIndex="-1" role="dialog" aria-labelledby="modal-usuario-label" aria-hidden="true">
          <div className="modal-dialog " role="document">
            <div className="modal-content z-9999">
              <div className="modal-header d-flex justify-content-between align-center">
                <div className="d-flex align-center">
                  <i className="fa fa-user-circle fa-lg pr-10" aria-hidden="true"/>
                  <h6 className="nome-usuario modal-title">{/*props.name*/}</h6>
                </div>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>


              <div className="modal-body ">
                <form id="form-usuario" onSubmit={this.onSubmit} className="text-left d-flex flex-wrap" method="post" action="" data-toggle="validator" role="form">
                  <div className="form-group col-md-6">
                    <label htmlFor="input-nome"><i className="fa fa-user pr-2" aria-hidden="true"></i>Nome</label>
                    <input type="text" value={this.state.nome} onChange={e => this.setState({ nome: e.target.value })} className="form-control" id="input-nome" aria-describedby="emailHelp" required />
                    <div className="help-block with-errors"></div>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="input-cpf"><i className="fa fa-id-card-o pr-2" aria-hidden="true"></i>CPF</label>
                    <input type="text" value={this.state.cpf} onChange={e => this.setState({ cpf: e.target.value })} className="form-control" id="input-cpf" name="input-cpf" aria-describedby="emailHelp" data-minlength="14" required />
                    <div className="help-block with-errors"></div>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="input-celular"><i className="fa fa-address-book pr-2" aria-hidden="true" data-minlength="16"></i>Celular</label>
                    <input type="text" value={this.state.celular} onChange={e => this.setState({ celular: e.target.value })} className="form-control" id="input-celular" />
                    <div className="help-block with-errors"></div>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="input-email"><i className="fa fa-envelope pr-2" aria-hidden="true"></i>Email</label>
                    <input type="email" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} className="form-control" id="input-email" aria-describedby="emailHelp" required/>
                    <div className="help-block with-errors"></div>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="input-senha"><i className="fa fa-key pr-2" aria-hidden="true"></i>Senha</label>
                    <input type="password" value={this.state.senha} onChange={e => this.setState({ senha: e.target.value })} className="form-control" id="input-senha" aria-describedby="emailHelp" required/>
                    <div className="help-block with-errors"></div>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="input-confirma-senha"><i className="fa fa-key pr-2" aria-hidden="true"></i>Confirma Senha</label>
                    <input type="password" value={this.state.confirmaSenha} onChange={e => this.setState({ confirmaSenha: e.target.value })} className="form-control" id="input-confirma-senha" aria-describedby="emailHelp" data-match="#input-senha" data-match-error="Atenção! As senhas não estão iguais." required/>
                    <div className="help-block with-errors"></div>
                  </div>
                  <div className="form-group mb-0">
                  <button type="button" className="btn btn-danger mr-10" data-dismiss="modal">
                    <i className="fa fa-times pr-2" aria-hidden="true" />Fechar
                  </button>
                  <button id="btn-conta" type="submit" className="btn btn-primary" disabled>
                    <i className="fa fa-plus pr-2" aria-hidden="true"/>Salvar
                  </button>
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

export default ModalUsuario;