import React, { createContext, useEffect, useState } from 'react';

interface AuthContextType {
	isLogged: boolean;
	setIsLogged: (value: boolean) => void | null;
}

export const AuthContext: React.Context<AuthContextType> =
	createContext<AuthContextType>({
		isLogged: false,
		setIsLogged: () => {},
	});

interface AuthProviderProps {
	children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
	const [isLogged, setIsLogged] = useState(false);

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (token && !isLogged) {
			setIsLogged(true);
		} else if (!token && isLogged) {
			setIsLogged(false);
		}
	}, []);

	return (
		<AuthContext.Provider value={{ isLogged, setIsLogged }}>
			{children}
		</AuthContext.Provider>
	);
};
