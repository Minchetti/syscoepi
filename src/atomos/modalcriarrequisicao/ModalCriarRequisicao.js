import React from 'react';



class ModalCriarRequisicao extends React.Component {
  state = {
    tipoReq: null
  }

  handleClick(event){
    this.setState({ tipoReq: event.target.value });  
  }

  
  fechar(fechar){
    this.setState({ tipoReq: fechar }); 
  }
  
  render(){
    
    return(


      <div className="modal fade" id="modal-criar-requisicao" tabIndex="-1" role="dialog" aria-labelledby="modal-criar-requisicao" >
        <div className="modal-dialog " role="document">
          <div className="modal-content z-9999">
            <div className="modal-header d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <i className="fas fa-user-plus fa-lg pr-2" />
                <h6 className="modal-title">Criar Requisição</h6>
              </div>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span >&times;</span>
              </button>
            </div>
  
  
            <div className="modal-body text-left">


                <div class="w-100 justify-content-center btn-group btn-group-toggle" data-toggle="buttons">
                    <button className="btn btn-primary" onClick={this.handleClick.bind(this)} value="1" type="button">Por Funcionário</button>
                    <button className="btn btn-primary" onClick={this.handleClick.bind(this)} value="2" type="button">Por Setor</button>
                </div>

                {this.state.tipoReq == 1 && (<AdicionarPorFuncionario fechar={this.fechar.bind(this)}/>)}
                
                  
            </div>
            
    
  
          </div>
        </div>
      </div>
  
    );
  };
}






class AdicionarPorFuncionario extends React.Component {
  state = {
    funcionarioSelecionado : "",
    localEntrega: "fitassul",
    turnoEntrega: "vespertino",

    episSelecionados: []
  }
    
  selecionou(func) {
    this.setState({ funcionarioSelecionado: func });  
  } 
  selecionouEpi(epi) {
    var episRequisitados = this.state.episSelecionados;
    episRequisitados.push(epi);
    this.setState({ episSelecionados: episRequisitados });  
  }

  onDelEvent(epi) {
    var index = this.state.episSelecionados.indexOf(epi);
    this.state.episSelecionados.splice(index, 1);    
    this.setState({ episSelecionados: this.state.episSelecionados });  
  }


  render(){
    return(
      <div>
        <div className="mt-4">
          <SearchBar busca={"funcionarios"} selecionou={this.selecionou.bind(this)}/>
          {this.state.funcionarioSelecionado !== ""&& (
            <div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <i className="far fa-user pr-2" ></i>Nome:
                  <input type="text" value={this.state.funcionarioSelecionado.nome} className="form-control btn-sm" />
                </div>

                <div className="col-md-6">
                  <i className="far fa-user pr-2" ></i>CC:
                  <input type="text" value={this.state.funcionarioSelecionado.cc} className="form-control btn-sm" />
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-md-6">
                  <i className="far fa-user pr-2" ></i>Local Entrega:
                  <select className="form-control btn-sm" onChange={e => this.setState({ localEntrega: e.target.value })}>
                    <option>Retirar na loja Fitassul</option>      
                    <option>Retirar na loja central</option>           
                  </select>
                </div>

                <div className="col-md-6">
                  <i className="far fa-user pr-2" ></i>Turno Entrega:
                  <select className="form-control btn-sm" onChange={e => this.setState({ turnoEntrega: e.target.value })}>
                    <option>Vespertino</option>      
                    <option>Matutino</option>   
                  </select>
                </div>
              </div>


              {/* <SelecionarEpi/> */}
              
              <SearchBar busca={"epis"} selecionouEpi={this.selecionouEpi.bind(this)}/>
              {this.state.episSelecionados !== "" && (
                
                this.state.episSelecionados.map(epiSelecionado => 
                  
                  <div className="mt-3 row">
                    <div className="col-md-6">
                      <i className="far fa-user pr-2" ></i>Nome:
                      <input type="text" value={epiSelecionado.nome} className="form-control btn-sm" />
                    </div>

                    <div className="col-md-3">
                      <i className="far fa-user pr-2" ></i>CA:
                      <input type="text" value={epiSelecionado.ca} className="form-control btn-sm" />
                    </div>

                    <div className="col-md-3">
                      <i className="far fa-user pr-2" ></i>Qntd:
                      <div className="d-flex align-items-center">
                        <input type="text" value={epiSelecionado.qntd} style={{marginRight: "10px"}}className="form-control btn-sm" />
                        <div onClick={() => this.onDelEvent(epiSelecionado)}>
                          <i class="far fa-times-circle" ></i>
                        </div>
                      </div> 
                    </div>
                  </div>                  
                )
              
              )}


            </div>
          )}

        </div>


        <div className="modal-footer" style={{paddingBottom: "0px", marginTop: "15px"}}>
         <Buttons fechar={this.props.fechar}/>
        </div>
  

      </div>
    );
  };
};



// class AdicionarPorSetor extends React.Component {
//   state = {
//     funcionarioSelecionado : "",
//     localEntrega: "fitassul",
//     turnoEntrega: "vespertino",

//     episSelecionados: []
//   }
    
//   selecionouFuncionario(func) {
//     this.setState({ funcionarioSelecionado: func });  
//   } 
//   selecionouEpi(epi) {
//     var episRequisitados = this.state.episSelecionados;
//     episRequisitados.push(epi);
//     this.setState({ episSelecionados: episRequisitados });  
//   }

//   onDelEvent(epi) {
//     var index = this.state.episSelecionados.indexOf(epi);
//     this.state.episSelecionados.splice(index, 1);    
//     this.setState({ episSelecionados: this.state.episSelecionados });  
//   }


//   render(){
//     return(
//       <div>
//         <div className="mt-4">
//           <SearchBarFuncionarios selecionouFuncionario={this.selecionouFuncionario.bind(this)}/>
//           {this.state.funcionarioSelecionado !== ""&& (
//             <div>
//               <div className="row mt-3">
//                 <div className="col-md-6">
//                   <i className="far fa-user pr-2" ></i>Nome:
//                   <input type="text" value={this.state.funcionarioSelecionado.nome} className="form-control btn-sm" />
//                 </div>

//                 <div className="col-md-6">
//                   <i className="far fa-user pr-2" ></i>CC:
//                   <input type="text" value={this.state.funcionarioSelecionado.cc} className="form-control btn-sm" />
//                 </div>
//               </div>

//               <div className="row mt-3">
//                 <div className="col-md-6">
//                   <i className="far fa-user pr-2" ></i>Local Entrega:
//                   <select className="form-control btn-sm" onChange={e => this.setState({ localEntrega: e.target.value })}>
//                     <option>Retirar na loja Fitassul</option>      
//                     <option>Retirar na loja central</option>           
//                   </select>
//                 </div>

//                 <div className="col-md-6">
//                   <i className="far fa-user pr-2" ></i>Turno Entrega:
//                   <select className="form-control btn-sm" onChange={e => this.setState({ turnoEntrega: e.target.value })}>
//                     <option>Vespertino</option>      
//                     <option>Matutino</option>   
//                   </select>
//                 </div>
//               </div>


//               {/* <SelecionarEpi/> */}
              
//               <SearchBarEpis selecionouEpi={this.selecionouEpi.bind(this)}/>
//               {this.state.episSelecionados !== "" && (
                
//                 this.state.episSelecionados.map(epiSelecionado => 
                  
//                   <div className="mt-3 row">
//                     <div className="col-md-6">
//                       <i className="far fa-user pr-2" ></i>Nome:
//                       <input type="text" value={epiSelecionado.nome} className="form-control btn-sm" />
//                     </div>

//                     <div className="col-md-3">
//                       <i className="far fa-user pr-2" ></i>CA:
//                       <input type="text" value={epiSelecionado.ca} className="form-control btn-sm" />
//                     </div>

//                     <div className="col-md-3">
//                       <i className="far fa-user pr-2" ></i>Qntd:
//                       <div className="d-flex align-items-center">
//                         <input type="text" value={epiSelecionado.qntd} style={{marginRight: "10px"}}className="form-control btn-sm" />
//                         <div onClick={() => this.onDelEvent(epiSelecionado)}>
//                           <i class="far fa-times-circle" ></i>
//                         </div>
//                       </div> 
//                     </div>
//                   </div>                  
//                 )
              
//               )}


//             </div>
//           )}

//         </div>


//         <div className="modal-footer" style={{paddingBottom: "0px", marginTop: "15px"}}>
//          <Buttons fechar={this.props.fechar}/>
//         </div>
  

//       </div>
//     );
//   };
// };





class Buttons extends React.Component {
  state = {
  }
 
  render() {
    
    return (
      <div>
        <button type="button" className="btn btn-danger mr-2" data-dismiss="modal" onClick={() => this.props.fechar(null)}> 
          <i className="fa fa-times pr-2"/>Fechar
        </button>
        <button id="btn-conta" type="submit" className="btn btn-primary">
          <i className="fa fa-check pr-2"/>Finalizar
        </button>        
      </div>
    );
  }
}




class SearchBar extends React.Component {
  state = {
    lista : "",
    searchText: ""
  } 
  handleChange(event) {   
    if (this.props.busca === "funcionarios"){
      var data = [
        {nome: "Marcello Minchetti", rg: "16778405", cpf: "78970546617", email: "teste@gmail.com", gh: "123456", cc: "123456", 
        turno: "vespertino", sexo: "Masculino"},
        {nome: "Rodolfo  Augusto", rg: "16778405", cpf: "78970546617", email: "teste@gmail.com", gh: "123456", cc: "123456", 
        turno: "vespertino", sexo: "Masculino"},
        {nome: "Susi  Ribeiro", rg: "16778405", cpf: "78970546617", email: "teste@gmail.com", gh: "123456", cc: "123456", 
        turno: "vespertino", sexo: "Masculino"}       
      ]
    }
    else if(this.props.busca === "epis"){
      var data = [
        {cod: "13524", nome: "Cotoveleira BreakGlass1", descricao: "Cotoveleira para Obras", validade: "10/10/2025", ca: "0776584", cc: "123456", 
        estoque: "20"},
        {cod: "13524", nome: "Cotoveleira BreakGlass2", descricao: "Cotoveleira para Obras", validade: "10/10/2025", ca: "0776584", cc: "123456", 
        estoque: "20"},
        {cod: "13524", nome: "Cotoveleira BreakGlass3", descricao: "Cotoveleira para Obras", validade: "10/10/2025", ca: "0776584", cc: "123456", 
        estoque: "20"}        
      ]
    }

    this.setState({ searchText: event.target.value });
    this.setState({ lista: data });
    this.setState({ selecionouBool: false });
  }

  selecionouBool(bool) {
    this.setState({ selecionouBool: bool });   //se o usuario ja selecionou um CA na pesquisa some com a tabela de resultados da pesquisa
    this.setState({ searchText: "" });  //limpar o campo de pesquisa qndo o usuario clicar em algum CA pesquisado
  }
  
  render() {
    return (
      <div>
        <div className="row align-items-center">
          <span className="col-md-5"><b>Pesquisa</b></span>
          <div className="col-md-7">
            <input style={{ zIndex: "10", position: "relative" }} className="form-control btn-sm" type="text" value={this.state.searchText} placeholder="Search..." onChange={this.handleChange.bind(this)}/>
          </div>
        </div>
        {(this.state.lista !== "" && this.state.selecionouBool === false && this.state.searchText !== "") 
        && <Table row={this.props.busca} linhas={this.state.lista} selecionou={this.props.selecionou} selecionouBool={this.selecionouBool.bind(this)}/>} 
      </div>
    );
  }
}









// class SearchBarEpis extends React.Component {
//   state = {
//     listaEpis : "",
//     searchText: ""
//   } 
//   handleChange(event) {    
//     var data = [
//       {cod: "13524", nome: "Cotoveleira BreakGlass1", descricao: "Cotoveleira para Obras", validade: "10/10/2025", ca: "0776584", cc: "123456", 
//       estoque: "20"},
//       {cod: "13524", nome: "Cotoveleira BreakGlass2", descricao: "Cotoveleira para Obras", validade: "10/10/2025", ca: "0776584", cc: "123456", 
//       estoque: "20"},
//       {cod: "13524", nome: "Cotoveleira BreakGlass3", descricao: "Cotoveleira para Obras", validade: "10/10/2025", ca: "0776584", cc: "123456", 
//       estoque: "20"}        
//     ];

//     this.setState({ searchText: event.target.value });
//     this.setState({ listaEpis: data });
//     this.setState({ selecionouEpiBool: false });
//   }

//   selecionouEpiBool(bool) {
//     this.setState({ selecionouEpiBool: bool });   //se o usuario ja selecionou um CA na pesquisa some com a tabela de resultados da pesquisa
//     this.setState({ searchText: "" });  //limpar o campo de pesquisa qndo o usuario clicar em algum CA pesquisado
//   }
  

//   render() {
//     return (
//       <div>
//         <div className="mt-4 row align-items-center">
//           <span className="col-md-5"><b>Pesquisa Epis</b></span>
//           <div className="col-md-7">
//             <input style={{ zIndex: "10", position: "relative" }} className="form-control btn-sm" type="text" value={this.state.searchText} placeholder="Search..." onChange={this.handleChange.bind(this)}/>
//           </div>
//         </div>
//         {(this.state.listaEpis !== "" && this.state.selecionouEpiBool === false && this.state.searchText !== "") 
//         && <Table row={"epis"} linhas={this.state.listaEpis} selecionouEpi={this.props.selecionouEpi} selecionouEpiBool={this.selecionouEpiBool.bind(this)}/>} 
//       </div>
//     );
//   }
// }










class Table extends React.Component {

  render() {
    return (
      <div> 
        <div style={{
          opacity: "0.7",
          position: "absolute",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px",
          zIndex: "5",
          backgroundColor: "rgb(255, 255, 255)"
        }}/>   
        <table style={{ zIndex: "10", position: "absolute", boxShadow: "0 6px 12px rgba(0,0,0,.175)", left: "222px" }}>       
          <tbody>
            {this.props.row === "funcionarios" && this.props.linhas.map(linha => <SimpleRow linha={linha} selecionou={this.props.selecionou} selecionouBool={this.props.selecionouBool} />)}
            {this.props.row === "epis" && this.props.linhas.map(linha => <ComplexRow linha={linha} selecionouEpi={this.props.selecionouEpi} selecionouEpiBool={this.props.selecionouEpiBool} />)}
          </tbody>
        </table>
      </div>
    );
  }
}










// class Table2 extends React.Component {

//   render() {
//     return (
//       <div> 
//         <div style={{
//           opacity: "0.7",
//           position: "absolute",
//           top: "0px",
//           right: "0px",
//           bottom: "0px",
//           left: "0px",
//           zIndex: "5",
//           backgroundColor: "rgb(255, 255, 255)"
//         }}/>   
//         <table style={{ zIndex: "10", position: "absolute", boxShadow: "0 6px 12px rgba(0,0,0,.175)", left: "222px" }}>       
//           <tbody>
//             {this.props.linhas.map(linha => 
//               <ComplexRow linha={linha} selecionouEpi={this.props.selecionouEpi} selecionouEpiBool={this.props.selecionouEpiBool} />)}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }






class SimpleRow extends React.Component {
  selecionou() {
    this.props.selecionou(this.props.linha); //passar dados do CA selecionado na pesquisa para componente de cima por props
    this.props.selecionouBool(true); 
  }
  
  render() {
    var linha = [];

    Object.keys(this.props.linha).map((campo) => 
      linha.push(<span className="p-2"> {campo}: <b>{this.props.linha[campo]}</b></span>)
    )   

    return (
      <tr style={{border: "1px solid #ced4da", borderRadius: "5px", backgroundColor: "white" }} className="align-items-start d-flex flex-column p-3" onClick={this.selecionou.bind(this)}>
        {linha}
      </tr>
    )    

  }
}










class ComplexRow extends React.Component {
  state = {
    qntd: ""
  }
  
  selecionouEpi() {
    var props = this.props.linha;
    props.qntd = this.state.qntd;

    this.props.selecionouEpi(props); //passar dados do CA selecionado na pesquisa para componente de cima por props
    this.props.selecionouEpiBool(true);
  }
  render() {
    
    return (
      <tr style={{border: "1px solid #ced4da", borderRadius: "5px", backgroundColor: "white" }} className="align-items-center d-flex p-1">
        <span className="d-flex p-2">Cod:  <b>{this.props.linha.cod}</b></span>
        <span className="d-flex p-2">Nome: <b style={{width: "max-content"}}>{this.props.linha.nome}</b></span>
        <span className="d-flex p-2">CA:  <b>{this.props.linha.ca}</b></span>
        <span className="d-flex p-2">Validade:  <b>{this.props.linha.validade}</b></span>
        <input style={{width: "auto"}} type="text" placeholder="qntd..." className="massAssign form-control m-2" size="3" value={this.state.qntd} onChange={e => this.setState({ qntd: e.target.value }) }></input>
        <button onClick={this.selecionouEpi.bind(this)} className="btn w-100 btn-dark"><b>Adicionar</b></button> {/* onClick={this.onMassAssignEvent.bind(this)} */}
      </tr>
    );
  }
}




export default ModalCriarRequisicao;
