import ButtonComponent from '@components/button/ButtonComponent.tsx';

import MainLayout from '@layouts/main/MainLayout';

import React, { useContext } from 'react';

import { ModalContext } from '../App.tsx';

// { children }: { children: React.ReactNode })

const HomePage = () => {
	const { isModalOpen, setIsModalOpen } = useContext(ModalContext);
	const toggleModal = () => {
		setIsModalOpen(!isModalOpen);
	};
	return (
		<>
			<h1>Home</h1>
			<button onClick={() => toggleModal()}>
				<ButtonComponent text='toggle modal' />
			</button>
			<MainLayout />
		</>
	);
};

export default HomePage;
