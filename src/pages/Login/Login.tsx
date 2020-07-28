import React from 'react';
import {Form} from '@unform/web';

import logoImg from '../../assets/logocptec.png';
import { Recuperacao, Footer } from './styles';

import Background from '../../components/atoms/Background/Index';
import Root from '../../components/atoms/Root/Index';
import Content from '../../components/atoms/Content/Index';

import Label from '../../components/atoms/Label/Index';
import Input from '../../components/atoms/Input/Index';
import Button from '../../components/atoms/Button/Index';

const SignIn: React.FC = () => (

  <Background>

    <Root className="root">

      <Content className="content">

        <div className="logo">
          <img src={logoImg} alt="Coppetec"/>
        </div>


        <Form onSubmit={() => console.log("cuco")}>

          <Label>Usuário</Label>
          <Input name="usuario" placeholder="Informe seu usuário"/>

          <Label>Senha</Label>
          <Input name="senha" placeholder="Informe sua senha" type="password"/>

          <Button>Entrar</Button>

          <a href="/">Não tem acesso? Cadastre-se</a>

        </Form>

      </Content>

      <Recuperacao>
        <a href="/">Esqueceu sua senha?</a>
        <a href="/">Esqueceu seu login?</a>
      </Recuperacao>

    </Root>

    <Footer>
      <p>
        <a href="/">Site da COPPETEC</a>
      </p>
      <p>
        <a href="/">Ajuda</a>
      </p>
      <p>© 2020, GTIC - Fundação COPPETEC</p>
      <p>Versão 3.6.2</p>
    </Footer>

  </Background>
);

export default SignIn;
