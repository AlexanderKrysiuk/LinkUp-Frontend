import ModalComponent from '@components/ModalComponent.tsx';

import ButtonComponent from '@components/button/ButtonComponent.tsx';

import MainLayout from '@layouts/main/MainLayout';

import React, { useState } from 'react';

// { children }: { children: React.ReactNode })

const HomePage = () => {
	const [showModal, setShowModal] = useState(false);
	const toggleModal = () => {
		setShowModal((prevShowModal) => !prevShowModal);
	};
	return (
		<>
			<h1>Home</h1>
			<button onClick={() => toggleModal()}>
				<ButtonComponent text='toggle modal' />
			</button>
			{showModal && <ModalComponent />}
			<MainLayout />
		</>
	);
};

export default HomePage;
