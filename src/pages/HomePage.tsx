import ButtonComponent from '@components/button/ButtonComponent.tsx';

import React from 'react';

import { useBackdropToggle } from '@hooks/BackdropHooks';

const HomePage = () => {
	const { toggleBackdrop } = useBackdropToggle();

	return (
		<>
			<h1 className='h1'>Home</h1>
			<button onClick={toggleBackdrop}>
				<ButtonComponent text='toggle Backdrop' />
			</button>
		</>
	);
};

export default HomePage;
