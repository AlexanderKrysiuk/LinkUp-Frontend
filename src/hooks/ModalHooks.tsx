import { ModalContext } from '@contexts/ModalContext';
import { useContext } from 'react';

interface UseModalReturnValue {
	modalContent: JSX.Element | null;
	setModal: (component: JSX.Element | null) => void;
}

export const useModal = (): UseModalReturnValue => {
	const { modalContent, setModal } = useContext(ModalContext);
	return { modalContent, setModal };
};
