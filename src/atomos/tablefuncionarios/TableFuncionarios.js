import React from 'react';
import $ from 'jquery';
import InputMask from 'react-input-mask';
// import PropTypes from 'prop-types';

class TableFuncionarios extends React.Component {
  state = {
    lista: this.props.lista,
    listaInicial: this.props.lista,
    search: null,

    nome: '',
    rg: '',
    cpf: '',
    email: '',
    gh: '',
    turno: '',
    sexo: ''
  };

  componentDidUpdate(){
    console.log('did update')
  }
  componentWillUpdate(){
    console.log('will update');
    
  }
  // shouldComponentUpdate(nextProps){
  //   console.log('should')
  //   // console.log(nextProps.lista);
  //   // console.log(this.state.lista);
  //   if(this.state.lista !== nextProps.lista || this.state.search === true){
  //     console.log('TRUE CARAI');
  //     return true;  
  //   }
  //   else{
  //     console.log('FALSIN CARAI');
  //     return false;  
  //   }
  // }

  componentWillReceiveProps(nextProps){
    if(this.state.lista !== nextProps.lista){
      console.log(nextProps);
      console.log(this.state.lista);
      this.setState({ lista : nextProps.lista});  

    } 
    
  }



  
  // componentDidUpdate(){    //entender melhor como esta funcionando e pq esta entranndo 3x aqui e esta barrando a busca
  //   if(this.state.lista !== this.props.lista ){ 
  //     console.log('did ');
  //     this.setState({ lista: this.props.lista });   
  //   }

  //   // console.log(this.props.lista);   
  //   // console.log(this.state.lista);  
  // }
  

 

  // EditarFuncionario = () =>{
  //   if(document.getElementById("conta-cnpj").value.replace(/[./-]/g, "") !== this.state.dadosIniciaisConta.cnpj || 
  //   document.getElementById("conta-cpf").value.replace(/[.-]/g, "") !== this.state.dadosIniciaisConta.cpf || 
  //   document.getElementById("conta-celular").value.replace(/[()-]/g, "") !== this.state.dadosIniciaisConta.celular ||
  //   document.getElementById("conta-cep").value.replace(/[-]/g, "") !== this.state.dadosIniciaisConta.cep ||
  //   document.getElementById("conta-nome").value !== this.state.dadosIniciaisConta.nome || 
  //   document.getElementById("conta-website").value !== this.state.dadosIniciaisConta.website ||
  //   document.getElementById("conta-codigo-atividade").value !== this.state.dadosIniciaisConta.codigoAtividade || 
  //   document.getElementById("conta-email").value !== this.state.dadosIniciaisConta.email ||  
  //   document.getElementById("conta-cidade").value !== this.state.dadosIniciaisConta.cidade ||
  //   document.getElementById("conta-bairro").value !== this.state.dadosIniciaisConta.bairro || 
  //   document.getElementById("conta-estado").value !== this.state.dadosIniciaisConta.estado || 
  //   document.getElementById("conta-numero").value !== this.state.dadosIniciaisConta.numero || 
  //   document.getElementById("conta-rua").value !== this.state.dadosIniciaisConta.rua || 
  //   document.getElementById("conta-senha").value !== this.state.dadosIniciaisConta.senha ||  
  //   document.getElementById("conta-confirma-senha").value !== this.state.dadosIniciaisConta.confirmaSenha || 
  //   document.getElementById("conta-nome-amigavel").value !== this.state.dadosIniciaisConta.nomeAmigavel ||
  //   document.getElementById("conta-razao-social").value !== this.state.dadosIniciaisConta.razaoSocial)
  //   {
  //     document.getElementById("editarConta").parentNode.style.display = "flex";
  //   }
  //   else{
  //     document.getElementById("editarConta").parentNode.style.display = "none";
  //   }
  // }
  
  
  onChange = e => {    
    e.preventDefault();  
    // var search = this.state.search;
    // this.setState({ lista: [ {Nome: "Marcello Minchetti", Turno: "Noturno", Sexo: "Masculino", RG: "16778405", CPF: "10770546617", GH: "123456", Email: "teste@gmail.com"}] });    
    var campo_search = document.getElementById("input-search-funcionario").value;
    

    // var campo_search = "Marcello Minchetti";
    // console.log(campo_search + ' DIGITADO NO INPUT');
    var funcionario_pesquisado = this.state.lista.filter((i) => i.Nome == campo_search || i.RG == campo_search || i.CPF == campo_search || i.Email == campo_search || i.Turno == campo_search || i.Sexo == campo_search || i.GH == campo_search);
    // {funcionario_pesquisado && this.setState({ lista: funcionario_pesquisado })};
    if (funcionario_pesquisado.length > 0){
      this.setState({ search: true });
      this.setState({ lista: funcionario_pesquisado });
      console.log('achou o mane');
      }
    if (campo_search === ''){
      this.setState({ lista: this.state.listaInicial });
    }
    console.log(campo_search);
    
    // if(document.getElementById("input-search-funcionarios").value == ''){
      //   window.location.reload(true);
      // }
      // fetch('http://192.168.10.30/v1/empresas/ID/funcionarios', {
        //   method: 'get',
    //   body: JSON.stringify(),
    //   headers: {
      //     'content-type': 'application/json'
      //   }
      // })
      // .then(response => {
        //   response.json().then(data => {
          //     if (data.success == true) {      
    //     } 
    //     else {
      //       alert(data.message+' - '+data.data[0].message);    
    //     }
    //   });
    // })
    // .catch(err => {
      //   console.error('Failed retrieving information', err);
      //   alert(err);
      // });      
  }
    

  MontarLista = () => this.state.lista.map((value, i) => { //.data
    
    return (
      <tr>
        <td>{i}</td>
        <td><input onClick={e => this.setState({ nome: e.target.value })} type="text" value={value.Nome} className="form-control" id="" name="" aria-describedby="" data-minlength="" /></td>  
        <td><InputMask onClick={e => this.setState({ rg: e.target.value })} mask="99.999.999" type="text" value={value.RG} className="form-control" id="" name="" aria-describedby="" data-minlength="" /></td>  
        <td><InputMask onClick={e => this.setState({ cpf: e.target.value })} mask="999.999.999-99" type="text" value={value.CPF} className="form-control" id="" name="" aria-describedby="" data-minlength="" /></td>  
        <td><input onClick={e => this.setState({ email: e.target.value })} type="text" value={value.Email} className="form-control" id="" name="" aria-describedby="" data-minlength="" /></td>  
        <td><input onClick={e => this.setState({ gh: e.target.value })} type="text" value={value.GH} className="form-control" id="" name="" aria-describedby="" data-minlength="" /></td>  
        <td><input onClick={e => this.setState({ turno : e.target.value })} type="text" value={value.Turno} className="form-control" id="" name="" aria-describedby="" data-minlength="" /></td>  
        <td>
          <select onClick={e => this.setState({ sexo: e.target.value })} type="text" className="form-control" id="" name="" aria-describedby="" data-minlength="">
            <option>{value.Sexo}</option>
            <option>{value.Sexo == "Masculino" ? 'Feminino' : 'Masculino'}</option>
          </select>
        </td>           
        {/* <td>{i}</td>
        <td>{value.Nome}</td>
        <td>{value.RG}</td>
        <td>{value.CPF}</td>
        <td>{value.Email}</td>
        <td>{value.GH}</td>
        <td>{value.Turno}</td>
        <td>{value.Sexo}</td> */}
        <td onClick={() => { this.ClickDelete(value.Id) }}><i className="far fa-trash-alt c-pointer"></i></td>
      </tr>  
    )    
  });   



    ClickDelete = (id) => {  
      var newListaInicial = this.state.listaInicial;
      var newLista = this.state.lista;        

      this.state.listaInicial.forEach((result, index) => {     
        if(result.Id == id) {
          newListaInicial.splice(index, 1);
        }    
      });

      this.state.lista.forEach((result, index) => {
        if(result.Id == id) {
          newLista.splice(index, 1);
        }    
      });  
      this.setState({ lista: newLista });      //descobrir pq n preciso setar o state listaInicial
    }


    Teste = () => {console.log(this.props.lista); }
    Teste2 = () => {console.log(this.state); }

    render(){    
      
      return(  
        <div className="panel mb-4">
        <div onClick={this.Teste}>AQUI PROPS</div>
        <div onClick={this.Teste2}>AQUI STATE</div>
          <div className="panel-heading d-flex justify-content-between align-items-center">
            
            <h6 className="text-left mb-0"><i className="fa fa-user pr-2" aria-hidden="true"></i>Funcionários</h6>
          
            <form id="" className="text-left d-flex align-items-center"  method="post" action="">
              <i class="fas fa-search fa-lg mr-2"></i>
              <input onChange={this.onChange} type="text" aria-describedby="inputGroup-sizing-sm" aria-label="Small" className="form-control" id="input-search-funcionario" name="input-search-funcionario" aria-describedby=""/> {/*value={this.state.search} onChange={e => this.setState({ search: e.target.value })}*/}
            </form>


          </div>
          <div className="panel-body">
            <table id="table_funcionarios" className="table m-0 ">
              <thead className="thead-dark">
                <tr>
                  <th className="text-center">#</th>
                  <th className="text-center">Nome </th>
                  <th className="text-center">RG</th>
                  <th className="text-center">CPF</th>
                  <th className="text-center">Email</th>
                  <th className="text-center">GH</th>
                  <th className="text-center">Turno</th>
                  <th className="text-center">Sexo</th>
                  <th className="text-center"><i class="far fa-trash-alt"></i></th>
                </tr>
              </thead>
              <tbody>           
              {this.MontarLista()}
              </tbody>
            </table>
          </div>
        </div> 


      );
    }

}
export default TableFuncionarios;