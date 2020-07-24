import styled from 'styled-components';
import Background from '../../assets/cgtecpredio.jpg';

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


  @media (max-width: 768px) {
    .content {
        padding: 30px;
    }

    .rodape {
        display: none;
    }
  }

`;

export const Container = styled.div`
  grid-area: container;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 450px;
  width: 90%;
`;

export const Content = styled.div`
  width: 100%;
  background: #FFF;
  border-radius: 4px;
  padding: 50px;
`;

export const Title = styled.div`
  text-align: center;

  h1 {
    font-family: 'Play', sans-serif;
    color: #003926;
  }

  p {
    color: #059b5c;
  }

`;
