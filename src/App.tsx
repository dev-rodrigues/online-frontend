import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyles from './styles/global';
import Routes from './routes/index';

import AppProvider from './hooks/Index';


const  App: React.FC = () => (
  <Router>
    <AppProvider>
        <Routes />
    </AppProvider>
    <GlobalStyles />
  </Router>
);

export default App;
