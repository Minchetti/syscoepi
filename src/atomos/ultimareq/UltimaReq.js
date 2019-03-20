import React from 'react';
// import PropTypes from 'prop-types';
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

  // Teste = () => {console.log(this.state);}

  render(){
    return(
      <div className={this.props.size}>

{/* <div onClick={this.Teste}>AQUI req</div> */}

        <div className={'UltimaReq panel ' + this.props.small}>
          <div className="panel-heading thead-dark">
            <h6 className="text-left mb-0"><i className="fa fa-check-square pr-2" aria-hidden="true"></i>Ultimas Requisições  </h6>
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
                {/* <tr>
                  <td scope="row"><div><img src={abafador} className="thumb" alt="logo" /></div></td>
                  <td><div>125468</div></td>
                  <td><div>195436</div></td>
                  <td><div>Siemens</div></td>
                </tr>
                <tr>
                  <td scope="row"><div><img src={capacete} className="thumb" alt="logo" /></div></td>
                  <td><div>103254</div></td>
                  <td><div>195436</div></td>
                  <td><div>Votorantin</div></td>
                </tr>
                <tr>
                  <td scope="row"><div><img src={bota2} className="thumb" alt="logo" /></div></td>
                  <td><div>013256</div></td>
                  <td><div>195436</div></td>
                  <td><div>Helibras</div></td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div> 



          
        <div className={'UltimaReq panel mb-4 ' + this.props.big}>
          <div className="panel-heading thead-dark">
            <h6 className="text-left mb-0"><i className="fa fa-check-square pr-2" aria-hidden="true"></i>Últimas Requisições</h6>
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
                {/* <tr>
                  <td scope="row"><div><img src={abafador} className="thumb" alt="logo" /></div></td>
                  <td><div>125468</div></td>
                  <td><div>195436</div></td>
                  <td><div>Siemens</div></td>
                  <td><div>012345</div></td>
                  <td><div>Obras</div></td>
                  <td><div>Noturno</div></td>
                  <td><div>Adriano Torres</div></td>
                  <td><div>10/02/2018</div></td>
                  <td><div>01</div></td>
                </tr>
                <tr>
                  <td scope="row"><div><img src={capacete} className="thumb" alt="logo" /></div></td>
                  <td><div>103254</div></td>
                  <td><div>195436</div></td>
                  <td><div>Votorantin</div></td>
                  <td><div>012345</div></td>
                  <td><div>Obras</div></td>
                  <td><div>Noturno</div></td>
                  <td><div>Lucas Andadre</div></td>
                  <td><div>10/02/2018</div></td>
                  <td><div>01</div></td>
                </tr>
                <tr>
                  <td scope="row"><div><img src={bota2} className="thumb" alt="logo" /></div></td>
                  <td><div>013256</div></td>
                  <td><div>195436</div></td>
                  <td><div>Helibras</div></td>
                  <td><div>012345</div></td>
                  <td><div>Obras</div></td>
                  <td><div>Noturno</div></td>
                  <td><div>Julio Faria</div></td>
                  <td><div>10/02/2018</div></td>
                  <td><div>01</div></td>
                </tr> */}
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