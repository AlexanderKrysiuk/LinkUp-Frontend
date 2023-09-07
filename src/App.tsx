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

import React from 'react';

import '@layouts/FormLayout.css';

// import LoginComponent from '@components/loginForm/LoginComponent';
//import RegistrationComponent from '@components/registrationForm/RegistrationComponent';

import FooterLayout from '@layouts/footer/FooterLayout.tsx';

import NavbarLayout from '@layouts/header/NavbarLayout.tsx';

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
	return (
		<>
			{/* <RegistrationComponent /> */}
			{/* <LoginComponent /> */}

			<Backdrop />

			<NavbarLayout />
			<main className='main'>
				{/* The Outlet component renders the content of the current route */}
				<Outlet />
			</main>
			<FooterLayout />
		</>
	);
}
