import React, { Component } from 'react'
import { Form } from '@unform/web';

import Label from '../../atoms/Label/Index';
import Input from '../../atoms/Input/Index';
import Button from '../../atoms/Button/Index';
import Combobox from '../../atoms/Combobox/Index';

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
      <div>
        <div>
          <Form>
            <Label>Nome:</Label>
            <Input
              name="nome"
              placeholder="Informe o nome completo"
              onChange={handleChange('nome')}
              defaultValue={values.nome} />

            <Label>Telefone Comercial:</Label>
            <Input
              name="telefone"
              placeholder="Informe o seu telefone comercial"
              onChange={handleChange('telefone')}
              defaultValue={values.telefone} />

            <Label>Telefone Celular:</Label>
            <Input
              name="celular"
              placeholder="Informe o seu telefone celular"
              onChange={handleChange('celular')}
              defaultValue={values.celular} />

            <Label>Localização:</Label>
            <Input
              name="localizacao"
              placeholder="Informe sua localização no campus"
              onChange={handleChange('localizacao')}
              defaultValue={values.localizacao} />

            <Label>Tipo de Cadastro</Label>


            <Combobox>
              <option>Selecione...</option>
                <option>Coordenador</option>
                <option>Outros</option>
            </Combobox>
          </Form>

        </div>

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

      </div>
    )
  }
}
