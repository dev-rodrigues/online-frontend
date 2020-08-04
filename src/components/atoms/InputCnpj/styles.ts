import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

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
  width: 178px;

  align-content: center;
  color: #375f9a;

  & + div {
    margin-top: 8px;
  }

  input {
    width: 120px;
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

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 10px;
  margin-top: 5px;

  svg {
    margin: 0;
  }

  span {
    background: #F55145;
    color: #fff;

    &::before {
      border-color: #F55145 transparent;
    }
  }
`;
