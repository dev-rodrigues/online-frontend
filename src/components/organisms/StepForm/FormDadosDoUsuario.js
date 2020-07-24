import React, { Component } from 'react'

import { Tab, TabContent } from './styles';
import Input from '../../atoms/Input/Index';
import Button from '../../atoms/Button/Index';

export default class FormDadosDoUsuario extends Component {

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

          <label>Nome:</label>
          <Input placeholder="Informe o nome completo"></Input>


          <label>Telefone Comercial:</label>
          <Input placeholder="Informe o seu telefone comercial"></Input>

          <label>Telefone Celular:</label>
          <Input placeholder="Informe o seu telefone celular"></Input>

          <label>Localização:</label>
          <Input placeholder="Informe sua localização no campus"></Input>

          <label>Tipo de Cadastro</label>
          <select>
            <option>Selecione...</option>
              <option>Coordenador</option>
              <option>Outros</option>
          </select>

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
            >Concluir
          </Button>
        </div>

      </Tab>
    )
  }
}
