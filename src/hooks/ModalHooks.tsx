import { ModalContext, ModalToggleContext } from '@contexts/ModalContext.tsx';
import { useContext } from 'react';

export const useIsModalOpen = () => {
	return useContext(ModalContext);
};
export const useModalToggle = () => {
	return useContext(ModalToggleContext);
};
