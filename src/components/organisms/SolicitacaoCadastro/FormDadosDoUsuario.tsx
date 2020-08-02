import React, {
  useCallback,
  useRef,
  useState,
} from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup  from 'yup';
import { useHistory } from 'react-router-dom';

import getValidationsErrors from '../../../utils/getValidationsErrors';
import { useToast } from '../../../hooks/ToastContext';
import api from '../../../services/api';

import Label from '../../atoms/Label/Index';
import Input from '../../atoms/Input/Index';

import InputTelefone from '../../atoms/InputTelefone/Index';
import InputCelular from '../../atoms/InputTelefoneCelular/Index';

import Button from '../../atoms/Button/Index';
import Combobox from '../../atoms/Combobox/Index';
import Content from '../../atoms/Content/Index';

type FormDadosDoUsuarioProps = {
  values: {
    cpf: string,
    email: string,
  };
  handleChange: Function;
  prevStep: Function;
}

interface CadastroProps {
  nome: string,
  telefone: string,
  celular: string,
  localizacao: string,
  tipoCadastro: string,
}

const FormDadosDoUsuario: React.FC<FormDadosDoUsuarioProps> = ({values, prevStep}) => {

  const [tipoCadastro, setTipoCadastro] = useState('x');

  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback( async ( data:CadastroProps ) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        nome: Yup.string().required('O Nome obrigatório'),
        telefone: Yup.string().required('O telefone é obrigatório'),
        celular: Yup.string().required('O celular é obrigatório'),
        localizacao: Yup.string().required('A localização é obrigatória'),
      });

      if (tipoCadastro === 'x') {
        throw new Error('erro');
      }

      await schema.validate(data,  {
        abortEarly: false,
      });

      await api.post('cadastrar', {
        'nome': data.nome,
        'email': values.email,
        'cpf': values.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4"),
        'telefoneComercial': data.telefone,
        'celular': data.celular,
        'localizacao': data.localizacao,
        'tipoCadastro': tipoCadastro
      });

      history.push('/');

      addToast({
        type: 'success',
        title: 'Cadastro solicitado com sucesso',
        description: 'Aguarde o e-mail de confirmação'
      })

    } catch(err) {

      if (err instanceof Yup.ValidationError ) {
        const errors = getValidationsErrors(err);
        formRef.current?.setErrors(errors);
        return;
      }

      addToast(
        {
          type: 'error',
          title: "Dados inválidos",
          description: 'CPF ou E-mail inválidos'
        }
      );

    }

  }, [tipoCadastro, addToast, values, history]);

  const handleCombobox = useCallback( async (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTipoCadastro(event.currentTarget.value);
  }, []);

  function back(): void {
    prevStep();
  }

  return (
    <Form ref={formRef} onSubmit={ handleSubmit }>
      <Content>
        <div>
            <Label>Nome:</Label>
            <Input
              name="nome"
              placeholder="Informe o nome completo"/>

            <Label>Telefone Comercial:</Label>
            <InputTelefone
              name="telefone"/>

            <Label>Telefone Celular:</Label>
            <InputCelular
              name="celular"/>

            <Label>Localização:</Label>
            <Input
              name="localizacao"
              placeholder="Informe sua localização no campus"/>

            <Label>Tipo de Cadastro</Label>
            <Combobox name="tipoCadastro" onChange={handleCombobox} >
              <option key="x" value="x">--Selecione--</option>
              <option key="C" value="C">COORDENADOR</option>
              <option key="O" value="O">OUTROS</option>
            </Combobox>
        </div>

        <div className="botoes">
          <Button
            className="back"
            onClick={back}
            >Retornar
          </Button>

          <Button
            type="submit"
            >Concluir
          </Button>
        </div>

      </Content>
    </Form>
  )

}

export default FormDadosDoUsuario;
