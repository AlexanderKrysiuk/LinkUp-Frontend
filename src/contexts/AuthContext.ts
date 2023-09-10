import { createContext } from 'react';

interface UserContextType {
	isLogged: boolean;
	setIsLogged: (value: boolean) => void | null;
}

export const UserContext = createContext<UserContextType>({
	isLogged: false,
	setIsLogged: () => {},
});