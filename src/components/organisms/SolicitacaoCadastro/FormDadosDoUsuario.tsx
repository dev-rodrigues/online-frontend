import React, {
  useCallback,
  useRef,
  useState,
} from 'react';
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
  };
  handleChange: Function;
  nextStep: Function;
  prevStep: Function;
}

const FormDadosDoUsuario: React.FC<FormDadosDoUsuarioProps> = ({values, prevStep}) => {

  const formRef = useRef<FormHandles>(null);
  const [tipoCadastro, setTipoCadastro] = useState('x')

  const handleSubmit = useCallback( async (data:object) => {

    console.log(tipoCadastro)

    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        nome: Yup.string().required('O Nome obrigatório'),
        telefone: Yup.string().required('O telefone é obrigatório'),
        celular: Yup.string().required('O celular é obrigatório'),
        localizacao: Yup.string().required('A localização é obrigatória')
      });

      await schema.validate(data, {
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

  function handleCombobox(event: React.ChangeEvent<HTMLSelectElement>): void {
    console.log(event)
    setTipoCadastro(event.currentTarget.value);
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
            <select value={tipoCadastro} onChange={handleCombobox}>
              <option key="x" value="x">-- Selecione --</option>
              <option key="C" value="C">COORDENADOR</option>
              <option key="O" value="O">OUTROS</option>
            </select>
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
