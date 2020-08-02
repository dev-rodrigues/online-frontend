import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Login from '../pages/Login/Index';

import Cadastro from '../pages/Cadastro/Index';
import CadastroConfirmar from '../pages/CadastroConfirmar/Index';

import TrocaSenha from '../pages/Recuperacao/Senha/Index';
import EsqueciMeuUsuario from '../pages/Recuperacao/Usuario/Index';

import Home from '../pages/Home/Index';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/solicitacao-cadastro" component={Cadastro} />
    <Route path="/confirma_email_usuario" component={CadastroConfirmar} />

    <Route path="/esqueci-minha-senha" component={TrocaSenha} />
    <Route path="/esqueci-meu-usuario" component={EsqueciMeuUsuario} />


    <Route path="/home" component={Home} isPrivate/>
  </Switch>
);

export default Routes;
