import React, { Component } from 'react'

import FormRecaptcha from './FormRecaptcha';
import FormValidacao from './FormValidacao';
import FormDadosDoUsuario from './FormDadosDoUsuario';

import Steps from '../../molecules/StepList/Index';
import SimpleForm from '../../molecules/SimpleForm/index';

class WrapperStepForm extends Component {

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
      step: step + 1
    });
  };

  // voltar pro step anterior
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // atualiza valor dos inputs
  handleChange = input =>  e => {
    this.setState({[input]: e.target.value});
  }

  render() {

    const { step } = this.state;
    const { cpf, email, nome, telefone, celular, tipoDeCadastro } = this.state;

    switch(step) {
      case(1):
        return (
          <>
            <Steps posicaoAtual={step}/>
            <SimpleForm>
              <FormRecaptcha
                nextStep={this.nextStep}/>
            </SimpleForm>
          </>
        )
      case(2):
        return (
          <>
            <Steps posicaoAtual={step}/>
            <SimpleForm>
              <FormValidacao
                nextStep={this.nextStep}
                prevStep={this.prevStep}/>
            </SimpleForm>
          </>
        )
      case(3):
        return (
          <>
            <Steps posicaoAtual={step}/>
            <SimpleForm>
              <FormDadosDoUsuario
                nextStep={this.nextStep}
                prevStep={this.prevStep}/>
            </SimpleForm>
          </>
        )
    }
  }
}

export default WrapperStepForm;
