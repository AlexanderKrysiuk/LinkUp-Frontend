/**
 * @module Backdrop
 * @preferred
 */

import BackdropComponent from '@components/BackdropComponent';
import { useIsBackdropOpen } from '@hooks/BackdropHooks';

import { AnimatePresence } from 'framer-motion';

import React, { createContext, useState } from 'react';

/**
 * Defines the structure of the backdrop context value.
 *
 * @interface BackdropContextValue
 * @property {boolean} isBackdropOpen - Indicates whether the backdrop is currently open.
 */

interface BackdropContextValue {
	isBackdropOpen: boolean;
}

/**
 * Context for managing the backdrop state.
 *
 * This context provides access to the backdrop state which indicates whether
 * the backdrop is currently open or not.
 *
 * @type {React.Context<BackdropContextValue>}
 */
export const BackdropContext: React.Context<BackdropContextValue> =
	createContext<BackdropContextValue>({
		isBackdropOpen: false,
	});

/**
 * Defines the structure of the backdrop toggle context value.
 *
 * @interface BackdropToggleContextValue
 * @property {() => void} toggleBackdrop - Function to toggle the backdrop's visibility.
 */

interface BackdropToggleContextValue {
	toggleBackdrop: () => void;
}

/**
 * Context for providing the backdrop toggle function.
 *
 * This context exposes the `toggleBackdrop` function that allows components to
 * control the visibility of the backdrop.
 *
 * @type {React.Context<BackdropToggleContextValue>}
 */
export const BackdropToggleContext: React.Context<BackdropToggleContextValue> =
	createContext<BackdropToggleContextValue>({
		toggleBackdrop: () => {},
	});

/**
 * Provider component for managing the backdrop state and toggle function.
 *
 * This provider wraps the application components to provide access to the backdrop
 * state and the function to toggle the backdrop's visibility.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - The child components to be wrapped by the provider.
 * @returns {JSX.Element} - The wrapped child components with backdrop state and toggle.
 * @example
 * ```tsx
 * <BackdropProvider>
 *   { Child components }
 * </BackdropProvider>
 * ```
 */
export const BackdropProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element => {
	/**
	 * State indicating whether the backdrop is open.
	 */
	const [isBackdropOpen, setIsBackdropOpen] = useState<boolean>(false);

	/**
	 * Toggles the backdrop state.
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
 * This component uses the `useIsBackdropOpen` hook to determine if the backdrop should be rendered.
 *
 * @component
 * @returns {JSX.Element | null} - The rendered backdrop element or null if not open.
 * @example
 * ```tsx
 * <Backdrop />
 * ```
 */
export const Backdrop: React.FC = (): JSX.Element | null => {
	/**
	 * Retrieve the backdrop open state using the `useIsBackdropOpen` hook.
	 */
	const { isBackdropOpen } = useIsBackdropOpen();

	return (
		<AnimatePresence>
			{/* Render the backdrop component if open */}
			{isBackdropOpen ? <BackdropComponent isVisible={true} /> : null}
		</AnimatePresence>
	);
};
