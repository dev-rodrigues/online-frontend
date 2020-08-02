import React from 'react';
import { useRouteMatch } from 'react-router-dom';

const CadastroConfirmar: React.FC = () => {


  const { params } = useRouteMatch();

  return <h1>Confirmação de Email: {params.idConfirmacao}</h1>
};

export default CadastroConfirmar;
