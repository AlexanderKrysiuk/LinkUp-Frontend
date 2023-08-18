import {
	BackdropContext,
	BackdropToggleContext,
} from '@contexts/BackdropContext';

import { useContext } from 'react';

/**
 * Hook for accessing the backdrop toggle function.
 *
 * This hook provides access to the `toggleBackdrop` function, allowing components
 * to control the visibility of the backdrop.
 *
 * @returns {object} - An object containing the `toggleBackdrop` function.
 * @example
 * ```tsx
 * const { toggleBackdrop } = useBackdropToggle();
 * toggleBackdrop(); // Toggles the backdrop visibility
 * ```
 */
export const useBackdropToggle = (): { toggleBackdrop: () => void } => {
	/**
	 * Retrieves the `toggleBackdrop` function from the `BackdropToggleContext`.
	 *
	 * This function allows components to access the `toggleBackdrop` function
	 * provided by the `BackdropToggleContext` to control the visibility of the backdrop.
	 */
	const { toggleBackdrop } = useContext(BackdropToggleContext);

	return { toggleBackdrop };
};

/**
 * Hook for accessing the backdrop state.
 *
 * This hook provides access to the current backdrop state, allowing components
 * to determine whether the backdrop is currently open.
 *
 * @returns {object} - An object containing the backdrop state.
 * @example
 * ```tsx
 * const { isBackdropOpen } = useIsBackdropOpen();
 * if (isBackdropOpen) {
 *   // Perform actions based on the backdrop state
 * }
 * ```
 */
export const useIsBackdropOpen = (): { isBackdropOpen: boolean } => {
	/**
	 * Retrieves the `isBackdropOpen` state from the `BackdropContext`.
	 *
	 * This state indicates whether the backdrop is currently open or not.
	 */
	const { isBackdropOpen } = useContext(BackdropContext);

	return { isBackdropOpen };
};
