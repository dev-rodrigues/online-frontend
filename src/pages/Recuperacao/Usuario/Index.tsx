import React, { useState } from 'react'
import { Form } from '@unform/web';

import Background from '../../../components/atoms/Background';
import Root from '../../../components/atoms/Root';
import Content from '../../../components/atoms/Content';
import Title from '../../../components/atoms/Title/SimpleTitle';
import Recaptcha from '../../../components/atoms/Recaptcha';

import Label from '../../../components/atoms/Label';
import Input from '../../../components/atoms/Input';
import Button from '../../../components/atoms/Button';

const Index: React.FC = () => {

  const [verificado, setVerificado] = useState(false);

  function verificarCaptcha(response:Object) : void {
    if (response) {
      setVerificado(true);
    }
  }

  return (
    <Background>
      <Root>
        <Content>
          <Title
            titulo="Recuperação de senha"
            subtitulo="Confirme seu usuário"/>
          <Form onSubmit={() => console.log(verificado)}>
            <Label>Usuário</Label>
            <Input name="usuario"/>
            <Recaptcha verificar={verificarCaptcha}/>
            <Button>Enviar</Button>
          </Form>
        </Content>
      </Root>
    </Background>
  );
};

export default Index;
