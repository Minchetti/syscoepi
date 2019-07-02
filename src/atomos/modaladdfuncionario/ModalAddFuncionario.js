import React from 'react';
import InputMask from 'react-input-mask';
import FontAwesome from 'react-fontawesome';
//   
// import PropTypes from 'prop-types';



    
class ModalAddFuncionario extends React.Component {
  state = {
    nome: '',
    cpf: '',
    rg: '',
    email: '', 
    gh: '',
    turno: '',
    sexo: '',
    ativo: ''
  };

  aux = {
    funcAchado: ''
  }
  
  // componentWillUpdate(){
  //   alert('will update');
  // }
  // componentWillMount(){
  //   alert('will mount');

  // }
  componentDidUpdate(){
    // alert('did update');
    console.log('DID');
    this.verificarCPF()
  } 
  // componentWillUpdate(){
  //   // alert('did update');
  //   console.log('WILL');
  //   this.verificarCPF()
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

verificarCPF = () =>{
  this.props.lista.map((value) => {   //laço para varrer o outro a lista e ver se ja existe esse func
    if(value.cpf === this.state.cpf.replace(/[./-]/g, "")) {  //
      document.getElementById("reactiveArea").style.display = "flex";
      document.getElementById("btn-add-salvar").disabled = true;
      document.getElementById("btn-add-fechar").disabled = true;
      this.aux.funcAchado = value;

    }
    else if(this.aux.funcAchado === ''){        
      document.getElementById("reactiveArea").style.display = "none";
    }
    
    return null;
  });
}

naoReativar = () =>{
  document.getElementById("reactiveArea").style.display = "none";
  document.getElementById("btn-add-salvar").disabled = false;
  document.getElementById("btn-add-fechar").disabled = false;
  
  this.apagarCampos();
}


reativar = () =>{
  document.getElementById("reactiveArea").style.display = "none";  
  document.getElementById("btn-add-salvar").disabled = false;
  document.getElementById("btn-add-fechar").disabled = false;
  this.apagarCampos();

  this.props.lista.map((value) => {  
    if(value.cpf === this.state.cpf.replace(/[./-]/g, "")) {  
      value.ativo = true;
    }
    return null;
  });

  console.log(this.props.lista);

  // var EmpresaSelecionada = this.props.empresaId;
    
    // fetch('http://192.168.10.30/v1/cliente/{id}/empresas', {
    //   method: 'get',
    //   body: JSON.stringify(),
    //   headers: {
      //     'content-type': 'application/json'
      //   }
      // })
      // .then(response => {
        //   response.json().then(data => {
          //     if (data.success == true) {   
        //        this.setState({ arrayEmpresas: data });   
    //          } 
    //          else {
      //       alert(data.message+' - '+data.data[0].message);    
    //     }
    //   });
    // })
    // .catch(err => {
    //   console.error('Failed retrieving information', err);
    //   alert(err);
    // });
    
    // $('#progress-bar').text('Funcionário reativado com sucesso!');
    document.querySelector("#progress-bar").textContent = "Funcionário reativado com sucesso!";
    
    // $('#progress-bar').fadeIn(2000);
    // setTimeout(function() {$('#progress-bar').fadeOut(2000);}, 2000); //arumar js
}

apagarCampos = () =>{
  var inputs = document.getElementsByClassName("inputs"); 
  for(var i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  } 
}



  
  onSubmit = e => {
    e.preventDefault();

    var dados = {
      empresaId: this.props.empresaId,
      nome: this.state.nome,
      rg: this.state.rg,
      cpf: this.state.cpf,
      email: this.state.email,
      gh: this.state.gh,
      cc: this.state.cc,
      turno: this.state.turno,
      sexo: this.state.sexo,
      ativo: this.state.ativo      
    } 

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

          
          this.apagarCampos();

          // $('#progress-bar').text('Funcionário adicionado com sucesso!');
          document.querySelector("#progress-bar").textContent = "Funcionário adicionado com sucesso!";
          
          // $('#progress-bar').fadeIn(2000);
          // setTimeout(function() {$('#progress-bar').fadeOut(2000);}, 2000);     //arrumar js
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

  Teste = () => {console.log(this.props)}
  render() {
    
    return (
      <div className="p-4">
      
        <div className="modal fade" id="modal-add-funcionario" tabIndex="-1" role="dialog" aria-labelledby="modal-usuario-label" >
          <div className="modal-dialog " role="document">
            <div className="modal-content z-9999">
              <div className="modal-header d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <FontAwesome name="user-plus"/>
                  <h6 className="modal-title">Adicionar Funcionário Avulso</h6>
                  <div onClick={this.Teste}>AQUI</div>
                </div>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span>&times;</span>
                </button>
              </div>

              <div id="reactiveArea" className="p-3 d-nonin">
                <span>Detectamos que já existe esse CPF cadastrado, deseja reativar? </span>
                <button type="button" className="btn btn-danger mr-2" data-dismiss="" onClick={this.naoReativar}>
                  <FontAwesome name="times"/> Não
                </button>
                <button id="" type="submit" className="btn btn-sm btn-primary" onClick={this.reativar}>
                  <FontAwesome name="check"/> Reativar
                </button>
              </div>


                <form id="form-usuario" onSubmit={this.onSubmit} className="text-left d-flex flex-wrap" method="post" action="">
              <div className="modal-body ">
                  <div class="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="input-nome"><FontAwesome name="user"/>Nome</label>
                      <input type="text" value={this.state.nome} onChange={e => this.setState({ nome: e.target.value })} className="inputs form-control" id="input-nome" name="input-nome" aria-describedby="nomeHelp" required />
                      <div class="valid-tooltip">Looks good!</div><div class="invalid-tooltip">Looks bad!</div>
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="input-cpf"><FontAwesome name="address-card"/>CPF</label>
                      <InputMask mask="999.999.999-99" type="text" value={this.state.cpf} onChange={e => this.setState({ cpf: e.target.value })} className="inputs form-control" id="input-cpf" name="input-cpf" aria-describedby="cpfHelp" minLength="14" pattern=".{14,}" size="14" data-minlength="14" required />
                    </div> 
                    <div className="form-group col-md-6">
                      <label htmlFor="input-rg"><FontAwesome name="address-card"/>RG</label>
                      <InputMask mask="99.999.999" type="text" value={this.state.rg} onChange={e => this.setState({ rg: e.target.value })} className="inputs form-control" id="input-rg" name="input-rg" aria-describedby="rgHelp" data-minlength="10" required />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="input-email"><FontAwesome name="envelope"/>Email</label>
                      <input type="email" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} className="inputs form-control" id="input-email" name="input-email" aria-describedby="emailHelp" required/>
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="input-gh"><FontAwesome name="envelope"/>GH</label>
                      <input type="text" value={this.state.gh} onChange={e => this.setState({ gh: e.target.value })} className="inputs form-control" id="input-gh" name="input-gh" aria-describedby="emailHelp" required/>
                    </div> 
                    <div className="form-group col-md-6">
                      <label htmlFor="input-cc"><FontAwesome name="envelope"/>CC</label>
                      <input type="text" value={this.state.cc} onChange={e => this.setState({ cc: e.target.value })} className="inputs form-control" id="input-cc" name="input-cc" aria-describedby="emailHelp" required/>
                    </div> 
                    <div className="form-group col-md-6">
                      <label htmlFor="input-turno"><FontAwesome name="envelope"/>Turno</label>
                      {/* <input type="text" value={this.state.turno} onChange={e => this.setState({ turno: e.target.value })} className="form-control" id="input-turno" name="input-turno" aria-describedby="emailHelp" required/> */}
                      <select className="inputs custom-select form-control" id="input-turno" name="input-turno" value={this.state.turno} onChange={e => this.setState({ turno: e.target.value })} required>
                        <option value="" selected>Escolha...</option>
                        <option value="diurno">Diurno</option>
                        <option value="matutino">Matutino</option>
                        <option value="vespertino">Vespertino</option>
                        <option value="noturno">Noturno</option>
                      </select>
                    </div> 
                    <div className="form-group col-md-6">
                      <label htmlFor="input-sexo"><FontAwesome name="envelope"/>Sexo</label>
                      {/* <input type="text" value={this.state.sexo} onChange={e => this.setState({ sexo: e.target.value })} className="form-control" id="input-sexo" name="input-sexo" aria-describedby="emailHelp" required/> */}
                      <select className="inputs custom-select form-control" id="input-sexo" name="input-sexo" value={this.state.sexo} onChange={e => this.setState({ sexo: e.target.value })} required>
                        <option value="" selected>Escolha...</option>
                        <option value="masculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                      </select>
                    </div> 
                    <div className="form-group col-md-6">
                      <label htmlFor="input-ativo"><FontAwesome name="envelope"/>Ativo</label>
                      {/* <input type="text" value={this.state.ativo} onChange={e => this.setState({ ativo: e.target.value })} className="form-control" id="input-ativo" name="input-ativo" aria-describedby="emailHelp" required/> */}
                      <select className="inputs custom-select form-control" id="input-ativo" name="input-ativo" value={this.state.ativo} onChange={e => this.setState({ ativo: e.target.value })} required>
                        <option value={true} selected>Ativo</option>
                        <option value={false}>Inativo</option>
                      </select>
                    </div>                   
                  </div>
              </div>
              <div className="modal-footer">
                <button id="btn-add-fechar" type="button" onClick={this.apagarCampos} className="btn btn-danger mr-2" data-dismiss="modal">
                  <FontAwesome name="times"/>Fechar
                </button>
                <button id="btn-add-salvar" type="submit" className="btn btn-primary" >
                  <FontAwesome name="check"/>Salvar
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

export default ModalAddFuncionario;