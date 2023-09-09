import { createContext, useContext, useEffect, useState } from 'react';

interface AuthContextType {
    isLogged: boolean;
    setIsLogged: (value: boolean) => void;
  };
  
const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLogged, setIsLogged] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLogged(true);
    } else {
    setIsLogged(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isLogged, setIsLogged }}>{children}<AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
};
