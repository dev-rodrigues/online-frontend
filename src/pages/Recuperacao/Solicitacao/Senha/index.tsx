import React, {
  useState,
  useCallback
} from 'react';
import { Form } from '@unform/web';
import { useHistory } from 'react-router-dom';


import { useToast } from '../../../../hooks/ToastContext';
import api from '../../../../services/api';

import Background from '../../../../components/atoms/Background';
import Root from '../../../../components/atoms/Root';
import Content from '../../../../components/atoms/Content';
import Title from '../../../../components/atoms/Title/SimpleTitle';
import Recaptcha from '../../../../components/atoms/Recaptcha';

import Label from '../../../../components/atoms/Label';
import Input from '../../../../components/atoms/Input';

import Button from '../../../../components/atoms/Button';

interface RecuperacaoSenhaProps {
  login: string
}

const Index: React.FC = () => {

  const [verificado, setVerificado] = useState(false);
  const { addToast } = useToast();
  const history = useHistory();

  function verificarCaptcha(response:Object) : void {
    if (response) {
      setVerificado(true);
    }
  }

  const handleSubmit = useCallback( async ( data:RecuperacaoSenhaProps ) => {
    // usuario não verificou o recaptcha
    if (!verificado) {
      addToast({
        type: 'error',
        title: 'Validação do Recaptcha',
        description: 'Valide o Recaptcha'
      });
      return;
    }

    try {
      await api.post('recuperar', {
        'email': data.login
      })

      addToast({
        type: 'success',
        title: 'Recuperação realizada com sucesso',
        description: 'Um link para a troca de senha foi enviado para seu email cadastrado. Esse link é válido por 30 minutos.Verifique sua caixa de email e siga as instruções.'
      });

      history.push('/')
    } catch(err) {

      addToast({
        type: 'error',
        title: 'Login inválido',
        description: `Falha de envio de email. Login informado: ${data.login}`
      });

    }

  }, [verificado, addToast, history]);

  return (
    <Background>
      <Root>
        <Content
          navegar
          destino="/"
          destinoInfo="Retornar">
          <Title
            titulo="Esqueci minha senha"
            margin={[50, 0, 0, 0]}
            subtitulo="Informe seu usuário"
            sizeSubtitulo={20}
            align='center'
            />

            <Form onSubmit={handleSubmit}>

              <Label>Login</Label>
              <Input
                name="login"
                type="email"/>

              <Recaptcha verificar={verificarCaptcha}/>

              <Button type="submit">
                Enviar
              </Button>

            </Form>

        </Content>
      </Root>
    </Background>
  );
};

export default Index;
