import React from 'react';

import brasao from '../../brasao.gif';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

    
class ModalCA extends React.Component {
  state = {
    epiSelecionado: this.props.epiSelecionado
  };
  
  
  componentDidMount(){   

    html2canvas(document.getElementById("html")).then(canvas => {
      // console.log(canvas);
      document.getElementById("gerar_aqui2").appendChild(canvas);
      // var imgData = canvas.toDataURL('image/png');
      // console.log(imgData);
      // var pdf = new jsPDF();
      // console.log(pdf);
      // pdf.addImage(imgData, 'PNG', 0, 0);
      // pdf.save("download.pdf");
    });

    
  //   html2canvas(input)
  //   .then((canvas) => {
  //     const imgData = canvas.toDataURL('image/png');
  //     const pdf = new jsPDF();
  //     pdf.addImage(imgData, 'PNG', 0, 0);
  //     pdf.save("download.pdf");  
  //   });
  // ;



  }

  componentWillReceiveProps ( nextProps ) {
    html2canvas(document.getElementById("html")).then(canvas => {
      // console.log(canvas);
      document.getElementById("gerar_aqui2").appendChild(canvas);
      // var imgData = canvas.toDataURL('image/png');
      // console.log(imgData);
      // var pdf = new jsPDF();
      // console.log(pdf);
      // pdf.addImage(imgData, 'PNG', 0, 0);
      // pdf.save("download.pdf");
    });

    if ( nextProps.epiSelecionado !== this.state.epiSelecionado ) {
      this.setState({epiSelecionado: nextProps.epiSelecionado});
    }

  }

 

teste = () =>{
  console.log(this.props.epiSelecionado);
  console.log(this.state.epiSelecionado);
}
    
  render() {
    

    return (
      
        <div className="modal fade" id="modal-ca" tabIndex="-1" role="dialog" aria-labelledby="modal-ca-label" >
        
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content z-9999">
              <div className="modal-header d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <i className="fa fa-clipboard-list fa-lg pr-2" />
                  <h6 className="modal-title">Imprimir CA</h6>
      <div onClick={this.teste}>AQUI</div>
                </div>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span >&times;</span>
                </button>
              </div>


              <div id="gerar_aqui" className="modal-body ">



      <div id="html" style={{width: "595px", height: "842px", padding: "55px 35px 55px 35px", background:"white", border: "0.1px solid black", margin: "auto"}}>
        <div className="d-flex align-items-center flex-column">
          <img src={brasao} style={{width: "60px", marginBottom:"5px"}}/>
          <span style={{fontSize: "10px", fontWeight: "900"}}>MINISTÉRIO DO TRABALHO E EMPREGO - MTE</span>
          <span style={{fontSize: "10px", fontWeight: "900"}}>SECRETARIA DE INSPEÇÃO DO TRABALHO - SIT</span>
          <span style={{fontSize: "10px", fontWeight: "900"}}>DEPARTAMENTO DE SEGURANÇA E SAÚDE NO TRABALHO - DSST</span>
          <span style={{fontSize: "10px", fontWeight: "", marginTop: "20px", marginBottom: "20px"}}>EQUIPAMENTO DE PROTEÇÃO INDIVIDUAL</span>
          <span style={{fontSize: "10px", fontWeight: "900"}}>CERTIFICADO DE APROVAÇÃO - CA Nº {this.state.epiSelecionado.NRRegistroCA}</span>
          <span style={{fontSize: "10px", fontWeight: "900", color: "red"}}>{this.state.epiSelecionado.Situacao}</span>
        </div> 

        <div className="d-flex text-left flex-column" style={{marginTop: "10px"}}>
          <div className="d-flex justify-content-between" style={{width: "100%"}}> 
            <span style={{fontSize: "10px"}}><b>Validade: </b>{this.state.epiSelecionado.DataValidade}</span>
            <span style={{fontSize: "10px"}}><b>Nº. do Processo: </b>{this.state.epiSelecionado.NRProcesso}</span>
          </div> 
          <span style={{fontSize: "10px"}}><b>Produto: </b>{this.state.epiSelecionado.Natureza}</span>
          <span style={{fontSize: "10px"}}><b>Equipamento: </b>{this.state.epiSelecionado.NomeEquipamento}</span>
          <span style={{fontSize: "10px"}}><b>Descrição: </b>{this.state.epiSelecionado.DescricaoEquipamento}</span>
          
          <span style={{fontSize: "10px", marginTop:"15px"}}><b>Marcação do CA: </b>{this.state.epiSelecionado.MarcaCA}</span>
          <span style={{fontSize: "10px"}}><b>Referências: </b>{this.state.epiSelecionado.Referencia}</span>
          <span style={{fontSize: "10px"}}><b>Empresa: </b>{this.state.epiSelecionado.RazaoSocial}</span>
          <div>              
            <span style={{fontSize: "10px"}}><b>CNPJ: </b>{this.state.epiSelecionado.CNPJ}</span>
            <span style={{fontSize: "10px", marginLeft: "10px"}}><b>CNAE: </b>{}</span>
          </div>
          <span style={{fontSize: "10px"}}><b>Endereço: </b>{}</span>          
          <div className="d-flex justify-content-between" style={{width: "100%"}}> 
            <span style={{fontSize: "10px"}}><b>Bairro: </b>{}</span>
            <span style={{fontSize: "10px"}}><b>CEP: </b>{}</span>
          </div> 
          <div className="d-flex justify-content-between" style={{width: "100%"}}> 
            <span style={{fontSize: "10px"}}><b>Cidade: </b>{}</span>
            <span style={{fontSize: "10px"}}><b>UF: </b>{}</span>
          </div> 
        </div> 
      </div>






           
              </div>     



              <div id="gerar_aqui2" >
              </div>

            </div>
          </div>
        </div>


    )
  }
}




export default ModalCA;