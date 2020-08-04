import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback
} from 'react';

import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';

import { Container, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string,
  icon?: React.ComponentType<IconBaseProps>;
}

const InputTelefoneCelular: React.FC<InputProps> = ( { name, icon: Icon, ...rest } ) => {

  const { fieldName, defaultValue, error, registerField } = useField(name);
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setisFilled] = useState(false);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)

    if(inputRef.current?.value) {
      setisFilled(true);
    } else {
      setisFilled(false);
    }
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, []);

  const handlKeyUp = useCallback((event: React.FormEvent<HTMLInputElement>) => {
    event.currentTarget.maxLength = 13;
    let value = event.currentTarget.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d{2})(\d{5})(\d{4})/, "($1)$2-$3");
    event.currentTarget.value = value;
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    });
  }, [fieldName, registerField]);

  return (
    <Container isErrored={!!error} isFilled={isFilled} isFocused={isFocused}>
      { Icon && <Icon size={20} />}
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onKeyUp={handlKeyUp}
        placeholder="(##)####-####"
        defaultValue={defaultValue}

        ref={inputRef}
        {...rest} />

        { error &&
          <Error title={error}>
            <FiAlertCircle color="#F55145" size={20} />
          </Error>
        }

    </Container>
  )
}

export default InputTelefoneCelular;
