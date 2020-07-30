import React from 'react';

import { ToastProvider } from './ToastContext';

const AppProvider: React.FC = ({children}) => (
  <ToastProvider>
    {children}
  </ToastProvider>
)

export default AppProvider;
