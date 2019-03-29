import React from 'react';
// import PropTypes from 'prop-types';
import capacete from '../../capacete.png';
import bota2 from '../../bota2.png';
import abafador from '../../abafador.png';

// @flow
class AlertaEpi extends React.Component {
  state = {
    episEstoque: this.props.listaAlertasEstoque,
    episUso: this.props.listaAlertasUso,
    // empresa: this.props.empresa
   
  };

  componentWillMount(){    
    // this.carregarEpisEstoque();
    // this.carregarEpisUso();
    // this.montarAlertasEstoque();
  }

  componentWillReceiveProps(nextProps){    
    // console.log('WILL RECEIVE PROPS'); 
    // console.log(nextProps);
    if(this.state.episEstoque !== nextProps.listaAlertasEstoque){
      this.setState({ episEstoque : nextProps.listaAlertasEstoque});   
    }  
    if(this.state.episUso !== nextProps.listaAlertasUso){
      this.setState({ episUso : nextProps.listaAlertasUso});   
    }    
  }



  // Callback = () =>{
  //   // this.carregarEpisEstoque();
  //   // this.carregarEpisUso();
  // }

  
  // componentWillReceiveProps(nextProps){    
  //   if(this.state.empresa !== nextProps){
  //     this.setState({ empresa : nextProps}, this.Callback);   
  //   }   
    
  // }

  


  // carregarEpisEstoque = () =>{
  //   var data2 = [];    
  //   var data = [
  //     {id:"2235", cod:"7899", empresa:"Fitassul", nome: "Cap02 BlackBone", descricao: "Capacete com queixeira", validade: "10/10/2025", minEstoque: "10", estoque: "50", maxEstoque: "99", ca: "0776584", dataArmazenamento: "01/02/2018", dataDevolucao: "01/05/2016", motivoDevolucao: "Pedido errado", cor: "preto", grupo: "Capacetes",  fatorReducao: "Proteção contra impactos médios"},   
  //     {id:"4345", cod:"4566", empresa:"rezende", nome: "SingleFlow Gloves", descricao: "Luvas de malha", validade: "10/10/2025", minEstoque: "10", estoque: "50", maxEstoque: "99", ca:"0771147", dataArmazenamento: "01/02/2018", dataDevolucao:"01/05/2016", motivoDevolucao:"Pedido errado", cor: "Prata", grupo: "Luvas",  fatorReducao: "Proteção contra cortes"},
  //     {id:"1231", cod:"8888", empresa:"duston", nome: "Straight Glass", descricao: "Óculos de poliestinelo", validade: "10/10/2025", minEstoque: "10", estoque: "50", maxEstoque: "99", ca:"0719684", dataArmazenamento: "01/02/2018", dataDevolucao:"01/05/2016", motivoDevolucao:"Pedido errado", cor:"preto", grupo: "Óculos",  fatorReducao: "Proteção contra faíscas e detritos"},
  //     {id:"5786", cod:"2261", empresa:"brumadinho", nome: "Straight Glass 2.0", descricao: "Óculos de poliestinelo reforçado 2x", validade: "10/10/2025", minEstoque: "10", estoque: "50", maxEstoque: "99", ca:"0719684", dataArmazenamento: "01/02/2018", dataDevolucao:"01/05/2016", motivoDevolucao:"Pedido errado", cor:"preto", grupo: "Óculos",  fatorReducao: "Proteção contra faíscas e detritos"},
  //     {id:"1398", cod:"1123", empresa:"Fitassul", nome: "Ponteira BlackPound", descricao: "Ponteira de ferro", validade: "10/10/2025", minEstoque: "10", estoque: "50", maxEstoque: "99", ca: "0776584", dataArmazenamento: "01/02/2018", dataDevolucao: "01/05/2016", motivoDevolucao: "Pedido errado", cor: "preto", grupo: "Ponteiras",  fatorReducao: "Proteção contra pontas"},   
  //   ]    
  //   if(this.state.empresa !== "todas"){  

  //     data.map((value) => {                
  //       if(value.empresa === this.state.empresa){
  //         data2 = data2.concat(value);
  //       }
  //     })
  //     this.setState({ episEstoque: data2 });  
  //   }
  //   else {   
  //     console.log('2');
  //     this.setState({ episEstoque style="  

  verificarAlerta = (validade) => {    
    var now = new Date;
      if((parseInt(validade.slice(6)) - now.getFullYear()) == 1 ){
        console.log("ano q vem ja");
        if((now.getMonth()+1) == 12){
          console.log("ultimo mes do ano estamos");
          if((31 - now.getDate() + parseInt(validade.slice(0,2))) <= 15){
            console.log("FALTA MENOS D 15 DIAS - ALERTA2  !!!");
            return ("alerta");
          }
          else{
            console.log("FALTA MAIS D 15 DIAS2");
          }
        }
        else{
          console.log("VAi VENCER ANO Q VEM AINDA");
        }
       
      }
      else if(now.getFullYear() == parseInt(validade.slice(6))){
        console.log('mesmo ano');
        if( (now.getMonth()+1) == parseInt(validade.slice(3,5))){
          console.log('mes igual da validade');
          if( (parseInt(validade.slice(0,2)) - now.getDate()) > 15){
            console.log("FALTA MAIS D 15 DIAS");
          }
          else if( (parseInt(validade.slice(0,2)) - now.getDate()) <= 0){
            console.log("JA TA VENCIDO");
            return ("alertaB");
          }
          else{            
            console.log("FALTA MENOS D 15 DIAS - ALERTA  !!!");
            return ("alerta");
          }
        }
        else if( (now.getMonth()+1) > parseInt(validade.slice(3,5))){
          console.log("JA VENCEU FAZ TEMPOO2");
          return ("alertaB");
        }
        else if(parseInt(parseInt(validade.slice(3,5))) - (now.getMonth()+1) == 1){
          console.log("1 mes de diferenca");
          if((31 - now.getDate() + parseInt(validade.slice(0,2))) <= 15){
            console.log("FALTA MENOS D 15 DIAS - ALERTA2  !!!");
            return ("alerta");
          }
          else{
            console.log("FALTA MAIS D 15 DIAS2");
          }
        } 
        else{
          console.log("ainda falta mais d 1 mes");
        }       
      }
      else if((parseInt(validade.slice(6)) - now.getFullYear()) > 1 ){        
        console.log("FALTA ANOS");
      }
      else{
        console.log("JA VENCEU FAZ TEMPOO");
        return ("alertaB");
      }            
  }


  montarAlertasEstoque = () => this.state.episEstoque.map((value) => { 
    console.log("montou");
    return (
      <tr>
        <td><div>{value.cod}</div></td>
        <td><div>{value.ca}</div></td>
        <td><div>{value.empresa}</div></td>
        <td><div className={this.verificarAlerta(value.validade)}>{value.validade}</div></td>
        <td><div>{value.estoque}</div></td>
      </tr>        
    )
  });
  
  montarAlertasUso = () => this.state.episUso.map((value) => { 
    return (
      <tr>
        <td><div>{value.cod}</div></td>
        <td><div>{value.ca}</div></td>
        <td><div>{value.empresa}</div></td>
        <td><div>{value.cc}</div></td>
        <td><div>{value.gh}</div></td>
        <td><div>{value.turno}</div></td>
        <td><div>{value.funcionario}</div></td>
        <td><div>{value.validade}</div></td>
      </tr>        
    )
  });

  teste = () =>{
    console.log(this.state);
    console.log(this.props);
  }
  



  render(){
    return(

      <div className="row">
      {/* <div onClick={this.teste}>TEST</div> */}
      {/* <div onClick={this.verificarAlerta}>VERIFICAR ALERTA</div>  */}

        <div className="col-md-5">
          <div className="AlertaEpi panel p-0 mb-4">
            <div className="panel-heading thead-dark">
              <h6 className="text-left mb-0"><i className="fa fa-exclamation-triangle pr-2" aria-hidden="true"></i>Alerta em estoque </h6>
            </div>
            <div className="panel-body">
              <table className="table m-0">
                <thead className="">
                  <tr>
                    <th className="text-center">Cod</th>
                    <th className="text-center">CA</th>
                    <th className="text-center">Empresa</th>
                    <th className="text-center">Validade</th>
                    <th className="text-center">Qtd Estoque</th>
                  </tr>
                </thead>
                <tbody>
                  {this.montarAlertasEstoque()}
                </tbody>
              </table>
            </div>
          </div>
        </div>




        
        <div className="col-md-7">
        
          <div className="AlertaEpi panel p-0 mb-4">
            <div className="panel-heading thead-dark">
              <h6 className="text-left mb-0"><i className="fa fa-exclamation-triangle pr-2" aria-hidden="true"></i>Alerta em uso  </h6>
            </div>
            <div className="panel-body">
              <table className="table m-0">
                <thead className="">
                  <tr>
                    <th className="text-center">Cod</th>
                    <th className="text-center">CA</th>
                    <th className="text-center">Empresa</th>
                    <th className="text-center">CC</th>
                    <th className="text-center">GH </th>
                    <th className="text-center">Turno</th>
                    <th className="text-center">Funcionário</th>
                    <th className="text-center">Validade</th>
                  </tr>
                </thead>
                <tbody>         
                  {this.montarAlertasUso()}                 
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>


    )
  }

}






// AlertaEpi.propTypes = {
//   text: PropTypes.string.isRequired,
// };

export default AlertaEpi;