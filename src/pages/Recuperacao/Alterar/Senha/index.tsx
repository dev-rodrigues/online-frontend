import React, {
   useEffect,
   useRef,
   useState,
   useCallback
} from 'react';
import { useRouteMatch } from 'react-router-dom';
import * as Yup from 'yup';

import api from '../../../../services/api';
import { useToast } from '../../../../hooks/ToastContext';
import getValidations from '../../../../utils/getValidationsErrors';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import Background from '../../../../components/atoms/Background';
import Root from '../../../../components/atoms/Root';
import Content from '../../../../components/atoms/Content';
import Label from '../../../../components/atoms/Label';
import Title from '../../../../components/atoms/Title/SimpleTitle';
import Input from '../../../../components/atoms/Input';
import Button from '../../../../components/atoms/Button'

interface RecuperacaoAlterarParams {
  prefix: string,
  codigo: string,
  sufix: string,
  codigoUsuario: string
}

interface RequestResponse {
  email: string,
  nome: string,
}

interface TrocaDeSenhaFormDataProps {

}

const Index: React.FC = () => {

  const { params } = useRouteMatch<RecuperacaoAlterarParams>();
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();

  const [solicitacaoValida, setSolicitacaoValida] = useState(false);
  const [nome, setNome] = useState('');

  // deve fazer uma requisição ao backend verificando se a solicitacao é valida
  useEffect( () => {
    async function loadData() : Promise<void> {

      try {
        const response = await api.get<RequestResponse>(`recuperar/${params.codigo}/${params.codigoUsuario}`);

        setNome(response.data.nome);

        setSolicitacaoValida(true);
      } catch(err) {

        addToast({
          type: 'error',
          title: 'Solicitação inválida',
          description: 'Solicitação inválida'
        });

      }
    }
    loadData();
  }, [params, solicitacaoValida, setNome, addToast]);


  // deve fazer uma requisicao ao backend para realizar a troca de senha do usuario
  const handleSubmit = useCallback(async (data: TrocaDeSenhaFormDataProps) => {

    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        senha: Yup.string().required('Informe a senha'),
        senha_confirmacao: Yup.string().oneOf([Yup.ref('senha')], 'As senhas não conferem')
      });

      await schema.validate(data, {
        abortEarly: false,
      });

    } catch (err) {

      if (err instanceof Yup.ValidationError) {
        const errors = getValidations(err);
        formRef.current?.setErrors(errors);
        return;
      }

      addToast({
        type: 'error',
        title: 'Erro na alteração de senha'
      })

    }
  }, [ addToast ]);

  return (
    <Background>
      <Root>
        <Content
          navegar
          destino="/"
          destinoInfo="Retornar">

          { solicitacaoValida ?
          (
            <Form ref={formRef} onSubmit={handleSubmit}>

              <Title
                titulo="Recuperação de senha"
                size="33"
                margin={[30, 0, 0, 0]}/>

              <Label>{`${nome}, informe sua nova senha.`}</Label>

              <br />

              <Label>Informe sua nova senha</Label>
              <Input
                name="senha"
                type="password"/>

              <Label>Informe novamente sua nova senha</Label>
              <Input
                name="senha_confirmacao"
                type="password"/>

              <Button
                type="submit">
                  Alterar
              </Button>

            </Form>
          ) : (
            <h1>koé cuzao</h1>
          )}

        </Content>
      </Root>
    </Background>
  )
}

export default Index;
