import styled from 'styled-components';
import Tooltip from '../Tooltip';

export const Container = styled.div`
  svg {
    margin-right: 10px;
  }
`;

export const SelectItem = styled.select`
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 2px;
  height: 35px;
  padding: 0 15px;
  font-size: 16px;
  background-color: #fff;
  color: #093925;
  flex:1;
  width: 250px;
`;

export const Error = styled(Tooltip)`
  text-align: end;

  svg {
    margin-right: 20px;
    margin-bottom: -32px;
  }

  span {
    background: #F55145;
    color: #fff;
    left: 87%;
    margin-bottom: -24px;


    &::before {
      border-color: #F55145 transparent;
    }
  }
`;
