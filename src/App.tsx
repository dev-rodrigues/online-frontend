import React from 'react';
import GlobalStyle from './styles/global';
import SignIn from './pages/Login/SignIn';
import Cadastro from './pages/Cadastro/Cadastro';

function App() {
  return (
    <>
      <Cadastro />
      <GlobalStyle />
    </>
  )
}

export default App;
