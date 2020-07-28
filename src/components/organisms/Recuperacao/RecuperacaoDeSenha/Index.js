import React, { Component } from 'react';
import {Form} from '@unform/web';

import SimpleTitle from '../../../../components/atoms/SimpleTitle/Index';
import Input from '../../../../components/atoms/Input/Index';
import Recaptcha from '../../../../components/atoms/Recaptcha/Index';
import Button from '../../../atoms/Button/Index';
import SimpleForm from '../../../molecules/SimpleForm/index';
import Label from '../../../atoms/Label/Index';

import {} from './styles';

export default class Index extends Component {

  state = { verificado: false }

  verificar = response => {
    if (response) {
      this.setState({ verificado: true })
      console.log(this.state.verificado);
    }
  }

  render() {
    return (
      <SimpleForm>

          <SimpleTitle
            titulo='Recuperação de senha'
            subtitulo='Confirme seu login para continuar' />
          <Form>
            <Label>Login</Label>
            <Input
              name="login"
              type='text'
              placeholder='Informe seu login'
              name='iptLogin' />

          </Form>

          <Recaptcha verificar={this.verificar} />

        <Button>Enviar</Button>

      </SimpleForm>

    );
  }
}
