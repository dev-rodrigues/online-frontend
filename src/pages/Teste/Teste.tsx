import React, { useRef, useCallback } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup  from 'yup';

import getValidationsErrors from '../../utils/getValidationsErrors';

import Background from '../../components/atoms/Background/Index';
import Root from '../../components/atoms/Root/Index';
import Content from '../../components/atoms/Content/Index';

import InputTelefone from '../../components/atoms/InputTelefone/Index';
import InputTelefoneCelular from '../../components/atoms/InputTelefoneCelular/Index';
import Button from '../../components/atoms/Button/Index';

const Teste: React.FC = () => {

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback( async (data:object) => {
    try {

      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        telefone: Yup.string().required('O Telefone obrigatório'),
        inptCelular: Yup.string().required('O Celular obrigatório'),
      });

      await schema.validate(data,  {
        abortEarly: false,
      });

    } catch(err) {
      const errors = getValidationsErrors(err);
      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Background>

        <Root className="root">

          <Content className="content">

            <InputTelefone name="telefone"/>

            <InputTelefoneCelular name="inptCelular" />

            <Button type="submit">
              Enviar
            </Button>

          </Content>

        </Root>

      </Background>
    </Form>
  )
};

export default Teste;
