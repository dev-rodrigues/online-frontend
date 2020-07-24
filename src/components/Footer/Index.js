import React, { Component } from 'react'

import { Footer } from './Styles';

export default class Index extends Component {
  render() {
    return (
      <Footer className="rodape">
        <p>
          <a href="">Site da COPPETEC</a>
        </p>
        <p>
          <a href="">Ajuda</a>
        </p>
        <p>© 2020, GTIC - Fundação COPPETEC</p>
        <p>Versão 3.6.2</p>
      </Footer>
    )
  }
}
