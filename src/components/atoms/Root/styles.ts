import styled from 'styled-components';

export const Container = styled.div`
  grid-area: container;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 450px;
  width: 90%;

  @media (max-width: 768px) {
    margin-top: 50px;
  }
`;
