import React from 'react';
import InputMask from 'react-input-mask';
import $ from 'jquery'; 
// import PropTypes from 'prop-types';



    
class ModalAddEpi extends React.Component {
  state = {
    nome: '',
    // cpf: '',
    // rg: '',
    email: '' 
    // gh: ''
  };
  
  // componentWillUpdate(){
  //   alert('will update');
  // }
  // componentWillMount(){
  //   alert('will mount');

  // }
  // componentDidUpdate(){
  //   alert('did update');
  // }
  // shouldComponentUpdate(){
  //   alert('should update');
  // }
  // componentWillReceiveProps(){
  //   alert('will receive props');
  // }
  

  // componentWillReceiveProps(){
  //   this.setState({ empresaId: this.props.empresaId });      //verificar se realmente funcinoou pois esta com tempo errado
  //   console.log(this.props.empresaId);
  //   console.log(this.state.empresaId);
  // }


  MostrarProgresso = () =>{

    
  }


  onSubmit = e => {
    e.preventDefault();

    $('#progress-bar').text('Funcionário adicionado com sucesso!');
    $('#progress-bar').fadeIn(2000);
    setTimeout(function() {$('#progress-bar').fadeOut(2000);}, 2000); 
    

    var dados = {
      empresaId: this.props.empresaId,
      nome: this.state.nome,
      email: this.state.email
    } 

    console.log(dados);

    fetch('http://192.168.10.30/v1/funcionarios', {
      method: 'POST',
      body: JSON.stringify(dados),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => {
      response.json().then(data => {
        if (data.success === true) {
          alert(data.message);
          // window.location.reload(true);
     
        } 
        else {
          alert(data.message+' - '+data.data[0].message);
        }
      })
    })
    .catch(err => {
      console.log('err');
    });
    // alert('Funcionário Avulso Adicionado')
  };

  Teste = () => {console.log(this.props);}
  render() {
    
    // this.props.empresaId;

    return (
      <div className="p-4">
      
        <div className="modal fade" id="modal-add-epi" tabIndex="-1" role="dialog" aria-labelledby="modal-usuario-label" >
          <div className="modal-dialog " role="document">
            <div className="modal-content z-9999">
              <div className="modal-header d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <i className="fa fa-user-plus fa-lg pr-2" />
                  <h6 className="modal-title">Adicionar Epi Avulso</h6>
                  <div onClick={this.Teste}>AQUI</div>
                </div>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span >&times;</span>
                </button>
              </div>


                <form id="form-usuario" onSubmit={this.onSubmit} className="text-left d-flex flex-wrap" method="post" action="">
              <div className="modal-body ">
                  <div class="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="input-nome"><i className="far fa-user pr-2" ></i>Nome</label>
                      <input type="text" value={this.state.nome} onChange={e => this.setState({ nome: e.target.value })} className="form-control" id="input-nome" name="input-nome" aria-describedby="nomeHelp" required />
                      <div class="valid-tooltip">Looks good!</div><div class="invalid-tooltip">Looks bad!</div>
                    </div>
                    {/* <div className="form-group col-md-6">
                      <label htmlFor="input-cpf"><i className="far fa-address-card pr-2" ></i>CPF</label>
                      <InputMask mask="999.999.999-99" type="text" value={this.state.cpf} onChange={e => this.setState({ cpf: e.target.value })} className="form-control" id="input-cpf" name="input-cpf" aria-describedby="cpfHelp" data-minlength="14" required />
                    </div> */}
                    {/* <div className="form-group col-md-6">
                      <label htmlFor="input-rg"><i className="far fa-address-card pr-2" ></i>RG</label>
                      <InputMask mask="99.999.999" type="text" value={this.state.rg} onChange={e => this.setState({ rg: e.target.value })} className="form-control" id="input-rg" name="input-rg" aria-describedby="rgHelp" data-minlength="10" required />
                    </div> */}
                    <div className="form-group col-md-6">
                      <label htmlFor="input-email"><i className="far fa-envelope pr-2" ></i>Email</label>
                      <input type="email" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} className="form-control" id="input-email" name="input-email" aria-describedby="emailHelp" required/>
                    </div>
                    {/* <div className="form-group col-md-6">
                      <label htmlFor="input-gh"><i className="far fa-envelope  pr-2" ></i>GH</label>
                      <input type="email" value={this.state.gh} onChange={e => this.setState({ gh: e.target.value })} className="form-control" id="input-gh" name="input-gh" aria-describedby="emailHelp" required/>
                    </div>                    */}
                  </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger mr-2" data-dismiss="modal">
                  <i className="fa fa-times pr-2"/>Fechar
                </button>
                <button id="btn-conta" type="submit" className="btn btn-primary" >
                  <i className="fa fa-plus pr-2"/>Salvar
                </button>
              </div>
                </form>        




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

export default ModalAddEpi;