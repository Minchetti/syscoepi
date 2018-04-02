import React from 'react';
// import $ from 'jquery'; 
// import PropTypes from 'prop-types';


// habilitar botao para cadastro e edição

    
    
    class ModalCriarConta extends React.Component {
      state = {
        cnpj: '',
        nomeAmigavel: '',
        razaoSocial: '',
        nome: '',
        cpf: '',
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
        if (data.success === true) {
          alert(data.message);
          window.location.reload(true);
        } 
        else {
          alert('else');
          alert(data.message+' - '+data.data[0].message);
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
        <div className="modal fade" id="modal-criar-conta" tabIndex="-1" role="dialog" aria-labelledby="modal-usuario-label" >
          <div className="modal-dialog " role="document">
            <div className="modal-content z-9999">
              <div className="modal-header d-flex justify-content-between align-center">
                <div className="d-flex align-center">
                  <i className="fas fa-user-plus fa-2x pr-10" />
                  <h6 className="modal-title">Criar Nova Conta</h6>
                </div>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span >&times;</span>
                </button>
              </div>


              <div className="modal-body ">
                <form id="form-usuario" onSubmit={this.onSubmit} className="text-left d-flex flex-wrap needs-validation" method="post" action="" novalidate>
                  <div class="form-row"> 
                    <div className="form-group col-md-6">
                      <label htmlFor="input-cnpj"><i className="far fa-id-card fa-lg pr-2" ></i>CNPJ</label>
                      <input type="text" value={this.state.cnpj} onChange={e => this.setState({ cnpj: e.target.value })} className="form-control" id="input-cnpj" name="input-cnpj" aria-describedby="cnpjHelp" required />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="input-nome-amigavel"><i className="far fa-user fa-lg pr-2" ></i>Nome Amigável</label>
                      <input type="text" value={this.state.nomeAmigavel} onChange={e => this.setState({ nomeAmigavel: e.target.value })} className="form-control" id="input-nome-amigavel" name="input-nome-amigavel" aria-describedby="nomeAmigavelHelp" required />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="input-razao-social"><i className="far fa-user fa-lg pr-2" ></i>Razão Social</label>
                      <input type="text" value={this.state.razaoSocial} onChange={e => this.setState({ razaoSocial: e.target.value })} className="form-control" id="input-razao-social" name="input-razao-social" aria-describedby="razaoSocialHelp" required />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="input-nome"><i className="far fa-user fa-lg pr-2" ></i>Nome</label>
                      <input type="text" value={this.state.nome} onChange={e => this.setState({ nome: e.target.value })} className="form-control" id="input-nome" name="input-nome" aria-describedby="nomeHelp" required />
                      <div class="valid-tooltip">Looks good!</div><div class="invalid-tooltip">Looks bad!</div>
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="input-cpf"><i className="far fa-address-card fa-lg pr-2" ></i>CPF</label>
                      <input type="text" value={this.state.cpf} onChange={e => this.setState({ cpf: e.target.value })} className="form-control" id="input-cpf" name="input-cpf" aria-describedby="cpfHelp" data-minlength="14" required />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="input-email"><i className="far fa-envelope fa-lg pr-2" ></i>Email</label>
                      <input type="email" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} className="form-control" id="input-email" name="input-email" aria-describedby="emailHelp" required/>
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="input-senha"><i className="fa fa-key fa-lg pr-2" ></i>Senha</label>
                      <input type="password" value={this.state.senha} onChange={e => this.setState({ senha: e.target.value })} className="form-control" id="input-senha" name="input-senha" aria-describedby="senhaHelp" required/>
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="input-confirma-senha"><i className="fas fa-key fa-lg pr-2"></i>Confirma Senha</label>
                      <input type="password" value={this.state.confirmaSenha} onChange={e => this.setState({ confirmaSenha: e.target.value })} className="form-control" id="input-confirma-senha" name="input-confirma-senha" aria-describedby="confirmaSenhaHelp" required/> 
                    </div>
                    <div className="form-group mb-0">
                      <button type="button" className="btn btn-danger mr-10" data-dismiss="modal">
                        <i className="fa fa-times fa-lg pr-2"  />Fechar
                      </button>
                      <button id="btn-conta" type="submit" className="btn btn-primary" >
                        <i className="fa fa-plus fa-lg pr-2" />Salvar
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

export default ModalCriarConta;