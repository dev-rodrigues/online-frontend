import React, {
  createContext,
  useCallback,
  useState,
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

interface AuthState {
  token: string;
  user: object;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {

  // const [data, setData] = useState<AuthState>(() => {

  // });

  const login = useCallback( async ( {email, senha} ) => {

    const response = await api.post('login', {
      email,
      senha
    });

    const { authorization } = response.headers;
    localStorage.setItem('@coppetec:token', authorization);

  }, []);

  return(
    <AuthContext.Provider value={{nome: "Carlos", login}}>
      {children}
    </AuthContext.Provider>
  )
};

export default AuthContext;
