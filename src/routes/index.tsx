import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Login from '../pages/Login';

import Cadastro from '../pages/Cadastro';
import CadastroConfirmar from '../pages/CadastroConfirmar';

import TrocaSenha from '../pages/Recuperacao/Solicitacao/Senha';
import EsqueciMeuUsuario from '../pages/Recuperacao/Solicitacao/Usuario';

import Home from '../pages/Home';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/solicitacao-cadastro" component={Cadastro} />
    <Route path="/confirma_email_usuario/:idConfirmacao" component={CadastroConfirmar} />

    <Route path="/esqueci-minha-senha" component={TrocaSenha} />
    <Route path="/esqueci-meu-usuario" component={EsqueciMeuUsuario} />


    <Route path="/home" component={Home} isPrivate/>
  </Switch>
);

export default Routes;
