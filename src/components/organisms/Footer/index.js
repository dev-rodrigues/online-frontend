import React, { Component } from 'react'

import { Footer } from './Styles';

export default class Index extends Component {
  render() {
    return (
      <Footer className="rodape">
        <p>
          <a href="#">Institucional</a>
        </p>
        <p>
          <a href="http://www.coppetec.coppe.ufrj.br/site/contato.php" target="_blank">Ajuda</a>
        </p>
        <p>© 2020, GTIC - Fundação COPPETEC</p>
        <p>Versão 3.6.2</p>
      </Footer>
    )
  }
}
