import React from 'react';
import InputMask from 'react-input-mask';
 
// import PropTypes from 'prop-types';

// AUTOCOMPLETE CEP
// $(document).ready(function() {
//   function limpa_formulário_cep() {
//       // Limpa valores do formulário de cep.
//       $("#input-rua").val("");
//       $("#input-bairro").val("");
//       $("#input-cidade").val("");
//       $("#input-estado").val("");
//       // $("#input-ibge").val("");
//   }
  
//   //Quando o campo cep perde o foco.
//   $("#input-cep").blur(function() {

//       //Nova variável "cep" somente com dígitos.
//       var cep = $(this).val().replace(/\D/g, '');

//       //Verifica se campo cep possui valor informado.
//       if (cep != "") {

//           //Expressão regular para validar o CEP.
//           var validacep = /^[0-9]{8}$/;

//           //Valida o formato do CEP.
//           if(validacep.test(cep)) {

//               //Preenche os campos com "..." enquanto consulta webservice.
//               $("#input-logradouro").val("...");
//               $("#input-bairro").val("...");
//               $("#input-municipio").val("...");
//               $("#input-uf").val("...");
//               // $("#input-ibge").val("...");

//               //Consulta o webservice viacep.com.br/
//               $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {

//                   if (!("erro" in dados)) {
//                       //Atualiza os campos com os valores da consulta.
//                       $("#input-logradouro").val(dados.logradouro);
//                       $("#input-bairro").val(dados.bairro);
//                       $("#input-municipio").val(dados.localidade);
//                       $("#input-uf").val(dados.uf);
//                       // $("#input-ibge").val(dados.ibge);
//                   } //end if.
//                   else {
//                       //CEP pesquisado não foi encontrado.
//                       limpa_formulário_cep();
//                       alert("CEP não encontrado.");
//                   }
//               });
//           } //end if.
//           else {
//               //cep é inválido.
//               limpa_formulário_cep();
//               alert("Formato de CEP inválido.");
//           }
//       } //end if.
//       else {
//           //cep sem valor, limpa formulário.
//           limpa_formulário_cep();
//       }
//   });
// });




class ModalUsuario extends React.Component {
  state = {
    nome: '',
    cpf: '',
    email: '',
    celular: '',
    
    nomeAmigavel: '',
    razaoSocial: '',
    cnpj: '',
    codigoAtividade: '',
    site: '',
    cep: '',
    estado: '',
    cidade: '',
    bairro: '',
    rua: '',
    numero: '',

    senha: '',
    confirmaSenha: ''
  };

  componentWillMount(){
    // this.MascaraCampos();
  }
  componentDidMount(){
    this.CarregarDadosConta();
  }

  // MascaraCampos = () => {
  //   $('#input-celular').mask("(99) 9 9999-9999");
  //   $('#input-cpf').mask("999.999.999-99");
  //   $('#input-cnpj').mask("99.999.999/9999-99");

  // }


  CarregarDadosConta = () => {        
    // fetch('http://192.168.10.30/v1/clientes/{id}', {
    //   method: 'get',
    //   body: JSON.stringify(),
    //   headers: {
      //     'content-type': 'application/json'
      //   }
      // })
      // .then(response => {
        //   response.json().then(data => {
          //     if (data.success == true) {   
        //        this.setState({ data });   
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
    var data = [
      {cnpj: '12345678998765', nomeAmigavel:'Empresa 1', razaoSocial: 'Razao1', nome: 'Marcello', cpf: '10770546617', email: 'minchettimarcello@gmail.com'} 
    ]
      this.setState({ nomeAmigavel: data[0].nomeAmigavel });  
      this.setState({ razaoSocial: data[0].razaoSocial });  
      this.setState({ cnpj: data[0].cnpj });   
      this.setState({ nome: data[0].nome});   
      this.setState({ cpf: data[0].cnpj});   
      this.setState({ email: data[0].email});   

    // alert("Dados da conta carregados!") ;
  }
 

  onSubmit = e => {
  
    e.preventDefault(); 
    fetch('http://192.168.10.30/v1/clientes/?', {
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
        } 
        else {
          alert(data.message);
        }
      });
    })
    .catch(err => {
      console.error('Failed retrieving information', err);
      // this.setState({ logged: false });
    });
  };



  // CancelarEditar = () => {
  //   this.setState({ nomeAmigavel: this.state.dadosIniciais.nomeAmigavel });  
  //   this.setState({ razaoSocial: this.state.dadosIniciais.razaoSocial });  
  //   this.setState({ cnpj: this.state.dadosIniciais.cnpj });    
  //   document.getElementById("editarEmpresa").parentNode.style.display = "none";
  // }
 







  render() {
    

    return (
      <div className="p-4 ">
        <div className="modal fade" id="modal-usuario" tabIndex="-1" role="dialog" aria-labelledby="modal-usuario-label" aria-hidden="true">
          <div className="modal-dialog  modal-lg" role="document">
            <div className="modal-content text-dark z-9999">
              <div className="modal-header d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <i className="fa fa-user-circle fa-lg pr-2" aria-hidden="true"/>
                  <h6 className="nome-usuario modal-title">Dados da Conta{/*props.name*/}</h6>
                </div>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>


              <div className="modal-body ">
                <form id="form-usuario" onSubmit={this.onSubmit} className="text-left d-flex flex-wrap" method="post" action="" data-toggle="validator" role="form">
                  <div className="form-group col-md-3 bg-light">
                    <label htmlFor="input-nome"><i className="fa fa-user pr-2" aria-hidden="true"></i>Nome</label>
                    <input type="text" value={this.state.nome} onChange={e => this.setState({ nome: e.target.value })} className="form-control" id="input-nome" aria-describedby="emailHelp" required />
                  </div>
                  <div className="form-group col-md-3 bg-light">
                    <label htmlFor="input-cpf"><i className="fa fa-id-card-o pr-2" aria-hidden="true"></i>CPF</label>
                    <InputMask mask="999.999.999-99" type="text" value={this.state.cpf} onChange={e => this.setState({ cpf: e.target.value })} className="form-control" id="input-cpf" name="input-cpf" aria-describedby="emailHelp" data-minlength="14" required />
                  </div>
                  <div className="form-group col-md-3 bg-light">
                    <label htmlFor="input-email"><i className="far fa-id-card fa-lg pr-2" ></i>Email</label>
                    <input type="text" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} className="form-control" id="input-email" name="input-email" aria-describedby="emailHelp" required />
                  </div>         
                  <div className="form-group col-md-3 bg-light">
                    <label htmlFor="input-celular"><i className="far fa-id-card fa-lg pr-2" ></i>Celular</label>
                    <input type="text" value={this.state.celular} onChange={e => this.setState({ celular: e.target.value })} className="form-control" id="input-celular" name="input-celular" aria-describedby="celularHelp" required />
                  </div>

                  <div className="form-group col-md-3">
                    <label htmlFor="input-nomeAmigavel"><i className="far fa-id-card fa-lg pr-2" ></i>Nome Amigável</label>
                    <input type="text" value={this.state.nomeAmigavel} onChange={e => this.setState({ nomeAmigavel: e.target.value })} className="form-control" id="input-nomeAmigavel" name="input-nomeAmigavel" aria-describedby="nomeAmigavelHelp" required />
                  </div>        
                  <div className="form-group col-md-3">
                    <label htmlFor="input-razaoSocial"><i className="far fa-id-card fa-lg pr-2" ></i>Razão Social</label>
                    <input type="text" value={this.state.razaoSocial} onChange={e => this.setState({ razaoSocial: e.target.value })} className="form-control" id="input-razaoSocial" name="input-razaoSocial" aria-describedby="razaoSocialHelp" required />
                  </div>
                  <div className="form-group col-md-3">
                    <label htmlFor="input-cnpj"><i className="fa fa-id-card-o pr-2" aria-hidden="true"></i>CNPJ</label>
                    <InputMask mask="99.999.999/9999-99" type="text" value={this.state.cnpj} onChange={e => this.setState({ cnpj: e.target.value })} className="form-control" id="input-cnpj" name="input-cnpj" aria-describedby="emailHelp" data-minlength="14" required />
                  </div>
                  <div className="form-group col-md-3">
                    <label htmlFor="input-codigoAtividade"><i className="fa fa-id-card-o pr-2" aria-hidden="true"></i>Código da Atividade</label>
                    <input type="text" value={this.state.codigoAtividade} onChange={e => this.setState({ codigoAtividade: e.target.value })} className="form-control" id="input-codigoAtividade" name="input-codigoAtividade" aria-describedby="emailHelp" data-minlength="14" required />
                  </div>
                  <div className="form-group col-md-3">
                    <label htmlFor="input-site"><i className="fa fa-id-card-o pr-2" aria-hidden="true"></i>WebSite</label>
                    <input type="text" value={this.state.site} onChange={e => this.setState({ site: e.target.value })} className="form-control" id="input-site" name="input-site" aria-describedby="emailHelp" data-minlength="14" required />
                  </div>
                  <div className="form-group col-md-3">
                    <label htmlFor="input-cep"><i className="far fa-id-card fa-lg pr-2" ></i>CEP</label>
                    <input type="text" value={this.state.cep} onChange={e => this.setState({ cep: e.target.value })} className="form-control" id="input-cep" name="input-cep" aria-describedby="cepHelp" required />
                  </div> 
                  <div className="form-group col-md-3">
                    <label htmlFor="input-estado"><i className="far fa-id-card fa-lg pr-2" ></i>Estado</label>
                    <input type="text" value={this.state.estado} onChange={e => this.setState({ estado: e.target.value })} className="form-control" id="input-estado" name="input-estado" aria-describedby="estadoHelp" required />
                  </div>
                  <div className="form-group col-md-3">
                    <label htmlFor="input-cidade"><i className="far fa-id-card fa-lg pr-2" ></i>Cidade</label>
                    <input type="text" value={this.state.cidade} onChange={e => this.setState({ cidade: e.target.value })} className="form-control" id="input-cidade" name="input-cidade" aria-describedby="cidadeHelp" required />
                  </div>               
                  <div className="form-group col-md-3">
                    <label htmlFor="input-bairro"><i className="far fa-id-card fa-lg pr-2" ></i>Bairro</label>
                    <input type="text" value={this.state.bairro} onChange={e => this.setState({ bairro: e.target.value })} className="form-control" id="input-bairro" name="input-bairro" aria-describedby="bairroHelp" required />
                  </div> 
                  <div className="form-group col-md-3">
                    <label htmlFor="input-rua"><i className="far fa-id-card fa-lg pr-2" ></i>Rua</label>
                    <input type="text" value={this.state.rua} onChange={e => this.setState({ rua: e.target.value })} className="form-control" id="input-rua" name="input-rua" aria-describedby="ruaHelp" required />
                  </div> 
                  <div className="form-group col-md-3">
                    <label htmlFor="input-numero"><i className="far fa-id-card fa-lg pr-2" ></i>Numero</label>
                    <input type="text" value={this.state.numero} onChange={e => this.setState({ numero: e.target.value })} className="form-control" id="input-numero" name="input-numero" aria-describedby="numeroHelp" required />
                  </div>

                  <div className="form-group col-md-3">
                    <label htmlFor="input-senha"><i className="fa fa-key pr-2" aria-hidden="true"></i>Senha</label>
                    <input type="password" value={this.state.senha} onChange={e => this.setState({ senha: e.target.value })} className="form-control" id="input-senha" aria-describedby="emailHelp" required/>
                  </div>
                  <div className="form-group col-md-3">
                    <label htmlFor="input-confirma-senha"><i className="fa fa-key pr-2" aria-hidden="true"></i>Confirma Senha</label>
                    <input type="password" value={this.state.confirmaSenha} onChange={e => this.setState({ confirmaSenha: e.target.value })} className="form-control" id="input-confirma-senha" aria-describedby="emailHelp" data-match="#input-senha" data-match-error="Atenção! As senhas não estão iguais." required/> 
                  </div>

                  <div className="form-group mb-0">
                    <button type="button" className="btn btn-danger mr-2" data-dismiss="modal">
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