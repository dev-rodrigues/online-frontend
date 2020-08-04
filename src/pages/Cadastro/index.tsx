import React from 'react';

import Background from '../../components/atoms/Background';
import Root from '../../components/atoms/Root';
import Content from '../../components/atoms/Content';

import Title from '../../components/atoms/Title/SimpleTitle';
import WrapperCadastro from '../../components/organisms/SolicitacaoCadastro';

const Cadastro: React.FC = () => (
  <Background>
    <Root>
      <Content
        navegar
        destino="/"
        destinoInfo="Cancelar"
        >
        <Title
          titulo={"Cadastro de usuário"}
          subtitulo={"Em caso de dúvidas entre em contato com a Gerência de Sistemas"} />

        <WrapperCadastro />
      </Content>

    </Root>
  </Background>
);

export default Cadastro;
