import React, { Component } from 'react'

import { Tab, TabContent } from './styles';

export class FormValidacao extends Component {

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

          <label>CPF:</label>
          <input
            type="text"
            placeholder="Informe seu cpf">

          </input>
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
            >Continuar
          </button>
        </div>
      </Tab>
      )
    }
  }

export default FormValidacao;
