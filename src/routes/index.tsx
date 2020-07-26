import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login/SignIn';
import Cadastro from '../pages/Cadastro/Cadastro';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/solicitacao-cadastro" component={Cadastro} />
  </Switch>
);

export default Routes;
