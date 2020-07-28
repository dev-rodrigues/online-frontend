import styled from 'styled-components';

export const Recuperacao = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 15px 0;

  a {
    color: #fff;
    font-size: 13px;
  }

  a:hover {
    color: #059b5c;
  }
`;

export const Footer = styled.footer`
  grid-area: rodape;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 15px 20px 0;
  flex-wrap: wrap;

  a {
    text-decoration: none;
  }

  a, p {
    color: #FFF;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
