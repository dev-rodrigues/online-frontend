import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback
} from 'react';
import InputMask from 'react-input-mask';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string,
  icon?: React.ComponentType<IconBaseProps>;
}

const InputCpf: React.FC<InputProps> = ( { name, icon: Icon, ...rest } ) => {

  // const { fieldName, defaultValue, error, registerField } = useField(name);
  // const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setisFilled] = useState(false);

  // const handleInputBlur = useCallback(() => {
  //   setIsFocused(false)

  //   if(inputRef.current?.value) {
  //     setisFilled(true);
  //   } else {
  //     setisFilled(false);
  //   }
  // }, []);

  // const handleInputFocus = useCallback(() => {
  //   setIsFocused(true)
  // }, []);

  // useEffect(() => {
  //   registerField({
  //     name: fieldName,
  //     ref: inputRef.current,
  //     path: 'value'
  //   });
  // }, [fieldName, registerField]);

  return (
    <Container isErrored={!!true} isFilled={false} isFocused={false}>
      { Icon && <Icon size={20} />}
      <InputMask
        mask="999.999.999-99"
        // onFocus={handleInputFocus}
        // onBlur={handleInputBlur}
        // defaultValue={defaultValue}

        />
    </Container>
  )
}

export default InputCpf;
