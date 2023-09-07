/**
 * @module BackdropContext
 * @description Module for managing the backdrop context and providing hooks to control backdrop visibility.
 */

import BackdropComponent from '@components/BackdropComponent';
import { useIsBackdropOpen } from '@hooks/BackdropHooks';

import { AnimatePresence } from 'framer-motion';

import React, { createContext, useState } from 'react';

/**
 * Internal context value for managing the backdrop's visibility state.
 *
 * @internal
 * @typedef BackdropContextValue
 * @type {object}
 * @property {boolean} isBackdropOpen - Whether the backdrop is open or not.
 */
interface BackdropContextValue {
	isBackdropOpen: boolean;
}

/**
 * Context for managing the backdrop's visibility state.
 */
export const BackdropContext: React.Context<BackdropContextValue> =
	createContext<BackdropContextValue>({
		isBackdropOpen: false,
	});

/**
 * Internal context value for managing the backdrop toggle function.
 *
 * @internal
 * @typedef BackdropToggleContextValue
 * @type {object}
 * @property {() => void} toggleBackdrop - Function to toggle the backdrop's visibility state.
 */
interface BackdropToggleContextValue {
	toggleBackdrop: () => void;
}

/**
 * Context for managing the backdrop toggle function.
 */
export const BackdropToggleContext: React.Context<BackdropToggleContextValue> =
	createContext<BackdropToggleContextValue>({
		toggleBackdrop: () => {},
	});

/**
 * Props for the `BackdropProvider` component.
 *
 * @internal
 * @typedef BackdropProviderProps
 * @type {object}
 * @property {React.ReactNode} children - The child components that will have access to the backdrop context.
 */
interface BackdropProviderProps {
	children: React.ReactNode;
}

/**
 * Provider component for managing the backdrop context.
 *
 * This component provides a context for managing the visibility state of the backdrop and a function to toggle its visibility.
 *
 * @component
 * @param {Object} props - The props object.
 * @param {React.ReactNode} props.children - The child components that will have access to the backdrop context.
 * @returns {JSX.Element} - The backdrop context provider component.
 */
export const BackdropProvider = ({
	children,
}: BackdropProviderProps): JSX.Element => {
	const [isBackdropOpen, setIsBackdropOpen] = useState<boolean>(false);

	/**
	 * Function to toggle the backdrop's visibility state.
	 */
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

/**
 * Component for rendering the backdrop.
 *
 * This component uses the `useIsBackdropOpen` hook to determine if the backdrop should be displayed.
 *
 * @component
 * @returns {JSX.Element | null} - The backdrop component or `null` if it's not visible.
 * @example
 * // Render the Backdrop component within your application.
 * <Backdrop />
 */
export const Backdrop = (): JSX.Element | null => {
	const { isBackdropOpen } = useIsBackdropOpen();

	return (
		<AnimatePresence>
			{isBackdropOpen ? <BackdropComponent isVisible={true} /> : null}
		</AnimatePresence>
	);
};
