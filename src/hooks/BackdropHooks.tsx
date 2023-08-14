import {
	BackdropContext,
	BackdropToggleContext,
} from '@contexts/BackdropContext';
import { useContext } from 'react';

export const useIsBackdropOpen = () => {
	return useContext(BackdropContext);
};
export const useBackdropToggle = () => {
	return useContext(BackdropToggleContext);
};
