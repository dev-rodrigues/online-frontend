import React, { useState, useCallback } from 'react';

import { useToast } from '../../../hooks/ToastContext';

import Button from '../../atoms/Button';
import Recaptcha from '../../atoms/Recaptcha';

interface FormRecaptchaProps {
  nextStep: Function;
}

const FormRecaptcha: React.FC<FormRecaptchaProps> = ({ nextStep }) => {

  const [verificado, setVerificado] = useState(false);
  const { addToast } = useToast();

  const next = useCallback( async () => {
    if(verificado) {
      nextStep();
      return;
    }

    addToast({
      type: "info",
      title: 'O captcha deve ser preenchido corretamente.'
    })

  }, [verificado, addToast, nextStep]);

  const verify = useCallback((response) => {
    if (response) {
      setVerificado(true)
    }
  }, [setVerificado]);

  return (
    <div>
      <div>
        <Recaptcha verificar={verify}/>
      </div>

      <div className="botoes">
        <Button
          className="continue"
          onClick={next}>
          Continuar
        </Button>
      </div>

    </div>
  )
}

export default FormRecaptcha;
