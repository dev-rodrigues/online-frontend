import React, { useRef, useEffect } from 'react';
import MenuPlacer, {
  OptionTypeBase,
  Props as SelectProps,
} from 'react-select';
import { useField } from '@unform/core';

interface Props extends SelectProps<OptionTypeBase> {
  name: string;
  options: Array<{
    value: string,
    label: string
  }>
}

const Select: React.FC<Props> = ({ name, options, ...rest }) => {

  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref: any) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map((option: OptionTypeBase) => option.value);
        }
        if (!ref.state.value) {
          return '';
        }
        return ref.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <MenuPlacer
      cacheOptions
      defaultValue={defaultValue}
      ref={selectRef}
      options={options}
      classNamePrefix="react-select"
      isMulti={false}
      {...rest}  >
    </MenuPlacer>
  );
};

export default Select;
