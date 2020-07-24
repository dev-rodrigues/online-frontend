import React from 'react';

import logoImg from '../assets/logocptec.png';
import { Container, Root, Content, Recuperacao, Footer } from './styles';

const SignIn: React.FC = () => (
  <Container>

    <Root>

      <Content>

        <div className="logo">
          <img src={logoImg} alt="Coppetec"/>
        </div>


        <form>

          <label>Usuário</label>
          <input placeholder="Informe seu usuário"/>

          <label>Senha</label>
          <input placeholder="Informe sua senha" type="password"/>

          <button type="submit">Entrar</button>

          <a href="#">Não tem acesso? Cadastre-se</a>

        </form>

      </Content>

      <Recuperacao>
        <a href="#">Esqueceu sua senha?</a>
        <a href="#">Esqueceu seu login?</a>
      </Recuperacao>

    </Root>

    <Footer>
      <p>
        <a href="">Site da COPPETEC</a>
      </p>
      <p>
        <a href="">Ajuda</a>
      </p>
      <p>© 2020, GTIC - Fundação COPPETEC</p>
      <p>Versão 3.6.2</p>
    </Footer>

  </Container>
);

export default SignIn;
