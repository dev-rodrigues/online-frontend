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

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string,
  icon?: React.ComponentType<IconBaseProps>;
}

const InputCpf: React.FC<InputProps> = ({name, icon: Icon, ...rest}) => {
  return (
    <Container isErrored={!!true} isFilled={false} isFocused={false}>
      { Icon && <Icon size={20} />}
      <InputMask mask="999.999.999-99"></InputMask>
    </Container>
  )
}

export default InputCpf;
