import React, {useState} from 'react';
import Form from '../../components/molecules/IntermediateForm/Index';
import SimpleTitle from '../../components/atoms/SimpleTitle/Index';
import Input from '../../components/atoms/Input/Index';
import Recaptcha from '../../components/atoms/Recaptcha/Index';

import { } from './styles';

const RecuperacaoDeSenha: React.FC = () => (

  const [verificado, setVerificado] = useState("");

  < Form >
  <SimpleTitle
    titulo='Recuperação de senha'
    subtitulo='Confirme seu login para continuar' />

  <label>Login</label>
  <Input type='text' placeholder='Informe seu login' name='iptLogin' />

  <Recaptcha verificar={} />

  </Form >
);

export default RecuperacaoDeSenha;