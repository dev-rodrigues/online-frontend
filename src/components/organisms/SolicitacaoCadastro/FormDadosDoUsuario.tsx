import React, {
  useCallback,
  useRef,
  useState,
} from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup  from 'yup';

import getValidationsErrors from '../../../utils/getValidationsErrors';
import { useToast } from '../../../hooks/ToastContext';

import Label from '../../atoms/Label/Index';
import Input from '../../atoms/Input/Index';
import Button from '../../atoms/Button/Index';
import Combobox from '../../atoms/Combobox/Index';

type FormDadosDoUsuarioProps = {
  values: {
    nome: string,
    telefone: string,
    celular: string,
    localizacao: string,
    tipoCadastro: string,
  };
  handleChange: Function;
  prevStep: Function;
}

const FormDadosDoUsuario: React.FC<FormDadosDoUsuarioProps> = ({values, prevStep}) => {

  const [tipoCadastro, setTipoCadastro] = useState('x');

  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();

  const handleSubmit = useCallback( async (data:object) => {
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

    } catch(err) {

      if (err instanceof Yup.ValidationError ) {
        const errors = getValidationsErrors(err);
        formRef.current?.setErrors(errors);
      } else {
        addToast(
          {
            type: 'error',
            title: "Erro na solicitação",
            description: 'Informe o tipo de cadastro'
          }
        );
      }


    }

  }, [tipoCadastro, addToast]);

  const handleCombobox = useCallback( async (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTipoCadastro(event.currentTarget.value);
  }, []);

  function back(): void {
    prevStep();
  }

  return (
    <Form ref={formRef} onSubmit={ handleSubmit }>
      <div>
        <div>
            <Label>Nome:</Label>
            <Input
              name="nome"
              placeholder="Informe o nome completo"
              defaultValue={values.nome} />

            <Label>Telefone Comercial:</Label>
            <Input
              name="telefone"
              placeholder="Informe o seu telefone comercial"
              defaultValue={values.telefone} />

            <Label>Telefone Celular:</Label>
            <Input
              name="celular"
              placeholder="Informe o seu telefone celular"
              defaultValue={values.celular} />

            <Label>Localização:</Label>
            <Input
              name="localizacao"
              placeholder="Informe sua localização no campus"
              defaultValue={values.localizacao} />

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

      </div>
    </Form>
  )

}

export default FormDadosDoUsuario;
