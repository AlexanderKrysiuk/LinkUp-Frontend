import { useModal } from '@hooks/ModalHooks.tsx';
import React from 'react';
import './ModalComponent.css';

const ModalComponent = (): JSX.Element | null => {
	const { modalContent } = useModal();

	return <div className='modal'>{modalContent}</div>;
};

export default ModalComponent;
