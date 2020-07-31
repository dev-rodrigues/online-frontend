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
import Select from 'react-select';

interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  name: string,
}

const SelectOneMenu: React.FC<SelectProps> = ({name, children, ...rest }) => {

  const { fieldName, defaultValue, error, registerField } = useField(name);

  const inputRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    });
  }, [fieldName, registerField]);

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ];

  return (
    <>
      <Select
        defaultValue={defaultValue}
        options={options}
        >

        </Select>
    </>
  )
}

export default SelectOneMenu;
