import React, {SelectHTMLAttributes} from 'react';
import { FiAlertCircle } from 'react-icons/fi';

import { SelectItem, Error, Container } from './styles';

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  options: Array<{
    value: string,
    label: string
  }>,
  erro: boolean,
  errorMessage: string,
}

const Combobox: React.FC<Props> = ({ name, options, erro, errorMessage, ...rest }) => {

  return (

    <Container>

      { erro && (
          <Error title={errorMessage} >
            <FiAlertCircle color="#F55145" size={20} />
          </Error>
        )
      }

      <SelectItem name={name} {...rest}>

        <option disabled selected>-- Selecione --</option>

        {options.map(option => {
            return (
              <option key={option.value} value={option.value}>{option.label}</option>
            )
          })
        }
      </SelectItem>


    </Container>

  );
};

export default Combobox;
