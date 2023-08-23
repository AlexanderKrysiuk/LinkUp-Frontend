
import useScript from '@hooks/useScript.tsx';

import React from 'react';

import '@layouts/FormLayout.css';

//import LoginComponent from '@components/loginForm/LoginComponent';
import RegistrationComponent from '@components/registrationForm/RegistrationComponent';

import FooterLayout from '@layouts/footer/FooterLayout.tsx';

import NavbarLayout from '@layouts/header/NavbarLayout.tsx';

import ContactPage from '@pages/ContactPage.tsx';

import ErrorPage from '@pages/ErrorPage.tsx';

import HomePage from '@pages/HomePage.tsx';

import ProfilePage from '@pages/ProfilePage.tsx';

import { Backdrop } from '@contexts/BackdropContext';

import { Route, Routes } from 'react-router-dom';

import './App.css';

export function App() {
	return (
		<>
			{/* <RegistrationComponent /> */}
			{/* <LoginComponent /> */}
			<Backdrop />
			<NavbarLayout />
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
			<FooterLayout />
		</>
	);
}
