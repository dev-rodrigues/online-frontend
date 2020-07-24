import React, { Component } from 'react'

import { Tab, TabContent } from './styles';
import Input from '../Input/Index';


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
          <Input
            type="email"
            placeholder="Informe seu email">
          </Input>

          <label>CPF:</label>

          <Input
            type="text"
            placeholder="Informe seu cpf">
          </Input>

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
