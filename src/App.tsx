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
import ContactPage from '@pages/ContactPage.tsx';
import ErrorPage from '@pages/ErrorPage.tsx';
import HomePage from '@pages/HomePage.tsx';
import ProfilePage from '@pages/ProfilePage.tsx';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Login from '@pages/Login';
import MockPage from '@pages/MockPage.tsx';
import Register from '@pages/Register.tsx';

/**
 * The root component of the application.
 *
 * This component represents the overall structure of the application. It includes the backdrop,
 * navigation bar, routing for different pages, and the footer.
 *
 * @component
 * @example
 * ```tsx
 * <App />
 * ```
 */
export function App() {
	return (
		<>
			{/* <RegistrationComponent /> */}
			{/* <LoginComponent /> */}

			{/* Display the backdrop */}
			<Backdrop />

			{/* Display the navigation bar */}
			<NavbarLayout />
			<main className='main'>
				<Routes>
					<Route
						path='/'
						element={<HomePage />}
					/>
					<Route
						path='/Contact'
						element={<ContactPage />}
					/>
					<Route
						path='/Profile'
						element={<ProfilePage />}
					/>
					<Route
						path='*'
						element={<ErrorPage />}
					/>
				</Routes>
			</main>
			<FooterLayout />
		</>
	);
}
