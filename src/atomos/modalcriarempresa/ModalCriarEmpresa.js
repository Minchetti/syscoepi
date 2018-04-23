import React from 'react';
import PropTypes from 'prop-types';


class ModalCriarEmpresa extends React.Component {
  state = {
    cnpj: '',
    nomeAmigavel: '',
    razaoSocial: ''
  };
  


onSubmit = e => {  
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
  alert('NOVA EMPRESA CADASTRADA');
};

render(){
  return(
    <div className="p-4">
    <div className="modal fade" id="modal-criar-empresa" tabIndex="-1" role="dialog" aria-labelledby="modal-usuario-label" >
      <div className="modal-dialog " role="document">
        <div className="modal-content z-9999">
          <div className="modal-header d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <i className="fas fa-user-plus fa-lg pr-2" />
              <h6 className="modal-title">Criar Empresa</h6>
            </div>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span >&times;</span>
            </button>
          </div>


          <div className="modal-body ">
            <form id="form-usuario" onSubmit={this.onSubmit} className="text-left d-flex flex-wrap" method="post" action="">
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
                <div className="form-group mb-0">
                  <button type="button" className="btn btn-danger mr-2" data-dismiss="modal">
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

  );

}};

// ModalCriarEmpresa.propTypes = {
//   text: PropTypes.string.isRequired,
// };

export default ModalCriarEmpresa;