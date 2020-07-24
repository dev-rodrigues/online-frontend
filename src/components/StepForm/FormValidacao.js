import React, { Component } from 'react'

import { Tab, TabContent } from './styles';

export default class FormValidacao extends Component {

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
          <label>Email:</label>
          <input
            type="email"
            placeholder="Informe seu email"></input>

          <label for="">CPF:</label>
          <input
            type="text"
            placeholder="Informe seu cpf"></input>
        </TabContent>

        <button
          onClick={this.back}
          >Retornar
        </button>

        <button
          onClick={this.continue}
          >Continuar
        </button>
      </Tab>
      )
    }
  }
