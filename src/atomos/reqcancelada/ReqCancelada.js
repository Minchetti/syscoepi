import React from 'react';
// import PropTypes from 'prop-types';
import capacete from '../../capacete.png';
import bota2 from '../../bota2.png';
import abafador from '../../abafador.png';

// @flow

class ReqCancelada extends React.Component {
  state = {
    requisicoesCanceladas: this.props.listaRequisicoesCanceladas
  }

  componentWillReceiveProps(nextProps){    
    if(this.state.requisicoesCanceladas !== nextProps.listaRequisicoesCanceladas){
      this.setState({ requisicoesCanceladas : nextProps.listaRequisicoesCanceladas});   
    }    
  }

  
  montarReqCanceladasG = () => this.state.requisicoesCanceladas.map((value) => { 
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

  montarReqCanceladasP = () => this.state.requisicoesCanceladas.map((value) => { 
    return (
      <tr>
        <td><div>{value.cod}</div></td>
        <td><div>{value.ca}</div></td>
        <td><div>{value.empresa}</div></td>
      </tr>        
    )
  });


  render(){
    return(



    <div className={this.props.size + ' ReqCancelada'}>


      <div className={'panel ' + this.props.small}>
        <div className="panel-heading thead-dark">
          <h6 className="text-left mb-0"><i className="fa fa-trash pr-2" aria-hidden="true"></i>Requisições Canceladas  </h6>
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
              {this.montarReqCanceladasP()} 
            </tbody>
          </table>
        </div>
      </div> 


      <div className={'ReqCancelada panel mb-4 ' + this.props.big}>
        <div className="panel-heading thead-dark">
          <h6 className="text-left mb-0"><i className="fa fa-trash pr-2" aria-hidden="true"></i>Requisições Canceladas  </h6>
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
              {this.montarReqCanceladasG()} 
            </tbody>
          </table>
        </div>
      </div> 



    </div>


)
}
}

// ReqCancelada.propTypes = {
//   text: PropTypes.string.isRequired,
// };

export default ReqCancelada;