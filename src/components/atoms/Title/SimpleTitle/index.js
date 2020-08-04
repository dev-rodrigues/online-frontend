import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import { Title } from './Style';

export default class Index extends Component {

  render() {
    return (
      <Title
        margin={this.props.margin}
        size={this.props.size}
        sizeSubtitulo={this.props.sizeSubtitulo}
        align={this.props.align}
        direcao={this.props.direcao}>

        <h1>{this.props.titulo}</h1>
        { this.props.subtitulo && (<p> {this.props.subtitulo} </p>)}

        { this.props.retornar && (
          <div>
            <Link to={this.props.destino}>
              <FiArrowLeft size='20'/>
              Retornar
            </Link>
          </div>
        ) }

        { this.props.avancar && (
          <div>
            <Link to={this.props.destino}>
              <FiArrowRight size='20'/>
              Avançar
            </Link>
          </div>
        )}

      </Title>
    )
  }
}
