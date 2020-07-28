import React, { useState, FormEvent } from 'react';

import Form from '../../components/molecules/IntermediateForm/Index';
import RecuperaSenha from '../../components/organisms/Recuperacao/RecuperacaoDeSenha/Index';

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
      <Form >
        <RecuperaSenha />
      </Form >
    </>
  )
};

export default RecuperacaoDeSenha;
