
import React, { Component } from 'react';

import Step from '../../atoms/Step';
import { Steps } from './Styles';

export default class StepList extends Component {
  render() {
    return (
      <Steps>
        <Step
          posicao={1}
          posicaoAtual={this.props.posicaoAtual}
          texto={"Validação"} />

        <Step
          posicao={2}
          posicaoAtual={this.props.posicaoAtual}
          texto={"Credenciais"} />

        <Step
          posicao={3}
          posicaoAtual={this.props.posicaoAtual}
          texto={"Cadastro"} />
      </Steps>
    )
  }
}
