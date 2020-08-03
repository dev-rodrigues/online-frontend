import React, {
   useEffect,
   useState,
} from 'react';
import { useRouteMatch } from 'react-router-dom';

import { useToast } from '../../hooks/ToastContext';
import api from '../../services/api';

import Background from '../../components/atoms/Background/Index';
import Root from '../../components/atoms/Root/Index';
import Content from '../../components/atoms/Content/Index';
import Title from '../../components/atoms/Title/SimpleTitle/Index';


interface CadastroConfirmarParams {
  idConfirmacao: string,
}

interface teste {
  'email-confirmacao': string,
}

const CadastroConfirmar: React.FC = () => {

  const { params } = useRouteMatch<CadastroConfirmarParams>();
  const { addToast } = useToast();
  const [emailConfirmacao, setEmailConfirmacao] = useState('');


  useEffect( () => {

    async function loadData() : Promise<void> {

      try {
        const response = await api.get<teste>(`cadastrar/confirmar/${params.idConfirmacao}`);
        const email = response.data["email-confirmacao"]
        setEmailConfirmacao(email);

      } catch(err) {
        addToast({
          type: 'error',
          title: 'Solicitação inválida',
          description: 'Código de solicitação inválida'
        })
      }
    }

    loadData();

  }, [params, addToast, setEmailConfirmacao]);



  return (
    <Background>
      <Root>
        <Content>
        { emailConfirmacao !== '' ? (
          <Title
          titulo="Solicitação de Cadastro de Usuário"
          subtitulo={`Seu email foi confirmado. Quando sua solicitação for processada um email de notificação será enviado para ${emailConfirmacao}`}/>
        ) : (
          <h1>deu ruim</h1>
        )}

        </Content>
      </Root>
    </Background>
  );
};

export default CadastroConfirmar;
