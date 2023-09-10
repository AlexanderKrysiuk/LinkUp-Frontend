/**
 * Root component of the application.
 *
 * This component defines the main structure of the application, including the navigation bar,
 * content sections for different pages, and the footer. It utilizes React Router for routing
 * between different pages.
 *
 * @module App
 */

import { Backdrop } from '@contexts/BackdropContext';

import React, { useContext, useEffect } from 'react';

import '@layouts/FormLayout.css';

import FooterLayout from '@layouts/footer/FooterLayout.tsx';

import NavbarLayout from '@layouts/header/NavbarLayout.tsx';

import { UserContext } from '@contexts/AuthContext';
import { Outlet } from 'react-router-dom';

/**
 * The root component of the application.
 *
 * This component defines the main structure of the application, including the navigation bar,
 * content sections for different pages, and the footer. It utilizes React Router for routing
 * between different pages.
 *
 * @component
 * @example
 * ```tsx
 * <App />
 * ```
 */
export function App(): JSX.Element {
	const { isLogged, setIsLogged } = useContext(UserContext);
	
	useEffect(() => {
		const token = localStorage.getItem('token');
		if (token && !isLogged) { 
			setIsLogged(true); 
		} else if (!token && isLogged) { 
			setIsLogged(false); 
		} });

	return (
		<UserContext.Provider value={{ isLogged, setIsLogged }}>
			<>
				<Backdrop />
				<NavbarLayout />
				<main className='main'>
					{/* The Outlet component renders the content of the current route */}
					<Outlet />
				</main>
				<FooterLayout />
			</>
		</UserContext.Provider>
	);
}
