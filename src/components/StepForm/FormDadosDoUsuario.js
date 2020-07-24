import React, { Component } from 'react'

import { Tab, TabContent } from './styles';

export default class FormDadosDoUsuario extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <Tab>
        <TabContent>

          <label>Nome:</label>
          <input placeholder="Informe o nome completo"></input>

          <label>Telefone Comercial:</label>
          <input
            type="text"
            placeholder="Informe o seu telefone comercial"></input>

          <label>Telefone Celular:</label>
          <input
            type="text"
            placeholder="Informe o seu telefone celular"></input>

          <label>Localização:</label>
          <input
            type="text"
            placeholder="Informe sua localização no campus"></input>

          <label>Tipo de Cadastro</label>
          <select>
            <option>Selecione...</option>
              <option>Coordenador</option>
              <option>Outros</option>
          </select>

        </TabContent>

        <div className="botoes">
          <button
            className="back"
            onClick={this.back}
            >Retornar
          </button>

          <button
            className="continue"
            onClick={this.continue}
            >Concluir
          </button>
        </div>

      </Tab>
    )
  }
}
