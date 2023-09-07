/**
 * @module HomePage
 * @description Page component for the home page.
 */

import ButtonComponent from '@components/button/ButtonComponent.tsx';

import { useBackdropToggle } from '@hooks/BackdropHooks';
import React from 'react';

/**
 * Page component for the home page.
 *
 * This component represents the home page of the application. It displays a header
 * indicating the page's title and a button to toggle the backdrop. The `useBackdropToggle`
 * hook is used to manage the backdrop's visibility state.
 *
 * @component
 * @returns {JSX.Element} - The rendered home page.
 * @example
 * ```tsx
 * <HomePage />
 * ```
 */
const HomePage = (): JSX.Element => {
	const { toggleBackdrop } = useBackdropToggle();

	return (
		<>
			<h1 className='h1'>Home</h1>
			<button onClick={toggleBackdrop}>
				<ButtonComponent text='Toggle Backdrop' />
			</button>
		</>
	);
};

export default HomePage;
