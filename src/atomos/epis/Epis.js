
import React from 'react';
// import Table2 from '../table2';
// import Table3 from '../table3';
// import Modal2 from '../modal1';
import Button from '../button';
// import TableEpis from '../tableepis';
import TableEpis2 from '../tableepis2';
// import PreviewFuncionarios from '../previewfuncionarios';
// import ModalCriarEmpresa from '../modalcriarempresa';
import ModalAddEpi from '../modaladdepi';
//   
// import IdUsuarioLogado from '../login/Login.js';
import FontAwesome from 'react-fontawesome';



class Epis extends React.Component {
  state = {
    arrayEmpresas: this.props.listaEmpresas,
    nomeEmpresaSelecionada: localStorage.getItem('pertencente') ? localStorage.getItem('pertencente') : this.props.listaEmpresas[0].nomeAmigavel,
    empresaSelecionadaId: this.props.listaEmpresas[0].empresaId,
    listaEpisDisponiveis: [],
    listaEpisAtribuidos: []
  };
  

  componentWillMount(){
    // this.MontarSelect();     
    // this.CarregarDadosEmpresa();   
  }
  componentDidMount(){
    this.CarregarEpisDisponiveis();   
    this.CarregarEpisAtribuidos();   
  }



  Callback = () =>{
    this.CarregarDadosEmpresa();

    this.CarregarEpisDisponiveis();
    this.CarregarEpisAtribuidos();
  }




  CarregarDadosEmpresa = () => {   

    this.state.arrayEmpresas.map((value) => { //.data
      if (value.nomeAmigavel == this.state.nomeEmpresaSelecionada){
        this.setState({ empresaSelecionadaId: value.empresaId });  
      }
    });
  }






  MontarSelect = () => this.state.arrayEmpresas.map((value) => { //.data
    return (
      <option>{value.nomeAmigavel}</option>
      )
  });



  CarregarEpisDisponiveis = () => {   
    // alert('FUNCIONARIOS');
    // var EmpresaSelecionada = document.getElementById("select-empresas").value;
    
    // fetch('http://192.168.10.30/v1/?', {
    //   method: 'post',
    //   body: JSON.stringify(),
    //   headers: {
      //     'content-type': 'application/json'
      //   }
      // })
      // .then(response => {
        //   response.json().then(data => {
          //     if (data.success === true) {   
            
        //        this.setState({ listaEpisDisponiveis });   
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
    // alert("Funcionarios carregados!") ;

    var data = [
      {id:"1598", cod:"7899", nome: "Cap02 BlackBone", descricao: "Capacete com queixeira", validade: "10/10/2025", minEstoque: "10", estoque: "50", maxEstoque: "99", ca: "0776584", dataArmazenamento: "01/02/2018", dataDevolucao: "01/05/2016", motivoDevolucao: "Pedido errado", cor: "preto", grupo: "Capacetes",  fatorReducao: "Proteção contra impactos médios"},   
      {id:"1591", cod:"4566", nome: "SingleFlow Gloves", descricao: "Luvas de malha", validade: "10/10/2025", minEstoque: "10", estoque: "50", maxEstoque: "99", ca:"0771147", dataArmazenamento: "01/02/2018", dataDevolucao:"01/05/2016", motivoDevolucao:"Pedido errado", cor: "Prata", grupo: "Luvas",  fatorReducao: "Proteção contra cortes"},
      {id:"1593", cod:"1233", nome: "Straight Glass", descricao: "Óculos de poliestinelo", validade: "10/10/2025", minEstoque: "10", estoque: "50", maxEstoque: "99", ca:"0719684", dataArmazenamento: "01/02/2018", dataDevolucao:"01/05/2016", motivoDevolucao:"Pedido errado", cor:"preto", grupo: "Óculos",  fatorReducao: "Proteção contra faíscas e detritos"},
      {id:"1574", cod:"2261", nome: "Straight Glass 2.0", descricao: "Óculos de poliestinelo reforçado 2x", validade: "10/10/2025", minEstoque: "10", estoque: "50", maxEstoque: "99", ca:"0719684", dataArmazenamento: "01/02/2018", dataDevolucao:"01/05/2016", motivoDevolucao:"Pedido errado", cor:"preto", grupo: "Óculos",  fatorReducao: "Proteção contra faíscas e detritos"}
    ]
   
      this.setState({ listaEpisDisponiveis: data });  
  };







  CarregarEpisAtribuidos = () => {   
    // alert('FUNCIONARIOS');
    // var EmpresaSelecionada = document.getElementById("select-empresas").value;
    
    // fetch('http://192.168.10.30/v1/?', {
    //   method: 'post',
    //   body: JSON.stringify(),
    //   headers: {
      //     'content-type': 'application/json'
      //   }
      // })
      // .then(response => {
        //   response.json().then(data => {
          //     if (data.success === true) {   
            
        //        this.setState({ listaEpisAtribuidos });   
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
    // alert("Funcionarios carregados!") ;

    var data = [
      {id:"2598", cod:"0123", nome: "Cotoveleira BreakGlass1", descricao: "Cotoveleira para Obras", validade: "10/10/2025", minEstoque: "10", estoque: "50", maxEstoque: "99", ca: "0776584", dataArmazenamento: "01/02/2018", dataDevolucao: "01/05/2016", motivoDevolucao: "Pedido errado", cor: "preto", grupo: "Capacetes",  fatorReducao: "Proteção contra impactos médios"},   
      {id:"2198", cod:"3171", nome: "Joelheira Ironbox1", descricao: "Joelheira de fibra para reparos", validade: "10/10/2025", minEstoque: "10", estoque: "50", maxEstoque: "99", ca:"0771147", dataArmazenamento: "01/02/2018", dataDevolucao:"01/05/2016", motivoDevolucao:"Pedido errado", cor: "Prata", grupo: "Luvas",  fatorReducao: "Proteção contra cortes"},
      {id:"2298", cod:"9277", nome: "Caneleira Fullsteal1", descricao: "Caneleira de aço", validade: "10/10/2025", minEstoque: "10", estoque: "50", maxEstoque: "99", ca:"0719684", dataArmazenamento: "01/02/2018", dataDevolucao:"01/05/2016", motivoDevolucao:"Pedido errado", cor:"preto", grupo: "Óculos",  fatorReducao: "Proteção contra faíscas e detritos"},
    ]
    var data2 = [
      {id:"1577", cod:"0123", nome: "Cotoveleira BreakGlass2", descricao: "Cotoveleira para Obras", validade: "10/10/2025", minEstoque: "10", estoque: "50", maxEstoque: "99", ca: "0776584", dataArmazenamento: "01/02/2018", dataDevolucao: "01/05/2016", motivoDevolucao: "Pedido errado", cor: "preto", grupo: "Capacetes",  fatorReducao: "Proteção contra impactos médios"},   
      {id:"1555", cod:"3171", nome: "Joelheira Ironbox2", descricao: "Joelheira de fibra para reparos", validade: "10/10/2025", minEstoque: "10", estoque: "50", maxEstoque: "99", ca:"0771147", dataArmazenamento: "01/02/2018", dataDevolucao:"01/05/2016", motivoDevolucao:"Pedido errado", cor: "Prata", grupo: "Luvas",  fatorReducao: "Proteção contra cortes"},
      {id:"1211",cod:"9277", nome: "Caneleira Fullsteal2", descricao: "Caneleira de aço", validade: "10/10/2025", minEstoque: "10", estoque: "50", maxEstoque: "99", ca:"0719684", dataArmazenamento: "01/02/2018", dataDevolucao:"01/05/2016", motivoDevolucao:"Pedido errado", cor:"preto", grupo: "Óculos",  fatorReducao: "Proteção contra faíscas e detritos"},
    ]
    var data3 = [
      {id:"1590", cod:"0123", nome: "Cotoveleira BreakGlass3", descricao: "Cotoveleira para Obras", validade: "10/10/2025", minEstoque: "10", estoque: "50", maxEstoque: "99", ca: "0776584", dataArmazenamento: "01/02/2018", dataDevolucao: "01/05/2016", motivoDevolucao: "Pedido errado", cor: "preto", grupo: "Capacetes",  fatorReducao: "Proteção contra impactos médios"},   
      {id:"0098", cod:"3171", nome: "Joelheira Ironbox3", descricao: "Joelheira de fibra para reparos", validade: "10/10/2025", minEstoque: "10", estoque: "50", maxEstoque: "99", ca:"0771147", dataArmazenamento: "01/02/2018", dataDevolucao:"01/05/2016", motivoDevolucao:"Pedido errado", cor: "Prata", grupo: "Luvas",  fatorReducao: "Proteção contra cortes"},
      {id:"9998", cod:"9277", nome: "Caneleira 3", descricao: "Caneleira de bico", validade: "10/10/2125", minEstoque: "8", estoque: "51", maxEstoque: "97", ca:"1719684", dataArmazenamento: "01/02/2018", dataDevolucao:"01/05/2016", motivoDevolucao:"Pedido errado", cor:"preto", grupo: "Óculos",  fatorReducao: "Proteção contra faíscas e detritos"},
      {id:"9998", cod:"9277", nome: "Caneleira Fullsteal3", descricao: "Caneleira de aço", validade: "10/10/2025", minEstoque: "10", estoque: "50", maxEstoque: "99", ca:"0719684", dataArmazenamento: "01/02/2018", dataDevolucao:"01/05/2016", motivoDevolucao:"Pedido errado", cor:"preto", grupo: "Óculos",  fatorReducao: "Proteção contra faíscas e detritos"}
    ]   


    if (this.state.nomeEmpresaSelecionada === 'Fitassul' ){
      // this.setState({ nomeEmpresaSelecionada: data[0].nomeAmigavel });
      this.setState({ listaEpisAtribuidos: data });  
    }    
    if (this.state.nomeEmpresaSelecionada === 'Helibras' ){
      // this.setState({ nomeEmpresaSelecionada: data2[0].nomeAmigavel });  
      this.setState({ listaEpisAtribuidos: data2 });  
    }
    if (this.state.nomeEmpresaSelecionada === 'Mahle' ){
      // this.setState({ nomeEmpresaSelecionada: data3[0].nomeAmigavel }); 
      this.setState({ listaEpisAtribuidos: data3 });   
    }

    // }  
  };


  // handleMassAssignD (epi){
  //   console.log('chegou');
  // var arrayD = this.state.listaEpisDisponiveis;
  // var arrayDaux = Object.assign([], this.state.listaEpisDisponiveis);
  // var arrayA = this.state.listaEpisAtribuidos;
  // var splices = 0;

  // arrayDaux.map((epi)=> {
  //   var index = arrayD.indexOf(epi);
  //   var qntdPassada = document.getElementsByClassName("massAssign")[index + splices].value; //pega o value da qntd passada digitada
  //   var assignedEpi = Object.assign({}, arrayD[index]);  //seleciona o obj escolhido
  //   var achouIgual = false; //variavel aux pra logica de ver se tem outro registro igual na outra tabela
   
  //   if(qntdPassada !=== ''){

  //     if(assignedEpi.estoque > 0 && qntdPassada < assignedEpi.estoque) {    //se a qntd em estoque eh maior q a qntd passada
  //       arrayD[index].estoque = arrayD[index].estoque - qntdPassada;      //ajustar o estoque D 
        
  //       arrayA.map((value) => {   //laço para varrer o outro array e ver se ja tem um registro com cod igual
  //         if(value.cod === assignedEpi.cod){  //se achar só adicionar no estoque da outra 
  //           value.estoque = parseInt(value.estoque) + parseInt(qntdPassada);          
  //           achouIgual = true;
  //           // this.setState({episAtribuidos: arrayA});
  //         }
  //       });      
  //       if(achouIgual === false){  // se não cria um novo registro desse epi na outra
  //         assignedEpi.estoque = qntdPassada;  //atualiza para a qntd digitada antes de juntar com o arrayA
  //         arrayA = arrayA.concat(assignedEpi);  //concatena o registro passado pro final do arrayA
  //         // this.setState({episAtribuidos: arrayA});
  //       }    
  //     }
  //     else if(assignedEpi.estoque > 0){ 
  //       arrayD.splice(index, 1);   //tirar do array
  //       splices += 1;
  //       // this.setState({episDisponiveis: arrayD});
    
  //       arrayA.map((value) => {   //laço para varrer o outro array e ver se ja tem um registro com cod igual
  //         if(value.cod === assignedEpi.cod){  //se achar só adicionar no estoque da outra 
  //           value.estoque = parseInt(value.estoque) + parseInt(qntdPassada);          
  //           achouIgual = true;
  //         }
  //       });    
  //       if(achouIgual === false){  // se não cria um novo registro desse epi na outra
  //         arrayA = arrayA.concat(assignedEpi);  //concatena o registro passado pro final do arrayA
  //         // this.setState({episAtribuidos: arrayA});
  //       }  
  //     }  
  //   }
  // }); 


  // document.getElementById("table-buttonsD").style.display = "flex";


  // this.setState({listaEpisAtribuidos: arrayA});
  // this.setState({listaEpisDisponiveis: arrayD});
  // console.log('terminou');
  // }



  // handleMassAssignA (epi){
  //   console.log('chegou');  
    
  // var arrayD = this.state.listaEpisDisponiveis;
  // var arrayAaux = Object.assign([], this.state.listaEpisAtribuidos);
  // var arrayA = this.state.listaEpisAtribuidos;
  // var splices = 0;
  // var lengthD = this.state.listaEpisDisponiveis.length; //descobrir qntos registro tem na tabela de cima 

  // arrayAaux.map((epi)=> {
  //   var index = arrayA.indexOf(epi);
  //   var qntdPassada = document.getElementsByClassName("massAssign")[index + splices + lengthD].value; //pega o value da qntd passada digitada
  //   var assignedEpi = Object.assign({}, arrayA[index]);  //seleciona o obj escolhido
  //   var achouIgual = false; //variavel aux pra logica de ver se tem outro registro igual na outra tabela
   
  //   if(qntdPassada !== ''){

  //     if(assignedEpi.estoque > 0 && qntdPassada < assignedEpi.estoque) {    //se a qntd em estoque eh maior q a qntd passada
  //       arrayA[index].estoque = arrayA[index].estoque - qntdPassada;      //ajustar o estoque D 
        
  //       arrayD.map((value) => {   //laço para varrer o outro array e ver se ja tem um registro com cod igual
  //         if(value.cod === assignedEpi.cod){  //se achar só adicionar no estoque da outra 
  //           value.estoque = parseInt(value.estoque) + parseInt(qntdPassada);          
  //           achouIgual = true;
  //           // this.setState({episAtribuidos: arrayA});
  //         }
  //       });      
  //       if(achouIgual === false){  // se não cria um novo registro desse epi na outra
  //         assignedEpi.estoque = qntdPassada;  //atualiza para a qntd digitada antes de juntar com o arrayA
  //         arrayD = arrayD.concat(assignedEpi);  //concatena o registro passado pro final do arrayA
  //         // this.setState({episAtribuidos: arrayA});
  //       }    
  //     }
  //     else if(assignedEpi.estoque > 0){ 
  //       arrayA.splice(index, 1);   //tirar do array
  //       splices += 1;
  //       // this.setState({episDisponiveis: arrayD});
    
  //       arrayD.map((value) => {   //laço para varrer o outro array e ver se ja tem um registro com cod igual
  //         if(value.cod === assignedEpi.cod){  //se achar só adicionar no estoque da outra 
  //           value.estoque = parseInt(value.estoque) + parseInt(qntdPassada);          
  //           achouIgual = true;
  //         }
  //       });    
  //       if(achouIgual === false){  // se não cria um novo registro desse epi na outra
  //         arrayD = arrayD.concat(assignedEpi);  //concatena o registro passado pro final do arrayA
  //         // this.setState({episAtribuidos: arrayA});
  //       }  
  //     }  
  //   }
  // });    


  // document.getElementById("table-buttonsA").style.display = "flex";


  // this.setState({listaEpisAtribuidos: arrayA});
  // this.setState({listaEpisDisponiveis: arrayD});
  // console.log('terminou');
  // }










  PrimeiroEpi = () =>{
    const empresas = this.state.arrayEmpresas;

    if(empresas.length !== 0 ){
      return (
        <div className=" d-flex flex-column">              
        <div className="d-flex mb-3">
          <div className="col-md-4 d-flex align-items-center p-0">
              <select id="select-empresas" className="form-control btn-dark" onChange={e => this.setState({ nomeEmpresaSelecionada: e.target.value },this.Callback)}>
                {this.MontarSelect()}
              </select>
          </div>
          <div className="col-md-4 pl-2 pr-2 align-items-center">            
            <Button class="btn-dark pr-2 w-100 h-100" icon="fa-plus fa-lg mr-2" text="Epi Atribuído" target="#modal-add-epi"/>
          </div>
          <div className="col-md-4 p-0 align-items-center">            
            <Button class="btn-dark pr-2 w-100 h-100" icon="fa-plus fa-lg mr-2" text="Epi Disponível" target="#modal-add-epi"/>
          </div>
        </div>
        
        
        {this.state.listaEpisDisponiveis !== 0 && this.state.listaEpisAtribuidos !== 0 ? (<TableEpis2 nomeEmpresaSelecionada={this.state.nomeEmpresaSelecionada} listaD={this.state.listaEpisDisponiveis} listaA={this.state.listaEpisAtribuidos} />) : (<h1>Cadastre seus primeiros epi's</h1>) } {/*onMassAssign={this.handleMassAssignD.bind(this)} */}
        {/* {this.state.listaEpisDisponiveis != 0 ? (<TableEpis lista={this.state.listaEpisDisponiveis}  />) : (<h1>Cadastre seus primeiros epi's</h1>) } */}


      </div>
      )
    }
    else{
      return(
        <div className="d-flex justify-content-center">
          <h2 className="mr-3">Nenhuma Empresa Cadastrada!</h2>
          {/* <Button class="btn-dark" icon="fa-plus fa-lg mr-1" text="Adicionar Empresa" target="#modal-criar-empresa"/> */}
        </div>
      )      
    }
  }

  Teste = () => {console.log(this.state);}
  
  render() {   

    
    return (
      
      <div id="Epis">
      
        <h4 className="position-absolute m-auto l-0 r-0 t-15 text-white">
          <FontAwesome name="shield"/> Epi's
        </h4>  
               
      {/* <div onClick={this.Teste}>STATE</div> */}
        {this.PrimeiroEpi()}
        
        <ModalAddEpi empresaId={this.state.empresaSelecionadaId}  /> 


      </div>

    );
  }
}

export default Epis;






