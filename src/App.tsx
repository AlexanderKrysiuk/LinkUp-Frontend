import React, { createContext, useContext, useState } from 'react';

import FooterLayout from '@layouts/footer/FooterLayout.tsx';

import NavbarLayout from '@layouts/header/NavbarLayout.tsx';

import ContactPage from '@pages/ContactPage.tsx';

import ErrorPage from '@pages/ErrorPage.tsx';

import HomePage from '@pages/HomePage.tsx';

import ProfilePage from '@pages/ProfilePage.tsx';

import { Route, Routes } from 'react-router-dom';

import './App.css';

type ModalContextType = {
	isModalOpen: boolean;
	setIsModalOpen: (value: boolean) => void;
};

export const ModalContext = createContext<ModalContextType>({
	isModalOpen: false,
	setIsModalOpen: () => {},
});

export function ModalProvider({ children }: { children: React.ReactNode }) {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
			{children}
		</ModalContext.Provider>
	);
}
export function App() {
	return (
		<>
			<Modal />
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
export function Modal() {
	const { isModalOpen } = useContext(ModalContext);
	return isModalOpen ? <div id='modal'>BackdropComponent</div> : null;
}
