import React, { Component } from 'react';
import { Form } from '@unform/web';

import Label from '../../atoms/Label/Index';
import Input from '../../atoms/Input/Index';
import Button from '../../atoms/Button/Index';

export class FormValidacao extends Component {

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
              <Label>Email:</Label>
              <Input
                name="teste"
                type="email"
                placeholder="Informe seu email"
                onChange={handleChange('email')}
                defaultValue={values.email} />

              <Label>CPF:</Label>
              <Input
                name="cpf"
                type="text"
                placeholder="Informe seu cpf"
                onChange={handleChange('cpf')}
                defaultValue={values.cpf} />
            </Form>

        </div>

        <div className="botoes">
          <Button
            className="back"
            onClick={this.back}
            >Retornar
          </Button>

          <Button
            className="continue"
            onClick={this.continue}
            >Continuar
          </Button>
        </div>

      </div>
      )
    }
  }

export default FormValidacao;
