/// <reference types="vite-plugin-svgr/client" />
import { ReactComponent as AddressCard } from '@icons/address-card-regular.svg';
import { ReactComponent as House } from '@icons/house-solid.svg';

import { ReactComponent as User } from '@icons/user-secret-solid.svg';

import { NavMenuItem } from './Types.ts';

import { v4 as bruh } from 'uuid';

const allCookies = document.cookie;
const cookieArray = allCookies.split('; ');
const userNameCookie = cookieArray.find((cookie) => cookie.startsWith('user='));
const userNameValue = userNameCookie ? userNameCookie.split('=')[1] : null;
const sessionCookie = cookieArray.find((cookie) =>
	cookie.startsWith('sess_id='),
);
const sessionValue = sessionCookie ? sessionCookie.split('=')[1] : null;

const routes: NavMenuItem[] = [
	{
		routeName: 'blah1',
		routeIcon: House,
		routeAction: null,
	},
	{
		routeName: 'blah2',
		routeIcon: AddressCard,
		routeAction: null,
	},
	{
		routeName: `${
			userNameValue &&
			sessionValue === '8520b3f0-6bc4-4fd4-9e04-b01e36e31d18'
				? userNameValue
				: 'anonymous'
		}`,
		routeIcon: User,
		routeAction: () => {
			document.cookie = 'user=Peter';
			sessionCookie ? null : (document.cookie = `sess_id=${bruh()}`);
		},
	},
	{
		routeName: 'Login/Register',
		routeIcon: User,
		routeAction: () =>
			(document.cookie = 'sess_id=8520b3f0-6bc4-4fd4-9e04-b01e36e31d18'),
	},
	{
		routeName: 'Logout',
		routeIcon: User,
		routeAction: () => {
			// get all cookies
			const allCookies = document.cookie;

			// split cookies into individual key-value pairs
			const cookieArray = allCookies.split('; ');

			// loop through each cookie and delete it
			cookieArray.forEach((cookie) => {
				const cookieName = cookie.split('=')[0];
				document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
			});
		},
	},
];

export default routes;
