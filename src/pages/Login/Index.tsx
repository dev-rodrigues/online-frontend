import React, { useContext, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import AuthContext from '../../hooks/AuthContext';
import getValidations from '../../utils/getValidationsErrors';

import logoImg from '../../assets/logocptec.png';
import { Recuperacao, Footer } from './styles';
import Background from '../../components/atoms/Background/Index';
import Root from '../../components/atoms/Root/Index';
import Content from '../../components/atoms/Content/Index';
import Label from '../../components/atoms/Label/Index';
import Input from '../../components/atoms/Input/Index';
import Button from '../../components/atoms/Button/Index';

const SignIn: React.FC = () => {

  const auth = useContext(AuthContext);
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: Object) => {

    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        usuario: Yup.string().required('Informe o usuário'),
        senha: Yup.string().required('Informe a senha'),
      });

      await schema.validate(data, {
        abortEarly: false,
      })

    } catch (err) {
      const errors = getValidations(err);
      formRef.current?.setErrors(errors);
    }

  }, []);


  return (
    <Background>

      <Root className="root">

        <Content className="content">

          <div className="logo">
            <img src={logoImg} alt="Coppetec"/>
          </div>

          <Form ref={formRef} onSubmit={handleSubmit}>

            <Label>Usuário</Label>
            <Input name="usuario" placeholder="Informe seu usuário"/>

            <Label>Senha</Label>
            <Input name="senha" placeholder="Informe sua senha" type="password"/>

            <Button type="submit">Entrar</Button>

            <Link to="/solicitacao-cadastro">Não tem acesso? Cadastre-se</Link>

          </Form>

        </Content>

        <Recuperacao>
          <Link to="/esqueci-minha-senha">Esqueceu sua senha?</Link>
          <Link to="/esqueci-meu-usuario">Esqueceu seu login?</Link>
        </Recuperacao>

      </Root>

      <Footer>
        <p>
          <a href="http://www.coppetec.coppe.ufrj.br/site/" target="_blank">Site da COPPETEC</a>
        </p>
        <p>
          <a href="http://www.coppetec.coppe.ufrj.br/site/contato.php" target="_blank">Ajuda</a>
        </p>
        <p>© 2020, GTIC - Fundação COPPETEC</p>
        <p>Versão 3.6.2</p>
      </Footer>

    </Background>
  )
}

export default SignIn;
