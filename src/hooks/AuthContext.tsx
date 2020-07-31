import React, {
  createContext,
  useCallback,
} from 'react';

import api from '../services/api';

interface LoginCredentials {
  usuario: string,
  senha: string,
}

interface AuthContextData {
  nome: string,
  login(credentials: LoginCredentials): Promise<void>,
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {

  const login = useCallback( async ( {usuario, senha} ) => {
    console.log(`usuario: ${usuario} - senha: ${senha}`)
    const response = await api.post('login', {
      usuario,
      senha
    });

    console.log(response);

  }, []);

  return(
    <AuthContext.Provider value={{nome: "Carlos", login}}>
      {children}
    </AuthContext.Provider>
  )
};

export default AuthContext;
