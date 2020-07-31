import styled, { css } from 'styled-components';

import Tooltip from '../../atoms/Tooltip/Index';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 2px;
  height: 35px;
  padding: 0 16px;
  font-size: 16px;
  display: flex;
  width: 130px;

  align-content: center;
  color: #375f9a;

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;

    &::placeholder {
      color: #888;
    }
  }

  ${props => props.isErrored && css`
    border-color: #F55145;
    color: #F55145;
  `}

  ${props => props.isFocused && css`
    color: #375f9a;
    border-color: #375f9a;
  `}

  ${props => props.isFilled && css`
    color: #375f9a;
  `}

  svg {
    margin-right: 16px;
  }
`;
