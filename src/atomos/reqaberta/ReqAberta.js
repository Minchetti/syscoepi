import React from 'react';
// import PropTypes from 'prop-types';
import capacete from '../../capacete.png';
import bota2 from '../../bota2.png';
import abafador from '../../abafador.png';

// @flow
class ReqAberta extends React.Component {
  state = {
    requisicoesAbertas: this.props.listaRequisicoesAbertas
  }

  componentWillReceiveProps(nextProps){    
    if(this.state.requisicoesAbertas !== nextProps.listaRequisicoesAbertas){
      this.setState({ requisicoesAbertas : nextProps.listaRequisicoesAbertas});   
    }    
  }

  
  montarReqAbertasG = () => this.state.requisicoesAbertas.map((value) => { 
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

  montarReqAbertasP = () => this.state.requisicoesAbertas.map((value) => { 
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
      <div className={this.props.size + ' ReqAberta'}>

        <div className={'panel ' + this.props.small}>
          <div className="panel-heading thead-dark">
            <h6 className="text-left mb-0"><i className="fa fa-folder-open pr-2" aria-hidden="true"></i>Requisições em Aberto  </h6>
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
                {this.montarReqAbertasP()} 
              </tbody>
            </table>
          </div>
        </div> 


        
        <div className={'ReqAberta2 panel mb-4 ' + this.props.big}>
          <div className="panel-heading thead-dark">
            <h6 className="text-left mb-0"><i className="fa fa-folder-open pr-2" aria-hidden="true"></i>Requisições em Aberto  </h6>
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
              <tbody>                
                {this.montarReqAbertasG()} 
              </tbody>
            </table>
          </div>
        </div> 



      </div>

    )
}
}

// ReqAberta.propTypes = {
//   text: PropTypes.string.isRequired,
// };

export default ReqAberta;