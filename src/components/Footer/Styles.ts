import styled from 'styled-components';

export const Footer = styled.footer`

  grid-area: rodape;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  a {
    text-decoration: none;
  }

  a, p {
    color: #fff;
  }
`;
