import { createContext } from 'react';

interface AuthContextProps {
  nome: string,
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export default AuthContext;
