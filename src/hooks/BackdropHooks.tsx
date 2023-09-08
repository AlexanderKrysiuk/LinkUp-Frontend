/**
 * @module BackdropHooks
 * @description Custom React hooks for interacting with the backdrop context.
 */

import { useContext } from 'react';

import {
	BackdropContext,
	BackdropToggleContext,
} from '@contexts/BackdropContext';

/**
 * Interface defining the structure of the result returned by the `useBackdropToggle` hook.
 *
 * @typedef UseBackdropToggleResult
 * @property {() => void} toggleBackdrop - Function to toggle the backdrop's visibility.
 */
interface UseBackdropToggleResult {
	toggleBackdrop: () => void;
}

/**
 * Interface defining the structure of the result returned by the `useIsBackdropOpen` hook.
 *
 * @typedef UseIsBackdropOpenResult
 * @property {boolean} isBackdropOpen - Boolean representing whether the backdrop is open.
 */
interface UseIsBackdropOpenResult {
	isBackdropOpen: boolean;
}

/**
 * Hook for toggling the backdrop's visibility.
 *
 * This hook provides access to the `toggleBackdrop` function from the `BackdropToggleContext`.
 *
 * @returns {UseBackdropToggleResult} An object containing the `toggleBackdrop` function.
 * @example
 * // Import and use the hook
 * import { useBackdropToggle } from '@hooks/BackdropHooks';
 * const { toggleBackdrop } = useBackdropToggle();
 * // Call the function to toggle the backdrop
 * toggleBackdrop();
 */
export const useBackdropToggle = (): UseBackdropToggleResult => {
	const { toggleBackdrop } = useContext(BackdropToggleContext);
	return { toggleBackdrop };
};

/**
 * Hook for checking the backdrop's visibility state.
 *
 * This hook provides access to the `isBackdropOpen` state from the `BackdropContext`.
 *
 * @returns {UseIsBackdropOpenResult} An object containing the `isBackdropOpen` state.
 * @example
 * // Import and use the hook
 * import { useIsBackdropOpen } from '@hooks/BackdropHooks';
 * const { isBackdropOpen } = useIsBackdropOpen();
 * // Check the backdrop's visibility state
 * if (isBackdropOpen) {
 *   // Perform an action when the backdrop is open
 * }
 */
export const useIsBackdropOpen = (): UseIsBackdropOpenResult => {
	const { isBackdropOpen } = useContext(BackdropContext);
	return { isBackdropOpen };
};
