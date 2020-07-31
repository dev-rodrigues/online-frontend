import { createContext } from 'react';

interface AuthContextProps {
  nome: string,
}

const authContext = createContext<AuthContextProps>({} as AuthContextProps);

export default authContext;
