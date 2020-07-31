import React from 'react';

import { ToastProvider } from './ToastContext';
import AuthContext from './AuthContext';


const AppProvider: React.FC = ({children}) => (
  <AuthContext.Provider value={{nome: 'carlos'}}>
    <ToastProvider>
      {children}
    </ToastProvider>
  </AuthContext.Provider>
)

export default AppProvider;
