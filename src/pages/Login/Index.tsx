import React, {
  useRef,
  useCallback
} from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { useAuth } from '../../hooks/AuthContext';
import getValidations from '../../utils/getValidationsErrors';
import { useToast } from '../../hooks/ToastContext';

import logoImg from '../../assets/logocptec.png';
import { Recuperacao, Footer } from './styles';

import Background from '../../components/atoms/Background';
import Root from '../../components/atoms/Root';
import Content from '../../components/atoms/Content';
import Label from '../../components/atoms/Label';
import Input from '../../components/atoms/Input';
import Button from '../../components/atoms/Button';

interface LoginFormDataProps {
  usuario: string,
  senha: string
}

const SignIn: React.FC = () => {

  const { login } = useAuth();
  const { addToast } = useToast();

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: LoginFormDataProps) => {

    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        usuario: Yup.string().required('Informe o usuário'),
        senha: Yup.string().required('Informe a senha'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await login({
        usuario: data.usuario,
        senha: data.senha
      });

    } catch (err) {

      if (err instanceof Yup.ValidationError) {
        const errors = getValidations(err);
        formRef.current?.setErrors(errors);
        return;
      }

      addToast({
        type: 'error',
        title: 'Erro na autenticação',
        description: 'Ocorreu um erro ao fazer login, verifique as credenciais'
      })

    }
  }, [ login, addToast ]);

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
        <p>Versão 1.0</p>
      </Footer>

    </Background>
  )
}

export default SignIn;
