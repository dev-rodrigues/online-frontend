import React from 'react';
import { useRouteMatch } from 'react-router-dom';

interface CadastroConfirmarParams {
  idConfirmacao: string,
}

const CadastroConfirmar: React.FC = () => {

  const { params } = useRouteMatch<CadastroConfirmarParams>();

  return <h1>Confirmação de Email: {params.idConfirmacao}</h1>
};

export default CadastroConfirmar;
