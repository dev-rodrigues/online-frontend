import React from 'react';

import { } from './styles';

import SimpleTitle from '../../components/atoms/SimpleTitle/Index';
import WrapperStepForm from '../../components/organisms/SolicitacaoCadastro/Index';
import Form from '../../components/molecules/IntermediateForm/Index';

const Cadastro: React.FC = () => (

  <Form>
    <SimpleTitle
      titulo={"Cadastro de Usuário"}
      subtitulo={"Em caso de dúvidas entre em contato com a Gerência de Sistemas"}/>
    <WrapperStepForm/>
  </Form>
);

export default Cadastro;
