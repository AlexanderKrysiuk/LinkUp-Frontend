// Pages
import ContactPage from '@pages/ContactPage.tsx';
import ErrorPage from '@pages/ErrorPage.tsx';
import HomePage from '@pages/HomePage.tsx';
import Login from '@pages/Login.tsx';
import MockPage from '@pages/MockPage.tsx';
import ProfilePage from '@pages/ProfilePage.tsx';
import Register from '@pages/Register.tsx';
import { App } from '../App.tsx';

// Routes
import profileRoutes, {
	ProfileMenuItem,
	SubmenuItem,
} from './ProfileMenuItems.ts';

import React from 'react';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from 'react-router-dom';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path='/'
			element={<App />}
			errorElement={<ErrorPage />}>
			<Route
				index
				element={<HomePage />}
			/>
			<Route
				path='/contact'
				element={<ContactPage />}
			/>
			<Route
				path='/profile'
				element={<ProfilePage />}>
				{profileRoutes.map((item: ProfileMenuItem, index) => (
					<Route
						key={index}
						path={item.routeName}
						element={<item.component />}>
						{item.subMenu.map((item: SubmenuItem, index) => (
							<Route
								key={index}
								path={item.routeName}
								element={<item.component />}
							/>
						))}
					</Route>
				))}
			</Route>
			<Route
				path='/register'
				element={<Register />}
			/>
			<Route
				path='/login'
				element={<Login />}
			/>
			<Route
				path='/mock'
				element={<MockPage />}
			/>
			{/* <Route
				path='*'
				element={<ErrorPage />}
			/> */}
		</Route>,
	),
);

export default router;
