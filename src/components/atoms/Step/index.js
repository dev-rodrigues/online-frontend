import React, { Component } from 'react';

import { Step } from './styles';

export default class index extends Component {
  render() {
    return (
      <Step selected={this.props.posicao === this.props.posicaoAtual}>
        <span>{this.props.posicao}</span>
        <p>{this.props.texto}</p>
      </Step>
    )
  }
}
