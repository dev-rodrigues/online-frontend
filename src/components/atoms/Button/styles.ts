import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  height: 42px;
  padding: 0 20px;
  font-size: 16px;
  font-weight: bold;
  background-color: #059b5c;
  margin-right: 5px;


  &:hover {
    background: ${shade(0.2, '#059b5c')};
  }
`;
