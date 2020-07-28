import styled from 'styled-components';

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
