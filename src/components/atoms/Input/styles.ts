import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 2px;
  height: 35px;
  padding: 0 15px;
  font-size: 16px;
  display: flex;
  align-content: center;
  color: #375f9a;

  ${props => props.isFocused && css`
    color: #375f9a;
    border-color: #375f9a;
  `}

  ${props => props.isFilled && css`
    color: #375f9a;
  `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
  }

  svg {
    margin-right: 16px;
  }

`;
