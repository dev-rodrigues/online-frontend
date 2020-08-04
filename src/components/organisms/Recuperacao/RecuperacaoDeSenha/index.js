import React, { Component } from 'react';
import {Form} from '@unform/web';

import SimpleTitle from '../../../../components/atoms/SimpleTitle/Index';
import Input from '../../../atoms/Input';
import Recaptcha from '../../../atoms/Recaptcha';
import Button from '../../../atoms/Button';
import SimpleForm from '../../../molecules/SimpleForm/index';
import Label from '../../../atoms/Label';

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
