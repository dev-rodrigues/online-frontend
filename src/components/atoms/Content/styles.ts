import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #FFF;
  border-radius: 4px;
  padding: 50px;

  .logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  a {
    text-align: center;
    margin-top: 15px;
    color: #444;
    font-size: 13px;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }

`;

export const AnimationContainer = styled.div`

  animation: ${appearFromLeft} 1s;
`;
