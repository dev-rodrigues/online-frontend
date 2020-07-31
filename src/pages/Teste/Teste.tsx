import React from 'react';
import { Form } from '@unform/web';

import Background from '../../components/atoms/Background/Index';
import Root from '../../components/atoms/Root/Index';
import Content from '../../components/atoms/Content/Index';

import InputCpf from '../../components/atoms/InputCpf/InputCpf'
import InputCnpj from '../../components/atoms/InputCnpj/InputCnpj';


const Teste: React.FC = () => (
  <Form onSubmit={() => console.log()}>
    <Background>

      <Root className="root">

        <Content className="content">

          <InputCpf name="cpf"/>
          <InputCnpj name="cnpj" />

        </Content>

      </Root>

    </Background>
  </Form>
);

export default Teste;
