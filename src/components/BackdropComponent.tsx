import { useBackdropToggle } from '@hooks/BackdropHooks.tsx';
import { motion } from 'framer-motion';

import React from 'react';

import './BackdropComponent.css';

import ModalComponent from './ModalComponent.tsx';

/**
 * Props for the BackdropComponent.
 *
 * @interface BackdropProps
 * @property {boolean} isVisible - Indicates whether the backdrop is visible.
 */
interface BackdropProps {
	/**
	 * Indicates whether the backdrop is visible.
	 */
	isVisible: boolean;
}

/**
 * Duration of the fade animation for the backdrop (in seconds).
 *
 * @constant {number}
 */
export const FADE_TIME: number = 1;

/**
 * Delay time for the animation offset (in seconds).
 *
 * @constant {number}
 */
export const OFFSET_TIME: number = 0.1;

/**
 * A reusable backdrop component.
 *
 * This component renders a backdrop with an optional modal component when `isVisible` is true.
 *
 * @component
 * @param {BackdropProps} props - The props for the BackdropComponent.
 * @returns {JSX.Element | null} - The rendered backdrop and modal components, or null if not visible.
 * @example
 * ```tsx
 * <BackdropComponent isVisible={true} />
 * ```
 */
const BackdropComponent = ({
	isVisible,
}: BackdropProps): JSX.Element | null => {
	/**
	 * Access the `toggleBackdrop` function from the `useBackdropToggle` hook.
	 */
	const { toggleBackdrop } = useBackdropToggle();

	if (!isVisible) {
		return null;
	}

	return (
		/**
		 * Render the backdrop and modal components if `isVisible` is true.
		 */

		<motion.div
			id='backdrop'
			onClick={toggleBackdrop}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: FADE_TIME, delay: OFFSET_TIME }}>
			{/* Render modal component */}
			<ModalComponent />
		</motion.div>
	);
};

export default BackdropComponent;
