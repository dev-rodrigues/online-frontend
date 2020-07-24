import styled from 'styled-components';
import Background from '../../assets/cgtecpredio.jpg';

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

export const Root = styled.div`
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

export const Content = styled.div`
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

    label {
      font-size: 14px;
      color: #555;
      font-weight: bold;
      margin-bottom: 8px;
    }

    input {
      margin-bottom: 20px;
      border: 1px solid #ddd;
      border-radius: 2px;
      height: 35px;
      padding: 0 15px;
      font-size: 16px;
    }

    button {
      border: 0;
      border-radius: 2px;
      width: 100%;
      height: 42px;
      padding: 0 20px;
      font-size: 16px;
      font-weight: bold;
      background-color: #059b5c;
      color: #fff;
    }

    button:hover {
      background-color: #059b5dd5;
    }

    a {
      text-align: center;
      margin-top: 15px;
      color: #444;
      font-size: 13px;
    }

    @media (max-width: 768px) {
      padding: 20px;
    }
`;

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
