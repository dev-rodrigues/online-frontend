import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #F7F7F7;
    color: #000;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
    color: #fff;
    border: 0;
    border-radius: 2px;
  }

  @media (min-width: 768px) {
    .botoes {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .btn.anterior {
        margin-right: 10px;
    }
  }

  @media (max-width: 768px) {
    .botoes {
      width: 100%;
      display: grid;
      grid-gap: 5px;
    }

    .botoes button {
      width: 100%;
    }
  }
`;
