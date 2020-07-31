import React from 'react';

import Background from '../../components/atoms/Background/Index';
import Root from '../../components/atoms/Root/Index';
import Content from '../../components/atoms/Content/Index';

import InputCpf from '../../components/atoms/InputCpf/InputCpf'


const Teste: React.FC = () => (

  <Background>

    <Root className="root">

      <Content className="content">

        <InputCpf name="cpf"/>

      </Content>

    </Root>

  </Background>
);

export default Teste;
