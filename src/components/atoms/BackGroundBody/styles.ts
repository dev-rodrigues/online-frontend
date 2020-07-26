import styled from 'styled-components';
import Background from '../../../assets/cgtecpredio.jpg';

export const Root = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 60px;
  grid-template-columns: 1fr;
  grid-template-areas: "container" "rodape";
  background: url(${Background});
  background-position: center;
  background-size: cover;
  font-family: 'Roboto', sans-serif;


  @media (min-width: 768px) {

    .botoes {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .back {
      margin-right: 10px;
    }
  }

  @media (max-width: 768px) {
    .content {
        padding: 30px;
    }

    .rodape {
        display: none;
    }

    .botoes {
        width: 100%;
        display: grid;
        grid-gap: 5px;
        width: 100%
    }
  }
`;
