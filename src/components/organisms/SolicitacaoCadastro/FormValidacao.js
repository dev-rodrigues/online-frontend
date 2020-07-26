import React, { Component } from 'react'

import Input from '../../atoms/Input/Index';
import Button from '../../atoms/Button/Index';
import TabContent from '../../molecules/TabContent/Index';


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
      <TabContent>
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
          <Button
            className="back"
            onClick={this.back}
            >Retornar
          </Button>

          <Button
            className="continue"
            onClick={this.continue}
            >Continuar
          </Button>
        </div>
      </TabContent>
      )
    }
  }

export default FormValidacao;
