import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface StepProps {
  selected: boolean;
}

export const Step = styled.div<StepProps>`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
span {
  width: 32px;
  height: 32px;
  line-height: 32px;
  border-radius: 50%;
  text-align: center;
  border: 1px solid #ddd;
  background-color: #ddd;
  color: #fff;
  margin-bottom: 5px;
  ${(props) =>
    props.selected  &&
    css`
      border: 2px solid ${shade(0.2, '#04d361')};
      background-color: ${shade(0.2, '#04d361')};
    `}
}
  p {
    color: #059b5c;
  }
`;
