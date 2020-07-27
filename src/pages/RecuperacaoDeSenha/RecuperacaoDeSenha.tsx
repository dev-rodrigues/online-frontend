import React, { useState } from 'react';

import Form from '../../components/molecules/IntermediateForm/Index';
import RecuperaSenha from '../../components/organisms/Recuperacao/RecuperacaoDeSenha/Index';

import { } from './styles';

const RecuperacaoDeSenha: React.FC = () => {

  return (
    <>
      <Form >
        <RecuperaSenha />
      </Form >
    </>
  )
};

export default RecuperacaoDeSenha;
