import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login/Index';
import Cadastro from '../pages/Cadastro/Index';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/solicitacao-cadastro" exact component={Cadastro} />
  </Switch>
);

export default Routes;
