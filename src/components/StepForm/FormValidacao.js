import React, { Component } from 'react'

import { Tab, TabContent } from './styles';

export default class FormValidacao extends Component {
  render() {
    return (
      <Tab>
        <TabContent>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Informe seu email"></input>

          <label for="">CPF:</label>
          <input
            type="text"
            placeholder="Informe seu cpf"></input>
        </TabContent>
      </Tab>
    )
  }
}
