import React, { Component } from 'react';
import { Steps, Step } from './styles';

export default class StepList extends Component {
  render() {
    return (
      <Steps>
        <Step selected={this.props.posicao === 1}>
          <span>1</span>
          <p>Validação</p>
        </Step>
        <Step selected={this.props.posicao === 2}>
          <span>2</span>
          <p>Credenciais</p>
        </Step>

        <Step selected={this.props.posicao === 3}>
          <span>3</span>
          <p>Cadastro</p>
        </Step>
      </Steps>
    )
  }
}
