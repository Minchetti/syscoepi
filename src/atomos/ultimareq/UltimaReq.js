import React from 'react';
// import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import Button from '../button';
import capacete from '../../capacete.png';
import bota2 from '../../bota2.png';
import abafador from '../../abafador.png';

// @flow
class UltimaReq extends React.Component {
  state = {
    ultimasRequisicoes: this.props.listaRequisicoesUltimas
  }

  componentWillReceiveProps(nextProps){    
    if(this.state.ultimasRequisicoes !== nextProps.listaRequisicoesUltimas){
      this.setState({ ultimasRequisicoes : nextProps.listaRequisicoesUltimas});   
    }    
  }

  
  montarUltimasReqG = () => this.state.ultimasRequisicoes.map((value) => { 
    console.log("montou");
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
        <td><div>{value.quantidade}</div></td>
      </tr>        
    )
  });

  montarUltimasReqP = () => this.state.ultimasRequisicoes.map((value) => { 
    console.log("montou");
    return (
      <tr>
        <td><div>{value.cod}</div></td>
        <td><div>{value.ca}</div></td>
        <td><div>{value.empresa}</div></td>
      </tr>        
    )
  });

  
  // hahaha = () =>{
  //   document.getElementById("noisx").onmouseover = function(){
  //     console.log("foifff");
  //   }
  // }

  // document.getElementById("ir-requisicoes").style.display = "flex";

  // Teste = () => {console.log(this.state);}

  render(){

    // this.hahaha();
    return(
      <div className={this.props.size}>

{/* <div onClick={this.Teste}>AQUI req</div> */}

        <div className={'UltimaReq panel ' + this.props.small}>
          <div className="panel-heading thead-dark d-flex justify-content-between">
            <h6 className="text-left mb-0"><FontAwesome name="check-square"/>Ultimas Requisições </h6>            
            {/* <div id="noisx">
              <i className="fa fa-plus fa-lg mr-2" aria-hidden="true" ></i>ir
            </div> */}
          </div>
          <div className="panel-body">
            <table className="table m-0">
              <thead className="">
                <tr>
                  {/* <th className="text-center">Thumb</th> */}
                  <th className="text-center">CA</th>
                  <th className="text-center">Código</th>
                  <th className="text-center">Empresa</th>
                </tr>
              </thead>
              <tbody>                
                {this.montarUltimasReqP()}
              </tbody>
            </table>
          </div>
        </div> 



          
        <div className={'UltimaReq panel mb-4 ' + this.props.big}>
          <div className="panel-heading thead-dark">
            <h6 className="text-left mb-0"><FontAwesome name="check-square"/> Últimas Requisições</h6>
          </div>
          <div className="panel-body">
            <table className="table m-0">
              <thead className="">
                <tr>
                  {/* <th className="text-center">Thumb</th> */}
                  <th className="text-center">CA</th>
                  <th className="text-center">Código</th>
                  <th className="text-center">Empresa</th>
                  <th className="text-center">CC</th>
                  <th className="text-center">GH</th>
                  <th className="text-center">Turno</th>
                  <th className="text-center">Funcionário</th>
                  <th className="text-center">Validade</th>
                  <th className="text-center">Quantidade</th>
                </tr>
              </thead>
              <tbody >
                  {this.montarUltimasReqG()}
              </tbody>
            </table>
          </div>
        </div> 






      </div>

)
}



};

// UltimaReq.propTypes = {
//   text: PropTypes.string.isRequired,
// };

export default UltimaReq;