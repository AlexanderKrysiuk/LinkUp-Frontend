import { useBackdropToggle } from '@hooks/BackdropHooks.tsx';

import { motion } from 'framer-motion';

import React from 'react';

import ModalComponent from './ModalComponent.tsx';

import './BackdropComponent.css';

type BackdropProps = {
	isVisible: boolean;
};

export const FADE_TIME = 1;
export const OFFSET_TIME = 0.1;

const BackdropComponent = ({ isVisible }: BackdropProps) => {
	const { toggleBackdrop } = useBackdropToggle();
	return (
		isVisible && (
			<motion.div
				id='backdrop'
				onClick={toggleBackdrop}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: FADE_TIME, delay: OFFSET_TIME }}>
				<ModalComponent />
			</motion.div>
		)
	);
};

export default BackdropComponent;
