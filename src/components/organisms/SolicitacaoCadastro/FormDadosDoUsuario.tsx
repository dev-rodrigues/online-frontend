import React, { useCallback, useRef } from 'react'
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup  from 'yup';
// import { FiUser, FiLock} from 'react-icons';

import getValidationsErrors from '../../../utils/getValidationsErrors';

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
    cpf: string,
    email: string,
  };
  handleChange: Function;
  nextStep: Function;
  prevStep: Function;
}

const FormDadosDoUsuario: React.FC<FormDadosDoUsuarioProps> = ({values, handleChange, prevStep}) => {

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback( async (data:object) => {
    formRef.current?.setErrors({});

    try {
      const schema = Yup.object().shape({
        nome: Yup.string().required('O Nome obrigatório'),
        telefone: Yup.string().required('O telefone é obrigatório'),
        celular: Yup.string().required('O celular é obrigatório'),
        localizacao: Yup.string().required('A localização é obrigatória')
      });

      await schema.validate(values, {
        abortEarly: false,
      });

    } catch(err) {

      const errors = getValidationsErrors(err);

      formRef.current?.setErrors(errors);
    }
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
            <Combobox>
              <option>Selecione...</option>
                <option>Coordenador</option>
                <option>Outros</option>
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
