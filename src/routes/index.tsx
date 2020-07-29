import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login/Index';
import Cadastro from '../pages/Cadastro/Index';
import TrocaSenha from '../pages/Recuperacao/Senha/Index';
import EsqueciMeuUsuario from '../pages/Recuperacao/Usuario/Index';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/solicitacao-cadastro" exact component={Cadastro} />
    <Route path="/esqueci-minha-senha" exact component={TrocaSenha} />
    <Route path="/esqueci-meu-usuario" exact component={EsqueciMeuUsuario} />
  </Switch>
);

export default Routes;
