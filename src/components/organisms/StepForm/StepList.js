import React, { Component } from 'react';
import { Steps, Step } from './styles';

export default class StepList extends Component {
  render() {
    return (
      <Steps>
        <Step>
          <span>1</span>
          <p>Validação</p>
        </Step>
        <Step>
          <span>2</span>
          <p>Credenciais</p>
        </Step>

        <Step>
          <span>3</span>
          <p>Cadastro</p>
        </Step>
      </Steps>
    )
  }
}
