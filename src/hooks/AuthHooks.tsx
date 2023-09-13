import { AuthContext } from '@contexts/AuthContext';
import { useContext } from 'react';

type HookType = (value: boolean) => void | null;

export const useSetIsLogged = (): HookType => {
	const { setIsLogged } = useContext(AuthContext);
	return setIsLogged;
};
