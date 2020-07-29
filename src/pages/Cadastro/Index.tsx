import React from 'react';

import Background from '../../components/atoms/Background/Index';
import Root from '../../components/atoms/Root/Index';
import Content from '../../components/atoms/Content/Index';

import Title from '../../components/atoms/Title/SimpleTitle/Index';
import WrapperCadastro from '../../components/organisms/SolicitacaoCadastro/Index';

const Cadastro: React.FC = () => (
  <Background>
    <Root>
      <Content>
        <Title
          titulo={"Cadastro de usuário"}
          subtitulo={"Em caso de dúvidas entre em contato com a Gerência de Sistemas"} />

        <WrapperCadastro />
      </Content>

    </Root>
  </Background>
);

export default Cadastro;
