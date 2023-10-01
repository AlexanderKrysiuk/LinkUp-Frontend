/**
 * @module Router
 * @description Module containing the routing configuration for the application.
 */

// Importing pages
import ContactPage from '@pages/ContactPage.tsx';
import ErrorPage from '@pages/ErrorPage.tsx';

import HomePage from '@pages/HomePage.tsx';

import Login from '@pages/Login.tsx';

import MockPage from '@pages/MockPage.tsx';

import ProfilePage from '@pages/ProfilePage.tsx';

import Register from '@pages/Register.tsx';

import { App } from '../App.tsx';

import SecuredRoute from './SecuredRoute.tsx';

// Importing routes and route-related types
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

// Creating the router instance
const router = createBrowserRouter(
	createRoutesFromElements(
		// Root route
		<Route
			path='/'
			element={<App />}
			errorElement={<ErrorPage />}>
			{/* Home Page */}
			<Route
				index
				element={<HomePage />}
			/>
			{/* Contact Page */}
			<Route
				path='/contact'
				element={<ContactPage />}
			/>
			{/* Profile Page and its sub-routes */}
			<Route
				path='/profile'
				element={
					<SecuredRoute requiredRole='Client'>
						<ProfilePage />
					</SecuredRoute>
				}>
				{/* Mapping over profile menu items */}
				{profileRoutes.map((item: ProfileMenuItem, index) => (
					<Route
						key={index}
						path={item.routeName}>
						{/* Mapping over sub-menu items */}
						{item.subMenu.map((subItem: SubmenuItem, index) => (
							<Route
								key={index}
								path={subItem.routeName}
								element={<subItem.component />}
							/>
						))}
					</Route>
				))}
			</Route>
			{/* Registration Page */}
			<Route
				path='/register'
				element={<Register />}
			/>
			{/* Login Page */}
			<Route
				path='/login'
				element={<Login />}
			/>
			{/* Mock Page */}
			<Route
				path='/mock'
				element={<MockPage />}
			/>
			{/* Error Page */}
			{/* Uncomment the following route to handle all other paths */}
			{/* <Route
				path='*'
				element={<ErrorPage />}
			/> */}
		</Route>,
	),
);

export default router;
