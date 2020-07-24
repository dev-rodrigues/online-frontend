import React from 'react';

import { Root, Container, Content, Title } from './styles';
import WrapperStepForm from '../../components/StepForm/WrapperStepForm';
import Rodape from '../../components/Footer/Index';

const Cadastro: React.FC = () => (

  <Root>
    <Container className="container">
      <Content>
        <Title>
          <h1>Cadastro de Usuário</h1>
          <p>Em caso de dúvidas entre em contato com a Gerência de Sistemas</p>
        </Title>
        <WrapperStepForm/>
      </Content>
    </Container>
    <Rodape className="rodape" />
  </Root>

);


export default Cadastro;
