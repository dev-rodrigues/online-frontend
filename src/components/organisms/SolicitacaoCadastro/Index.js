import React, { Component } from 'react'

import FormRecaptcha from './FormRecaptcha';
import FormValidacao from './FormValidacao';
import FormDadosDoUsuario from './FormDadosDoUsuario';

import Steps from '../../molecules/Steps/Index';

class WrapperStepForm extends Component {

  state = {
    step: 1,
    cpf: '',
    email: '',
    nome: '',
    telefone: '',
    celular: '',
    tipoDeCadastro: '',
    localizacao: ''
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
    const { cpf, email, nome, telefone, celular, tipoDeCadastro, localizacao } = this.state;
    const values  = {cpf, email, nome, telefone, celular, tipoDeCadastro, localizacao};

    switch(step) {
      case(1):
        return (
          <>
            <Steps posicaoAtual={step}/>
            <div>
              <FormRecaptcha
                nextStep={this.nextStep} />
            </div>
          </>
        )
      case(2):
        return (
          <>
            <Steps posicaoAtual={step}/>
            <div>
              <FormValidacao
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values} />
            </div>
          </>
        )
      case(3):
        return (
          <>
            <Steps posicaoAtual={step}/>
            <div>
              <FormDadosDoUsuario
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values} />
            </div>
          </>
        )
    }
  }
}

export default WrapperStepForm;
