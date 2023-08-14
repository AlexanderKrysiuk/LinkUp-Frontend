import ButtonComponent from '@components/button/ButtonComponent.tsx';

import MainLayout from '@layouts/main/MainLayout';

import React from 'react';

import { useBackdropToggle } from '@hooks/BackdropHooks';

const HomePage = () => {
	const { toggleBackdrop } = useBackdropToggle();

	return (
		<>
			<h1>Home</h1>
			<button onClick={toggleBackdrop}>
				<ButtonComponent text='toggle Backdrop' />
			</button>
			<MainLayout />
		</>
	);
};

export default HomePage;
