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
    dadosIniciaisConta: null,

    nome: null,
    cpf: null,
    email: null,
    celular: null,
    
    nomeAmigavel: null,
    razaoSocial: null,
    cnpj: null,
    codigoAtividade: null,
    website: null,
    cep: null,
    estado: null,
    cidade: null,
    bairro: null,
    rua: null,
    numero: null,

    senha: null,
    confirmaSenha: null
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
      {celular: '', codigoAtividade: '', website: '', cep: '', estado: '', cidade: '', bairro: '', rua: '', numero: '', senha: '123456', confirmaSenha: '123456', cnpj: '12345678998765', nomeAmigavel:'Empresa 1', razaoSocial: 'Razao1', nome: 'Marcello', cpf: '10770546617', email: 'minchettimarcello@gmail.com'} 
    ]
      this.setState({ nomeAmigavel: data[0].nomeAmigavel });  
      this.setState({ razaoSocial: data[0].razaoSocial });  
      this.setState({ cnpj: data[0].cnpj });   
      this.setState({ nome: data[0].nome});   
      this.setState({ cpf: data[0].cpf});   
      this.setState({ email: data[0].email});   
      this.setState({ senha: data[0].senha});   
      this.setState({ confirmaSenha: data[0].confirmaSenha});   
      this.setState({ dadosIniciaisConta: data[0]});   

    // alert("Dados da conta carregados!") ;
  }


  EditarConta = () => {   
    // var EmpresaSelecionada = document.getElementById("select-empresas").value;
    
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
    alert("Empresa Alterada !");
  }
 
  onChange = () =>{
    if(document.getElementById("conta-cnpj").value.replace(/[./-]/g, "") !== this.state.dadosIniciaisConta.cnpj || 
       document.getElementById("conta-cpf").value.replace(/[.-]/g, "") !== this.state.dadosIniciaisConta.cpf || 
       document.getElementById("conta-celular").value.replace(/[()-]/g, "") !== this.state.dadosIniciaisConta.celular ||
       document.getElementById("conta-cep").value.replace(/[-]/g, "") !== this.state.dadosIniciaisConta.cep ||
       document.getElementById("conta-nome").value !== this.state.dadosIniciaisConta.nome || 
       document.getElementById("conta-website").value !== this.state.dadosIniciaisConta.website ||
       document.getElementById("conta-codigo-atividade").value !== this.state.dadosIniciaisConta.codigoAtividade || 
       document.getElementById("conta-email").value !== this.state.dadosIniciaisConta.email ||  
       document.getElementById("conta-cidade").value !== this.state.dadosIniciaisConta.cidade ||
       document.getElementById("conta-bairro").value !== this.state.dadosIniciaisConta.bairro || 
       document.getElementById("conta-estado").value !== this.state.dadosIniciaisConta.estado || 
       document.getElementById("conta-numero").value !== this.state.dadosIniciaisConta.numero || 
       document.getElementById("conta-rua").value !== this.state.dadosIniciaisConta.rua || 
       document.getElementById("conta-senha").value !== this.state.dadosIniciaisConta.senha ||  
       document.getElementById("conta-confirma-senha").value !== this.state.dadosIniciaisConta.confirmaSenha || 
       document.getElementById("conta-nome-amigavel").value !== this.state.dadosIniciaisConta.nomeAmigavel ||
       document.getElementById("conta-razao-social").value !== this.state.dadosIniciaisConta.razaoSocial)
    {
      document.getElementById("editarConta").parentNode.style.display = "flex";
    }
    else{
      document.getElementById("editarConta").parentNode.style.display = "none";
    }
  }


  // onSubmit = e => {
  
  //   e.preventDefault(); 
  //   fetch('http://192.168.10.30/v1/clientes/?', {
  //     method: 'post',
  //     body: JSON.stringify(this.state),
  //     headers: {
  //       'content-type': 'application/json'
  //     }
  //   })
  //   .then(response => {
  //     response.json().then(data => {
  //       if (data.success == true) {
  //         alert(data.message);
  //       } 
  //       else {
  //         alert(data.message);
  //       }
  //     });
  //   })
  //   .catch(err => {
  //     console.error('Failed retrieving information', err);
  //     // this.setState({ logged: false });
  //   });
  // };



  CancelarEditar = () => {
    this.setState({ nomeAmigavel: this.state.dadosIniciaisConta.nomeAmigavel });  
    this.setState({ razaoSocial: this.state.dadosIniciaisConta.razaoSocial });  
    this.setState({ cnpj: this.state.dadosIniciaisConta.cnpj });    
    this.setState({ nome: this.state.dadosIniciaisConta.nome });  
    this.setState({ cpf: this.state.dadosIniciaisConta.cpf });  
    this.setState({ email: this.state.dadosIniciaisConta.email });    
    this.setState({ celular: this.state.dadosIniciaisConta.celular });  
    this.setState({ codigoAtividade: this.state.dadosIniciaisConta.codigoAtividade });  
    this.setState({ website: this.state.dadosIniciaisConta.website });    
    this.setState({ cep: this.state.dadosIniciaisConta.cep });  
    this.setState({ estado: this.state.dadosIniciaisConta.estado });  
    this.setState({ cidade: this.state.dadosIniciaisConta.cidade });    
    this.setState({ bairro: this.state.dadosIniciaisConta.bairro });  
    this.setState({ rua: this.state.dadosIniciaisConta.rua });  
    this.setState({ numero: this.state.dadosIniciaisConta.numero }); 
    this.setState({ senha: this.state.dadosIniciaisConta.senha });  
    this.setState({ confirmaSenha: this.state.dadosIniciaisConta.confirmaSenha });    
    document.getElementById("editarConta").parentNode.style.display = "none";
    
  }
 



  
  // Teste = () => {console.log(this.state);}




  render() {
    

    return (
      <div className="p-4 position-absolute">
        <div className="modal fade" id="modal-usuario" tabIndex="-1" role="dialog" aria-labelledby="modal-usuario-label" aria-hidden="true">
          <div className="modal-dialog  modal-lg" role="document">
            <div className="modal-content text-dark z-9999">
              <div className="modal-header d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <i className="far fa-user-circle fa-lg pr-2" aria-hidden="true"/>
                  <h6 className="modal-title">Dados da Conta{/*props.name*/}</h6>
                </div>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>


              <div className="modal-body ">
              {/* <div onClick={this.Teste}>AQUI</div> */}
                <form id="form-usuario" onSubmit={this.onSubmit} onChange={this.onChange} className="text-left d-flex flex-wrap" method="post" action="" role="form"> {/*data-toggle="validator"*/}
                  <p className="w-100">Dados Pessoais</p>
                  <div className=" p-2 col-md-4  d-flex align-items-center flex-wrap ">
                    <label htmlFor="conta-nome"><i className="far fa-user pr-2" aria-hidden="true"></i>Nome</label>
                    <input type="text" value={this.state.nome} onChange={e => this.setState({ nome: e.target.value })} className="form-control" id="conta-nome" aria-describedby="emailHelp" required />
                  </div>
                  <div className=" p-2 col-md-4  d-flex align-items-center flex-wrap">
                    <label htmlFor="conta-email"><i className="fa fa-at pr-2" ></i>Email</label>
                    <input type="text" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} className="form-control" id="conta-email" name="conta-email" aria-describedby="emailHelp" required />
                  </div>         
                  <div className="p-2 col-md-4  d-flex align-items-center flex-wrap">
                    <label htmlFor="conta-cpf"><i className="far fa-id-card pr-2" aria-hidden="true"></i>CPF</label>
                    <InputMask mask="999.999.999-99" type="text" value={this.state.cpf} onChange={e => this.setState({ cpf: e.target.value })} className="form-control" id="conta-cpf" name="conta-cpf" aria-describedby="emailHelp" data-minlength="14" required />
                  </div>
                  <div className=" p-2 col-md-4  d-flex align-items-center flex-wrap">
                    <label htmlFor="conta-celular"><i className="fas fa-mobile-alt pr-2" ></i>Celular</label>
                    <InputMask mask="(99)99999-9999" type="text" value={this.state.celular} onChange={e => this.setState({ celular: e.target.value })} className="form-control" id="conta-celular" name="conta-celular" aria-describedby="celularHelp" required />
                  </div>

                  <p className="mt-4 w-100">Dados Empresariais</p>
                  <div className=" p-2 col-md-4  d-flex align-items-center flex-wrap ">
                    <label htmlFor="conta-nome-amigavel"><i className="far fa-id-card  pr-2" ></i>Nome Amigável</label>
                    <input type="text" value={this.state.nomeAmigavel} onChange={e => this.setState({ nomeAmigavel: e.target.value })} className="form-control" id="conta-nome-amigavel" name="conta-nome-amigavel" aria-describedby="nomeAmigavelHelp" required />
                  </div>        
                  <div className=" p-2 col-md-4  d-flex align-items-center flex-wrap ">
                    <label htmlFor="conta-razao-social"><i className="far fa-id-card  pr-2" ></i>Razão Social</label>
                    <input type="text" value={this.state.razaoSocial} onChange={e => this.setState({ razaoSocial: e.target.value })} className="form-control" id="conta-razao-social" name="conta-razao-social" aria-describedby="razaoSocialHelp" required />
                  </div>
                  <div className=" p-2 col-md-4  d-flex align-items-center flex-wrap ">
                    <label htmlFor="conta-cnpj"><i className="fa fa-id-card-o pr-2" aria-hidden="true"></i>CNPJ</label>
                    <InputMask mask="99.999.999/9999-99" type="text" value={this.state.cnpj} onChange={e => this.setState({ cnpj: e.target.value })} className="form-control" id="conta-cnpj" name="conta-cnpj" aria-describedby="emailHelp" data-minlength="14" required />
                  </div>

                  
                  <div className=" p-2 col-md-4  d-flex align-items-center flex-wrap">
                    <label htmlFor="conta-codigo-atividade"><i className="fa fa-id-card-o pr-2" aria-hidden="true"></i>Código da Atividade</label>
                    <input type="text" value={this.state.codigoAtividade} onChange={e => this.setState({ codigoAtividade: e.target.value })} className="form-control" id="conta-codigo-atividade" name="conta-codigo-atividade" aria-describedby="emailHelp" data-minlength="14" required />
                  </div>
                  <div className=" p-2 col-md-4  d-flex align-items-center flex-wrap ">
                    <label htmlFor="conta-website"><i className="fa fa-id-card-o pr-2" aria-hidden="true"></i>WebSite</label>
                    <input type="text" value={this.state.website} onChange={e => this.setState({ website: e.target.value })} className="form-control" id="conta-website" name="conta-website" aria-describedby="emailHelp" data-minlength="14" required />
                  </div>

                
                  <div className=" p-2 col-md-4  d-flex align-items-center flex-wrap ">
                    <label htmlFor="conta-cep"><i className="far fa-id-card  pr-2"></i>CEP</label>
                    <InputMask mask="99999-999" type="text" value={this.state.cep} onChange={e => this.setState({ cep: e.target.value })} className="form-control" id="conta-cep" name="conta-cep" aria-describedby="cepHelp" required />
                  </div> 
                  <div className=" p-2 col-md-4  d-flex align-items-center flex-wrap">
                    <label htmlFor="conta-estado"><i className="far fa-id-card  pr-2" ></i>Estado</label>
                    <select id="conta-estado" className="form-control" value={this.state.estado} onChange={e => this.setState({ estado: e.target.value })}>
                      <option></option>
                      <option>SP</option>
                      <option>MG</option>
                      <option>SC</option>
                      <option>RJ</option>
                      <option>GO</option>
                      <option>AM</option>
                      <option>MT</option>
                    </select>
                  </div>
                  <div className=" p-2 col-md-4  d-flex align-items-center flex-wrap">
                    <label htmlFor="conta-cidade"><i className="far fa-id-card  pr-2" ></i>Cidade</label>
                    <input type="text" value={this.state.cidade} onChange={e => this.setState({ cidade: e.target.value })} className="form-control" id="conta-cidade" name="conta-cidade" aria-describedby="cidadeHelp" required />
                  </div> 

                  <div className=" p-2 col-md-4  d-flex align-items-center flex-wrap">
                    <label htmlFor="conta-bairro"><i className="far fa-id-card  pr-2" ></i>Bairro</label>
                    <input type="text" value={this.state.bairro} onChange={e => this.setState({ bairro: e.target.value })} className="form-control" id="conta-bairro" name="conta-bairro" aria-describedby="bairroHelp" required />
                  </div> 
                  <div className=" p-2 col-md-4  d-flex align-items-center flex-wrap">
                    <label htmlFor="conta-rua"><i className="far fa-id-card  pr-2" ></i>Rua</label>
                    <input type="text" value={this.state.rua} onChange={e => this.setState({ rua: e.target.value })} className="form-control" id="conta-rua" name="conta-rua" aria-describedby="ruaHelp" required />
                  </div> 
                  <div className=" p-2 col-md-4  d-flex align-items-center flex-wrap">
                    <label htmlFor="conta-numero"><i className="far fa-id-card  pr-2" ></i>Numero</label>
                    <input type="text" value={this.state.numero} onChange={e => this.setState({ numero: e.target.value })} className="form-control" id="conta-numero" name="conta-numero" aria-describedby="numeroHelp" required />
                  </div>

                
                  <p className="mt-4 w-100">Segurança</p>
                  <div className=" p-2 col-md-4  d-flex align-items-center flex-wrap">
                    <label htmlFor="conta-senha"><i className="fa fa-key pr-2" aria-hidden="true"></i>Senha</label>
                    <input type="password" value={this.state.senha} onChange={e => this.setState({ senha: e.target.value })} className="form-control" id="conta-senha" aria-describedby="emailHelp" required/>
                  </div>
                  <div className=" p-2 col-md-4  d-flex align-items-center flex-wrap">
                    <label htmlFor="conta-confirma-senha"><i className="fa fa-key pr-2" aria-hidden="true"></i>Confirma Senha</label>
                    <input type="password" value={this.state.confirmaSenha} onChange={e => this.setState({ confirmaSenha: e.target.value })} className="form-control" id="conta-confirma-senha" aria-describedby="emailHelp" data-match="#conta-senha" data-match-error="Atenção! As senhas não estão iguais." required/> 
                  </div>

                  
                  


                </form>        
              </div>

           

              <div className="d-nonin modal-footer">              
                <button type="button" onClick={this.CancelarEditar} className="btn btn-danger mr-2" > {/*data-dismiss="modal"*/}
                  <i className="fa fa-times pr-2 " aria-hidden="true" />Cancelar
                </button>
                <button onClick={this.EditarConta} id="editarConta" type="submit" className="btn btn-primary" >
                  <i className="fa fa-plus pr-2 " aria-hidden="true"/>Salvar
                </button>
              </div>



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