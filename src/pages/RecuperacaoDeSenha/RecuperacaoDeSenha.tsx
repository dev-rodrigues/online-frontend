import React, { useState, FormEvent } from 'react';

import Form from '../../components/molecules/IntermediateForm/Index';
import SimpleTitle from '../../components/atoms/SimpleTitle/Index';
import Input from '../../components/atoms/Input/Index';
import Recaptcha from '../../components/atoms/Recaptcha/Index';

import { } from './styles';

const RecuperacaoDeSenha: React.FC = () => {

  const [verificado, setVerificado] = useState(false);

  function verificar(event:FormEvent<HTMLFormElement>, response:RequestInfo): void {
    event.preventDefault();

    if(response) {
      setVerificado(true);
      console.log(verificado);
    }
  }

  return (
    <>
      < Form >
      <SimpleTitle
        titulo='Recuperação de senha'
        subtitulo='Confirme seu login para continuar' />

      <label>Login</label>
      <Input type='text' placeholder='Informe seu login' name='iptLogin' />

      <Recaptcha verificar={verificar} />

      </Form >
    </>
  )
};

export default RecuperacaoDeSenha;
