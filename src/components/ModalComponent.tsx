import React from 'react';
import ReactDOM from 'react-dom';
import BackdropComponent from './BackdropComponent.tsx';

const ModalComponent = () => {
	const modalElement = document.getElementById('modal');
	if (modalElement) {
		return ReactDOM.createPortal(<BackdropComponent />, modalElement);
	}
};

export default ModalComponent;
