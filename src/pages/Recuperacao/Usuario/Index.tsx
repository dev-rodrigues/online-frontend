import React, { useState } from 'react'
import { Form } from '@unform/web';

import Background from '../../../components/atoms/Background/Index';
import Root from '../../../components/atoms/Root/Index';
import Content from '../../../components/atoms/Content/Index';
import Title from '../../../components/atoms/Title/SimpleTitle/Index';
import Recaptcha from '../../../components/atoms/Recaptcha/Index';

import Label from '../../../components/atoms/Label/Index';
import Input from '../../../components/atoms/Input/Index';
import Button from '../../../components/atoms/Button/Index';

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
