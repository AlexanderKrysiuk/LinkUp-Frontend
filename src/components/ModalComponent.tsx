import { useModalToggle } from '@hooks/ModalHooks.tsx';

import { motion } from 'framer-motion';

import React from 'react';

import BackdropComponent from './BackdropComponent.tsx';

import './ModalComponent.css';

type ModalProps = {
	isVisible: boolean;
};

export const FADE_TIME = 3;
export const OFFSET_TIME = 0.5;

const ModalComponent = ({ isVisible }: ModalProps) => {
	const { toggleModal } = useModalToggle();
	return (
		isVisible && (
			<motion.div
				id='modal'
				onClick={toggleModal}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: FADE_TIME, delay: OFFSET_TIME }}>
				<BackdropComponent />
			</motion.div>
		)
	);
};

export default ModalComponent;
