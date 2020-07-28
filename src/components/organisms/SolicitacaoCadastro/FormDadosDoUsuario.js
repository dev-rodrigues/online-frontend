import React, { Component } from 'react'
import { Form } from '@unform/web';

import Input from '../../atoms/Input/Index';
import Button from '../../atoms/Button/Index';
import TabContent from '../../molecules/TabContent/Index';

export default class FormDadosDoUsuario extends Component {

  solicitar = e => {
    e.preventDefault();
    console.log(this.props.values);
  }

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <TabContent>
        <TabContent>
          <Form>
            <label>Nome:</label>
            <Input
              name="nome"
              placeholder="Informe o nome completo"
              onChange={handleChange('nome')}
              defaultValue={values.nome} />

            <label>Telefone Comercial:</label>
            <Input
              name="telefone"
              placeholder="Informe o seu telefone comercial"
              onChange={handleChange('telefone')}
              defaultValue={values.telefone} />

            <label>Telefone Celular:</label>
            <Input
              name="celular"
              placeholder="Informe o seu telefone celular"
              onChange={handleChange('celular')}
              defaultValue={values.celular} />

            <label>Localização:</label>
            <Input
              name="localizacao"
              placeholder="Informe sua localização no campus"
              onChange={handleChange('localizacao')}
              defaultValue={values.localizacao} />

            <label>Tipo de Cadastro</label>
            <select>
              <option>Selecione...</option>
                <option>Coordenador</option>
                <option>Outros</option>
            </select>
          </Form>

        </TabContent>

        <div className="botoes">
          <Button
            className="back"
            onClick={this.back}
            >Retornar
          </Button>

          <Button
            onClick={this.solicitar}
            >Concluir
          </Button>
        </div>

      </TabContent>
    )
  }
}
