import React from 'react';
import PropTypes from 'prop-types';

// @flow
const CriarConta = props => (
 

<div className="p-30">

<div className="modal fade md-lg" id="modal-criar-conta" tabIndex="-1" role="dialog" aria-labelledby="modal-criar-conta-label" aria-hidden="true">
  <div className="modal-dialog modal-lg" role="document">
    <div className="modal-content z-9999">
      <div className="modal-header d-flex justify-content-between align-center">
        <div className="d-flex align-center">
          <i className="fa fa-user-plus fa-lg pr-10" aria-hidden="true"/>
          <h6 className="modal-title" id="exampleModalLabel">Criar Usuário</h6>
        </div>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>


      <div className="modal-body ">
        <form className="text-left d-flex flex-wrap">
          <div className="form-group col-md-6">
            <label for="exampleInputPassword1" className="pr-10"><i className="fa fa-user pr-2" aria-hidden="true"/>CNPJ: </label>
            <input type="text" className="form-control" id="input-cnpj" aria-describedby="emailHelp" placeholder="Ex: 71.340.830/0001-06"/>
          </div>
          <div className="form-group col-md-6">
            <label for="exampleInputPassword1" className="pr-10"><i className="fa fa-user pr-2" aria-hidden="true"/>Nome Amigável: </label>
            <input type="text" className="form-control" id="input-nome-amigavel" aria-describedby="emailHelp" placeholder="Ex: Fitassul"/>
          </div>
          <div className="form-group col-md-6">
            <label for="exampleInputPassword1" className="pr-10"><i className="fa fa-user pr-2" aria-hidden="true"/>Razão Social: </label>
            <input type="text" className="form-control" id="input-razao-social" aria-describedby="emailHelp" placeholder="Ex: Fitassul Comércio LTDFA"/>
          </div>
          <div className="form-group col-md-6">
            <label for="exampleInputPassword1" className="pr-10"><i className="fa fa-building pr-2" aria-hidden="true"/>Logradouro: </label>
            <input type="text" className="form-control" id="input-logradouro" aria-describedby="emailHelp" placeholder="Ex: Rua Silvestre Ferraz"/>
          </div>
          <div className="form-group col-md-6">
            <label for="exampleFormControlSelect1"><i className="fa fa-truck pr-2" aria-hidden="true"></i>Complemento</label>
            <input type="text" className="form-control" id="input-complemento" aria-describedby="emailHelp" placeholder="Ex: Portão Azul "/>
          </div>
          <div className="form-group col-md-6">
            <label for="exampleFormControlSelect1"><i className="fa fa-truck pr-2" aria-hidden="true"></i>Número</label>
            <input type="text" className="form-control" id="input-numero" aria-describedby="emailHelp" placeholder="Ex: 422"/>
          </div>
          <div className="form-group col-md-6">
            <label for="exampleFormControlSelect1"><i className="fa fa-truck pr-2" aria-hidden="true"></i>Bairro</label>
            <input type="text" className="form-control" id="input-bairro" aria-describedby="emailHelp" placeholder="Ex: Centro"/>
          </div>
          <div className="form-group col-md-6">
            <label for="exampleFormControlSelect1"><i className="fa fa-truck pr-2" aria-hidden="true"></i>Municipio</label>
            <input type="text" className="form-control" id="input-municipio" aria-describedby="emailHelp" placeholder="Ex: Itajubá"/>
          </div>
          <div className="form-group col-md-6">
            <label for="exampleFormControlSelect1"><i className="fa fa-truck pr-2" aria-hidden="true"></i>UF</label>
            <input type="text" className="form-control" id="input-uf" aria-describedby="emailHelp" placeholder="Ex: MG"/>
          </div>
          <div className="form-group col-md-6">
            <label for="exampleFormControlSelect1"><i className="fa fa-truck pr-2" aria-hidden="true"></i>CEP</label>
            <input type="text" className="form-control" id="input-cep" aria-describedby="emailHelp" placeholder="Ex: 37.501-143"/>
          </div>
          <div className="form-group col-md-6">
            <label for="exampleFormControlSelect1"><i className="fa fa-truck pr-2" aria-hidden="true"></i>IBGE</label>
            <input type="text" className="form-control" id="input-ibge" aria-describedby="emailHelp" placeholder="EX: 31212121"/>
          </div>
          <div className="form-group col-md-6">
            <label for="exampleFormControlSelect1"><i className="fa fa-truck pr-2" aria-hidden="true"></i>Tipo de Endereço</label>
            <input type="text" className="form-control" id="input-tipo-endereco" aria-describedby="emailHelp" placeholder="Ex: 0"/>
          </div>
          <div className="form-group col-md-6">
            <label for="exampleFormControlSelect1"><i className="fa fa-truck pr-2" aria-hidden="true"></i>Nome</label>
            <input type="text" className="form-control" id="input-nome" aria-describedby="emailHelp" placeholder="Ex: Luciano "/>
          </div>
          <div className="form-group col-md-6">
            <label for="exampleFormControlSelect1"><i className="fa fa-truck pr-2" aria-hidden="true"></i>Email</label>
            <input type="email" className="form-control" id="input-email" aria-describedby="emailHelp" placeholder="Ex: luciano@fitassul.com.br"/>
          </div>
          <div className="form-group col-md-6">
            <label for="exampleFormControlSelect1"><i className="fa fa-truck pr-2" aria-hidden="true"></i>Senha</label>
            <input type="text" className="form-control" id="input-senha" aria-describedby="emailHelp" placeholder="Ex: 123456"/>
          </div>
          <div className="form-group col-md-6">
            <label for="exampleFormControlSelect1"><i className="fa fa-truck pr-2" aria-hidden="true"></i>Confirma Senha</label>
            <input type="text" className="form-control" id="input-confirma-senha" aria-describedby="emailHelp" placeholder="Ex: 123456"/>
          </div>
          {/* <div className="form-group col-md-6">
            <label for="exampleFormControlSelect1">
              <i className="fa fa-clock-o pr-2" aria-hidden="true"></i>Turno
            </label>
            <select className="form-control" id="exampleFormControlSelect1">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div> */}
        </form>        
      </div>


      <div className="modal-footer">
        <button type="button" className="btn btn-danger" data-dismiss="modal">
          <i className="fa fa-times pr-2" aria-hidden="true" />Fechar
        </button>
        <button id="criar-conta" type="button" className="btn btn-primary">
          <i className="fa fa-plus pr-2" aria-hidden="true"/>Salvar
        </button>
      </div>


    </div>
  </div>
</div>



</div> 



);

CriarConta.propTypes = {
  text: PropTypes.string.isRequired,
};

export default CriarConta;