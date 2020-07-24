import React, { Component } from 'react'

import FormRecaptcha from './FormRecaptcha';
import FormValidacao from './FormValidacao';
import FormDadosDoUsuario from './FormDadosDoUsuario';
import Steps from './StepList';

import { Root } from './styles';

export default class WrapperStepForm extends Component {

  state = {
    step: 1,
    cpf: '',
    email: '',
    nome: '',
    telefone: '',
    celular: '',
    tipoDeCadastro: ''
  }

  // avança pro proximo step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: +1
    })
  }

  // voltar pro step anterior
  backStep = () => {
    const { step } = this.state;
    this.setState({
      step: +1
    })
  }

  // atualiza valor dos inputs
  handleChange = input =>  e => {
    this.setState({[input]: e.target.value});
  }

  render() {

    const { step } = this.state;
    const { cpf, email, nome, telefone, celular, tipoDeCadastro } = this.state;
    const values = { cpf, email, nome, telefone, celular, tipoDeCadastro };

    switch(step) {
      case(1):
        return (
          <>
            <Steps />
            <FormRecaptcha/>
          </>

        )
      case(2):
        return (
          <>
            <Steps />
            <FormValidacao />
          </>
        )
      case(3):
        return (
          <>
            <Steps />
            <FormDadosDoUsuario/>
          </>
        )
    }
  }
}
