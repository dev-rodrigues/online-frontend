import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login/SignIn';
import Cadastro from '../pages/Cadastro/Cadastro';
import RecuperacaoDeSenha from '../pages/RecuperacaoDeSenha/RecuperacaoDeSenha';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/solicitacao-cadastro" component={Cadastro} />
    <Route path="/solicita-troca-de-senha" component={RecuperacaoDeSenha} />
  </Switch>
);

export default Routes;
