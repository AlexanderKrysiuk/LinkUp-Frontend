import BackdropComponent from '@components/BackdropComponent';
import { useModal } from '@hooks/ModalHooks.tsx';
import { AnimatePresence } from 'framer-motion';

import React, { createContext, useContext, useState } from 'react';

interface BackdropContextValue {
	isBackdropOpen: boolean;
	toggleBackdrop: () => void;
}

export const BackdropContext: React.Context<BackdropContextValue> =
	createContext<BackdropContextValue>({
		isBackdropOpen: false,
		toggleBackdrop: () => {},
	});

interface BackdropProviderProps {
	children: React.ReactNode;
}

export const BackdropProvider = ({
	children,
}: BackdropProviderProps): JSX.Element => {
	const [isBackdropOpen, setIsBackdropOpen] = useState<boolean>(false);
	const { setModal } = useModal();

	const toggleBackdrop = () => {
		setIsBackdropOpen((prevIsBackdropOpen) => {
			if (prevIsBackdropOpen) {
				setModal(null);
			}
			return !prevIsBackdropOpen;
		});
	};

	return (
		<BackdropContext.Provider value={{ isBackdropOpen, toggleBackdrop }}>
			{children}
		</BackdropContext.Provider>
	);
};

export const Backdrop = (): JSX.Element | null => {
	const { isBackdropOpen } = useContext(BackdropContext);

	return (
		<AnimatePresence>
			{isBackdropOpen ? <BackdropComponent isVisible={true} /> : null}
		</AnimatePresence>
	);
};
