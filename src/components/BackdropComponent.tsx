/**
 * @module BackdropComponent
 * @description Module containing the backdrop component for modal displays.
 */

import { useBackdropToggle } from '@hooks/BackdropHooks.tsx';
import { motion } from 'framer-motion';

import React from 'react';

import './BackdropComponent.css';

import ModalComponent from './ModalComponent.tsx';

/**
 * Props for the BackdropComponent.
 */
interface BackdropProps {
	/**
	 * A boolean value indicating whether the backdrop is visible or not.
	 */
	isVisible: boolean;
}

/**
 * The duration of the fade animation when the backdrop appears or disappears (in seconds).
 */
export const FADE_TIME: number = 1;

/**
 * The delay before the backdrop animation starts (in seconds).
 */
export const OFFSET_TIME: number = 0.1;

/**
 * A component that provides a backdrop for modal displays.
 *
 * This component is used to display a backdrop behind modals when they are shown. It fades in and out with
 * a customizable duration and delay. It is typically used in conjunction with a `ModalComponent` for
 * creating modal dialogs.
 *
 * @component
 * @param {BackdropProps} props - The props object for BackdropComponent.
 * @returns {JSX.Element | null} - The rendered BackdropComponent or `null` if it's not visible.
 * @example
 * ```tsx
 * <BackdropComponent isVisible={true} />
 * ```
 */
const BackdropComponent = ({
	isVisible,
}: BackdropProps): JSX.Element | null => {
	const { toggleBackdrop } = useBackdropToggle();

	// If the backdrop is not visible, return null (it won't be rendered)
	if (!isVisible) {
		return null;
	}

	return (
		<motion.div
			id='backdrop'
			onClick={toggleBackdrop}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: FADE_TIME, delay: OFFSET_TIME }}>
			<ModalComponent />
		</motion.div>
	);
};

export default BackdropComponent;
