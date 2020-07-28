import styled from 'styled-components';

import Background from '../../../assets/cgtecpredio.jpg';

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 60px;
  grid-template-columns: 1fr;
  grid-template-areas: "container" "rodape";
  background: url(${Background});
  background-position: center;
  background-size: cover;
  font-family: 'Open Sans', sans-serif;


  @media (max-width: 768px) {
    body {
        height: 100vh;
    }
  }
`;
