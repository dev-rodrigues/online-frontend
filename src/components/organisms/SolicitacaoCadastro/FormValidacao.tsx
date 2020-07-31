import React, { useRef, useCallback } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup  from 'yup';

import getValidationsErrors from '../../../utils/getValidationsErrors';

import Label from '../../atoms/Label/Index';
import Input from '../../atoms/Input/Index';
import InputCpf from '../../atoms/InputCpf/Index';
import Button from '../../atoms/Button/Index';

type FormValidacaoDoUsuarioProps = {
  values: {
    cpf: string,
    email: string,
  };
  handleChange: Function;
  nextStep: Function;
  prevStep: Function;
}

const FormValidacao: React.FC<FormValidacaoDoUsuarioProps> = ({values, handleChange, prevStep, nextStep}) => {

  const formRef = useRef<FormHandles>(null);


  function back(): void {
    prevStep();
  }

  const handleSubmit = useCallback( async (data:object) => {

    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string().required('O E-mail é obrigatório.').email('E-mail inválido.'),
        cpf: Yup.string().required('O CPF é obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      nextStep();

    } catch(err) {

      const errors = getValidationsErrors(err);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <div>
        <div>
          <Label>Email:</Label>
          <Input
            name="email"
            type="email"
            placeholder="Informe seu email"
            onChange={handleChange('email')}
            defaultValue={values.email} />

          <Label>CPF:</Label>
          <InputCpf
            name="cpf"
            type="text"
            onChange={handleChange('cpf')}
            defaultValue={values.cpf} />

        </div>

        <div className="botoes">
          <Button
            className="back"
            onClick={back}
            >Retornar
          </Button>

          <Button
            type="submit"
            className="continue"
            >Continuar
          </Button>
        </div>
      </div>
    </Form>
    )
  }

export default FormValidacao;
