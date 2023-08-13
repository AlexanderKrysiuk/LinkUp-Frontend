import ModalComponent from '@components/ModalComponent.tsx';
import { useIsModalOpen } from '@hooks/ModalHooks.tsx';

import { AnimatePresence } from 'framer-motion';

import React, { createContext, useState } from 'react';

export const ModalContext = createContext({
	isModalOpen: false,
});
export const ModalToggleContext = createContext({
	toggleModal: () => {},
});

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const toggleModal = () => {
		setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
	};
	return (
		<ModalContext.Provider value={{ isModalOpen }}>
			<ModalToggleContext.Provider value={{ toggleModal }}>
				{children}
			</ModalToggleContext.Provider>
		</ModalContext.Provider>
	);
};

export const Modal = () => {
	const { isModalOpen } = useIsModalOpen();
	return (
		<AnimatePresence>
			{isModalOpen ? <ModalComponent isVisible={true} /> : null}
		</AnimatePresence>
	);
};
