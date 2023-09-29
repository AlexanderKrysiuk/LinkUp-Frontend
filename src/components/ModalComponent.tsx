import { useModal } from '@hooks/ModalHooks.tsx';
import React from 'react';

const ModalComponent = (): JSX.Element | null => {
	const { modalContent } = useModal();

	return <div>{modalContent}</div>;
};

export default ModalComponent;
