import React, { Component } from 'react';

import { Title } from './styles';

export default class Index extends Component {
  render() {
    return (
      <Title>
        <h1>{this.props.titulo}</h1>
        { this.props.subtitulo && (<p> {this.props.subtitulo} </p>)}
      </Title>
    )
  }
}
