import React from 'react';
// import $ from 'jquery';
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

    // primeiroRender: false


  };

  componentDidUpdate(){
    console.log('did update')
  }
  componentWillUpdate(){
    console.log('will update');
  }


  componentWillReceiveProps(nextProps){
    if(this.state.lista !== nextProps.lista){
      this.setState({ lista : nextProps.lista});  
    }     
  }



  

  

 

  // EditarFuncionario = () =>{
  //   if(document.getElementById("funcionario-nome").value !== this.state.dadosIniciaisFuncionario.nome || 
  //     document.getElementById("funcionario-rg").value.replace(/[.]/g, "") !== this.state.dadosIniciaisFuncionario.rg ||
  //     document.getElementById("funcionario-cpf").value.replace(/[.-]/g, "") !== this.state.dadosIniciaisFuncionario.cpf || 
  //     document.getElementById("funcionario-email").value !== this.state.dadosIniciaisFuncionario.email ||  
  //     document.getElementById("funcionario-gh").value !== this.state.dadosIniciaisFuncionario.gh ||
  //     document.getElementById("funcionario-turno").value !== this.state.dadosIniciaisFuncionario.turno ||
  //     document.getElementById("funcionario-sexo").value !== this.state.dadosIniciaisFuncionario.sexo)
  //   {
  //     document.getElementById("editarFuncionario").parentNode.style.display = "flex";
  //   }
  //   else{
  //     document.getElementById("editarFuncionario").parentNode.style.display = "none";
  //   }
  // }
  
  
  onChange = e => {    
    e.preventDefault();  
    // var search = this.state.search;
    // this.setState({ lista: [ {Nome: "Marcello Minchetti", Turno: "Noturno", Sexo: "Masculino", RG: "16778405", CPF: "10770546617", GH: "123456", Email: "teste@gmail.com"}] });    
    var campo_search = document.getElementById("input-search-funcionario").value;

    // var campo_search = "Marcello Minchetti";
    // console.log(campo_search + ' DIGITADO NO INPUT');
    var funcionario_pesquisado = this.state.lista.filter((i) => i.Nome === campo_search || i.RG === campo_search || i.CPF === campo_search || i.Email === campo_search || i.Turno === campo_search || i.Sexo === campo_search || i.GH === campo_search);
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

  // shouldComponentUpdate(){
  //   if(this.state.primeiroRender == false){
  //     return true;  
  //   }
  //   else{
  //     return false;  
  //   }
  // }


  MontarLista = () => this.state.lista.map((value, i) => { //.data

    // this.setState({ nome : value.Nome});  
    // this.setState({ rg : value.RG});  
    // this.setState({ cpf : value.CPF});  
    // this.setState({ email : value.Email});  
    // this.setState({ gh : value.GH});  
    // this.setState({ turno : value.Turno});  
    // this.setState({ sexo : value.Sexo});  


    
    // var nome3 = this.state.nome.concat(value.Nome);
    // var nome2 = nome2.concat(nome3);
    // console.log(nome2);
    // this.setState({ primeiroRender : true});      


    return (
      <tr onChange={this.EditarFuncionario}>
        <td>{i}
          <div className="d-nonin">
            <button type="button" onClick={this.CancelarEditar} className="btn btn-danger mr-2" > {/*data-dismiss="modal"*/}
              <i className="fa fa-times pr-2 " aria-hidden="true" />
            </button>
            <button onClick={this.EditarConta} id="editarFuncionario" type="submit" className="btn btn-primary" >
              <i className="fa fa-check pr-2 " aria-hidden="true"/>
            </button>
          </div>
        </td>
        <td><input onClick={e => this.setState({ nome: e.target.value })} type="text" value={this.state.nome === '' ? (value.nome) : (this.state.nome)} className="form-control" id="funcionario-nome" name="" aria-describedby="" data-minlength="" /></td>  
        <td><InputMask onClick={e => this.setState({ rg: e.target.value })} mask="99.999.999" type="text" value={this.state.rg === '' ? (value.rg) : (this.state.rg)} className="form-control" id="funcionario-rg" name="" aria-describedby="" data-minlength="" /></td>  
        <td><InputMask onClick={e => this.setState({ cpf: e.target.value })} mask="999.999.999-99" type="text" value={this.state.cpf === '' ? (value.cpf) : (this.state.cpf)} className="form-control" id="funcionario-cpf" name="" aria-describedby="" data-minlength="" /></td>  
        <td><input onClick={e => this.setState({ email: e.target.value })} type="text" value={this.state.email === '' ? (value.email) : (this.state.email)} className="form-control" id="funcionario-email" name="" aria-describedby="" data-minlength="" /></td>  
        <td><input onClick={e => this.setState({ gh: e.target.value })} type="text" value={this.state.gh === '' ? (value.gh) : (this.state.gh)} className="form-control" id="funcionario-gh" name="" aria-describedby="" data-minlength="" /></td>  
        <td><input onClick={e => this.setState({ turno : e.target.value })} type="text" value={this.state.turno === '' ? (value.turno) : (this.state.turno)} className="form-control" id="funcionario-turno" name="" aria-describedby="" data-minlength="" /></td>  
        <td>
          <select onClick={e => this.setState({ sexo: e.target.value })} type="text" className="form-control" id="funcionario-sexo" name="" aria-describedby="" data-minlength="">
            <option>{this.state.sexo === '' ? (value.sexo) : (this.state.sexo)}</option>
            <option>{(this.state.sexo === '' ? (value.sexo) : (this.state.sexo)) === "Masculino" ? 'Feminino' : 'Masculino'}</option>
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
        if(result.Id === id) {
          newListaInicial.splice(index, 1);
        }    
      });

      this.state.lista.forEach((result, index) => {
        if(result.Id === id) {
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
                  <th className="text-center"><i className="far fa-trash-alt"></i></th>
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