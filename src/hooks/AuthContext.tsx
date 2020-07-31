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
  authorization: string;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {

  const [data, setData] = useState<AuthState>(() => {
    const authorization = localStorage.getItem('@online:token');

    if (authorization) {
      return {authorization}
    }

    return {} as AuthState;
  });

  const login = useCallback( async ( {usuario, senha} ) => {

    const response = await api.post('login', {
      usuario,
      senha
    });

    const { authorization } = response.headers;
    localStorage.setItem('@online:token', authorization);

    setData({authorization});

  }, []);

  return(
    <AuthContext.Provider value={{nome: data.authorization, login}}>
      {children}
    </AuthContext.Provider>
  )
};

export default AuthContext;
