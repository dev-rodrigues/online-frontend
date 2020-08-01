import React, {
  createContext,
  useCallback,
  useState,
  useContext,
} from 'react';

import api from '../services/api';

interface LoginCredentials {
  usuario: string,
  senha: string,
}

interface AuthContextData {
  user: Object,
  login(credentials: LoginCredentials): Promise<void>,
  logout():void,
}

interface AuthState {
  authorization: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {

  // PEGA OS DADOS DO USUARIO DE DENTRO DO LOCALSTORAGE
  const [data, setData] = useState<AuthState>(() => {
    const authorization = localStorage.getItem('@online:token');

    if (authorization) {
      return {authorization}
    }

    return {} as AuthState;
  });

  // REALIZA O LOGIN DO USUARIO
  const login = useCallback( async ( {usuario, senha} ) => {

    const response = await api.post('login', {
      usuario,
      senha
    });

    const { authorization } = response.headers;

    // IR EM localhost:8080/usuario -> buscar dados do usuario

    localStorage.setItem('@online:token', authorization);

    setData({ authorization });

  }, []);

  // REALIZA O LOGOUT DO USUARIO
  const logout = useCallback(() => {
    localStorage.removeItem('@online:token');
    // remover localstorage dos dados do usuario

    setData({} as AuthState);
  }, []);

  return(
    <AuthContext.Provider value={{user: data.authorization, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
};

function useAuth() : AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
