import React from 'react';
// import TableFuncionarios from '../tablefuncionarios/TableFuncionarios';
import InputMask from 'react-input-mask';
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

    
    ValidarSenhas = () => {
      if(document.getElementById("input-senha").value !== document.getElementById("input-confirma-senha").value){
        document.getElementById("input-senha").style.border = "1px solid red";
        document.getElementById("input-confirma-senha").style.border = "1px solid red";
      }
      else{
        document.getElementById("input-senha").style.border = "1px solid green";
        document.getElementById("input-confirma-senha").style.border = "1px solid green";
      }
    }
      


  onSubmit = e => {  
    e.preventDefault(); 
    fetch('http://192.168.10.30/v1/clientes/novo', {
      method: 'POST',
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
          alert(data.message+' - '+data.data[0].message);
        }
      })
    })
    .catch(err => {
      // console.error('Failed retrieving information', err);
      console.log('err');
      this.setState({ logged: false });
    });
  };

  render() {
    
    return (
      <div className="p-4">
        <div className="modal fade" id="modal-criar-conta" tabIndex="-1" role="dialog" aria-labelledby="modal-usuario-label" >
          <div className="modal-dialog " role="document">
            <div className="modal-content z-9999">
              <div className="modal-header d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <FontAwesome name="user-plus"/>
                  <h6 className="modal-title">Criar Nova Conta</h6>
                </div>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span >&times;</span>
                </button>
              </div>


              <div className="modal-body ">
                <form id="form-usuario" onSubmit={this.onSubmit} onChange={this.ValidarSenhas} className="text-left d-flex flex-wrap" method="post" action="">
                  <div class="form-row"> 
                    <div className="form-group col-md-6">
                      <label htmlFor="input-cnpj"><FontAwesome name="id-card"/>CNPJ</label>
                      <InputMask mask="99.999.999/9999-99" type="text" value={this.state.cnpj} onChange={e => this.setState({ cnpj: e.target.value })} className="form-control" id="input-cnpj" name="input-cnpj" aria-describedby="cnpjHelp" required />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="input-nome-amigavel"><FontAwesome name="user"/>Nome Amigável</label>
                      <input type="text" value={this.state.nomeAmigavel} onChange={e => this.setState({ nomeAmigavel: e.target.value })} className="form-control" id="input-nome-amigavel" name="input-nome-amigavel" aria-describedby="nomeAmigavelHelp" required />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="input-razao-social"><FontAwesome name="user"/>Razão Social</label>
                      <input type="text" value={this.state.razaoSocial} onChange={e => this.setState({ razaoSocial: e.target.value })} className="form-control" id="input-razao-social" name="input-razao-social" aria-describedby="razaoSocialHelp" required />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="input-nome"><FontAwesome name="user"/>Nome</label>
                      <input type="text" value={this.state.nome} onChange={e => this.setState({ nome: e.target.value })} className="form-control" id="input-nome" name="input-nome" aria-describedby="nomeHelp" required />
                      <div class="valid-tooltip">Looks good!</div><div class="invalid-tooltip">Looks bad!</div>
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="input-cpf"><FontAwesome name="address-card"/>CPF</label>
                      <InputMask mask="999.999.999-99" type="text" value={this.state.cpf} onChange={e => this.setState({ cpf: e.target.value })} className="form-control" id="input-cpf" name="input-cpf" aria-describedby="cpfHelp" data-minlength="14" required />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="input-email"><FontAwesome name="envelope"/>Email</label>
                      <input type="email" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} className="form-control" id="input-email" name="input-email" aria-describedby="emailHelp" required/>
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="input-senha"><FontAwesome name="key"/>Senha</label>
                      <input type="password" value={this.state.senha} onChange={e => this.setState({ senha: e.target.value })} className="form-control" id="input-senha" name="input-senha" aria-describedby="senhaHelp" required/>
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="input-confirma-senha"><FontAwesome name="key"/>Confirma Senha</label>
                      <input type="password" value={this.state.confirmaSenha} onChange={e => this.setState({ confirmaSenha: e.target.value })} className="form-control" id="input-confirma-senha" name="input-confirma-senha" aria-describedby="confirmaSenhaHelp" required/> 
                    </div>
                    <div className="form-group mb-0">
                      <button type="button" className="btn btn-danger mr-2" data-dismiss="modal">
                        <FontAwesome name="times"/>Fechar
                      </button>
                      <button id="btn-criar-conta" type="submit" className="btn btn-primary">
                        <FontAwesome name="plus"/>Salvar
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