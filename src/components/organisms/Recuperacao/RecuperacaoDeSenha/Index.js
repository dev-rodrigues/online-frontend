import React, { Component } from 'react';

import SimpleTitle from '../../../../components/atoms/SimpleTitle/Index';
import Input from '../../../../components/atoms/Input/Index';
import Recaptcha from '../../../../components/atoms/Recaptcha/Index';
import Button from '../../../atoms/Button/Index';
import SimpleForm from '../../../molecules/SimpleForm/index';
import Label from '../../../atoms/Label/Index';

import {Teste} from './Styles';

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

        <Label>Login</Label>
        <Input type='text' placeholder='Informe seu login' name='iptLogin' />

        <Recaptcha verificar={this.verificar} />

        <Button>Enviar</Button>
      </SimpleForm>
    );
  }
}