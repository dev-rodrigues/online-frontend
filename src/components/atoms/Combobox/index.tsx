import React, { InputHTMLAttributes, useEffect, useRef  } from 'react';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';
import { Container } from './styles';

interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  name: string,
  icon?: React.ComponentType<IconBaseProps>;
}

const Combobox: React.FC<SelectProps> = ({ name, children, ...rest}) => {

  const { fieldName, defaultValue, error, registerField } = useField(name);
  const selectRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current?.value,
      path: 'value'
    });

  }, [fieldName, registerField]);

  return (
    <Container
      defaultValue={defaultValue}
      ref={selectRef}
      {...rest}>
        {children}
        {error}
    </Container>
  )
};

export default Combobox;

// <select defaultValue={} value={}><option value={}> teste </option> </select>
