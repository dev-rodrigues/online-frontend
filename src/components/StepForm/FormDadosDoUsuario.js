import React, { Component } from 'react'

import { Tab, TabContent } from './styles';

export default class FormDadosDoUsuario extends Component {
  render() {
    return (
      <Tab>
        <TabContent>

          <label>Nome:</label>
          <input placeholder="Informe o nome completo"></input>

          <label>Telefone Comercial:</label>
          <input type="text"></input>

          <label>Telefone Celular:</label>
          <input type="text"></input>

          <label>Localização:</label>
          <input placeholder="Informe sua localização no campus"></input>

          <label>Tipo de Cadastro</label>
          <select>
            <option>Selecione...</option>
              <option>Coordenador</option>
              <option>Outros</option>
          </select>

        </TabContent>
      </Tab>
    )
  }
}
