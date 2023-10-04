import { BackdropContext } from '@contexts/BackdropContext';
import { useContext } from 'react';
interface UseBackdropReturnValue {
	isBackdropOpen: boolean;
	toggleBackdrop: () => void;
}

export const useBackdrop = (): UseBackdropReturnValue => {
	const { isBackdropOpen, toggleBackdrop } = useContext(BackdropContext);
	return { isBackdropOpen, toggleBackdrop };
};
