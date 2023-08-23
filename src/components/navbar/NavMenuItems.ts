/// <reference types="vite-plugin-svgr/client" />

import { ReactComponent as AddressCard } from '@icons/address-card-regular.svg';
import { ReactComponent as House } from '@icons/house-solid.svg';
import { ReactComponent as User } from '@icons/user-secret-solid.svg';
import { NavMenuItem } from './Types.ts';

/**
 * Array of navigation menu items.
 *
 * This array defines the navigation menu items along with their names, icons, and actions.
 *
 * @type {NavMenuItem[]}
 */
const routes: NavMenuItem[] = [
	{
		routeName: 'Home',
		routeIcon: House,
		routeAction: null,
	},
	{
		routeName: 'Contact',
		routeIcon: AddressCard,
		routeAction: null,
	},
	{
		routeName: 'Profile',
		routeIcon: User,
		routeAction: null,
	},
	{
		routeName: 'Login/Register',
		routeIcon: User,
		routeAction: null,
	},
	{
		routeName: 'Logout',
		routeIcon: User,
		routeAction: null,
	},
];

export default routes;
