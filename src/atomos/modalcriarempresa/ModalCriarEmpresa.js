import React from 'react';
// import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';
import FontAwesome from 'react-fontawesome';


class ModalCriarEmpresa extends React.Component {
  state = {
    cnpj: '',
    nomeAmigavel: '',
    razaoSocial: ''
  };
  
  
  
  onSubmit = e => {  
    e.preventDefault(); 
    // $('#progress-bar').text('Empresa adicionada com sucesso!');
    document.querySelector("#progress-bar").textContent = "Empresa adicionada com sucesso!";

    // $('#progress-bar').fadeIn(2000);
    // setTimeout(function() {$('#progress-bar').fadeOut(2000);}, 2000); //arrumar js

  // e.preventDefault(); 
  // fetch('http://192.168.10.30/v1/empresas', {
  //   method: 'POST',
  //   body: JSON.stringify(this.state),
  //   headers: {
  //     'content-type': 'application/json'
  //   }
  // })
  // .then(response => {
  //   response.json().then(data => {
  //     if (data.success === true) {
  //       alert(data.message);
  //       window.location.reload(true);
  //     } 
  //     else {
  //       alert(data.message+' - '+data.data[0].message);
  //     }
  //   })
  // })
  // .catch(err => {
  //   console.log('err');
  //   this.setState({ logged: false });
  // });
};

render(){
  return(
    <div className="p-4">
    <div className="modal fade" id="modal-criar-empresa" tabIndex="-1" role="dialog" aria-labelledby="modal-usuario-label" >
      <div className="modal-dialog " role="document">
        <div className="modal-content z-9999">
          <div className="modal-header d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <FontAwesome name="user-plus"/>
              <h6 className="modal-title">Criar Empresa</h6>
            </div>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span >&times;</span>
            </button>
          </div>


            <form id="form-usuario" onSubmit={this.onSubmit} className="" action=""> {/*method="post"*/}
          <div className="modal-body text-left d-flex flex-wrap">
           
                <div className="p-3 col-md-6">
                  <label htmlFor="input-cnpj"><FontAwesome name="id-card"/>CNPJ</label>
                  <InputMask mask="99.999.999/9999-99" type="text" value={this.state.cnpj} onChange={e => this.setState({ cnpj: e.target.value })} className="form-control" id="input-cnpj" name="input-cnpj" aria-describedby="cnpjHelp" required />
                </div>
                <div className="p-3 col-md-6">
                  <label htmlFor="input-nome-amigavel"><FontAwesome name="user"/>Nome Amigável</label>
                  <input type="text" value={this.state.nomeAmigavel} onChange={e => this.setState({ nomeAmigavel: e.target.value })} className="form-control" id="input-nome-amigavel" name="input-nome-amigavel" aria-describedby="nomeAmigavelHelp" required />
                </div>
                <div className="p-3 col-md-6">
                  <label htmlFor="input-razao-social"><FontAwesome name="user"/>Razão Social</label>
                  <input type="text" value={this.state.razaoSocial} onChange={e => this.setState({ razaoSocial: e.target.value })} className="form-control" id="input-razao-social" name="input-razao-social" aria-describedby="razaoSocialHelp" required />
                </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-danger mr-2" data-dismiss="modal">
              <FontAwesome name="times"/>Fechar
            </button>
            <button id="btn-conta" type="submit" className="btn btn-primary" >
              <FontAwesome name="plus"/>Salvar 
            </button>
          </div>
            </form>        




        </div>
      </div>
    </div>


  </div> 

  );

}};

// ModalCriarEmpresa.propTypes = {
//   text: PropTypes.string.isRequired,
// };

export default ModalCriarEmpresa;