import BackdropComponent from '@components/BackdropComponent';
import { useIsBackdropOpen } from '@hooks/BackdropHooks';

import { AnimatePresence } from 'framer-motion';

import React, { createContext, useState } from 'react';

export const BackdropContext = createContext({
	isBackdropOpen: false,
});
export const BackdropToggleContext = createContext({
	toggleBackdrop: () => {},
});

export const BackdropProvider = ({ children }: { children: React.ReactNode }) => {
	const [isBackdropOpen, setIsBackdropOpen] = useState(false);
	const toggleBackdrop = () => {
		setIsBackdropOpen((prevIsBackdropOpen) => !prevIsBackdropOpen);
	};
	return (
		<BackdropContext.Provider value={{ isBackdropOpen }}>
			<BackdropToggleContext.Provider value={{ toggleBackdrop }}>
				{children}
			</BackdropToggleContext.Provider>
		</BackdropContext.Provider>
	);
};

export const Backdrop = () => {
	const { isBackdropOpen } = useIsBackdropOpen();
	return (
		<AnimatePresence>
			{isBackdropOpen ? <BackdropComponent isVisible={true} /> : null}
		</AnimatePresence>
	);
};
