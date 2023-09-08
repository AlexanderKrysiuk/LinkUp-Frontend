/// <reference types="vite-plugin-svgr/client" />

import { ReactComponent as AddressCard } from '@icons/address-card-regular.svg';
import { ReactComponent as House } from '@icons/house-solid.svg';
import { ReactComponent as User } from '@icons/user-secret-solid.svg';

/**
 * Type definition for navigation menu items.
 *
 * @typedef {Object} NavMenuItem
 * @property {string} routeName - The name of the route.
 * @property {React.FunctionComponent} routeIcon - The icon component for the route.
 * @property {(() => void) | null} routeAction - The action associated with the route, or `null` if no action is associated with the route.
 */
export type NavMenuItem = {
	/**
	 * The name of the route.
	 */
	routeName: string;
	/**
	 * The icon component for the route.
	 */
	routeIcon: React.FunctionComponent;
	/**
	 * The action associated with the route, or `null` if no action is associated with the route.
	 */
	routeAction: (() => void) | null;
};

/**
 * Array of navigation menu items.
 *
 * This array defines the navigation menu items along with their names, icons, and actions.
 *
 * @type {NavMenuItem[]}
 * @example
 * // Import and use the array of navigation menu items
 * import routes from './NavMenuData';
 *
 * // Access a menu item's properties
 * const homeRoute = routes.find(item => item.routeName === 'home');
 * console.log(homeRoute?.routeName); // Output: 'home'
 */
const routes: NavMenuItem[] = [
	{
		routeName: 'home',
		routeIcon: House,
		routeAction: null,
	},
	{
		routeName: 'contact',
		routeIcon: AddressCard,
		routeAction: null,
	},
	{
		routeName: 'profile',
		routeIcon: User,
		routeAction: null,
	},
	{
		routeName: 'register',
		routeIcon: User,
		routeAction: null,
	},
	{
		routeName: 'login',
		routeIcon: User,
		routeAction: null,
	},
	{
		routeName: 'logout',
		routeIcon: User,
		routeAction: null,
	},
];

export default routes;
