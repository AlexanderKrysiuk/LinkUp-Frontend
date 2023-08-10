import ButtonComponent from '@components/button/ButtonComponent.tsx';

import MainLayout from '@layouts/main/MainLayout';

import React from 'react';

import { useModalToggle } from '@hooks/ModalHooks.tsx';

const HomePage = () => {
	const { toggleModal } = useModalToggle();

	return (
		<>
			<h1>Home</h1>
			<button onClick={toggleModal}>
				<ButtonComponent text='toggle modal' />
			</button>
			<MainLayout />
		</>
	);
};

export default HomePage;
