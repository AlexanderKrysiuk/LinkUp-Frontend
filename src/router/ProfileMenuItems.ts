/**
 * @module ProfileMenuItems
 * @description Module containing the profile menu items and routing configuration.
 */

import MockPageComponent from '@pages/MockPage.tsx';

/**
 * Type definition for a profile menu item.
 */
export type ProfileMenuItem = {
	routeName: string; // The name of the route.
	component: () => JSX.Element; // The component to render for this route.
	subMenu: SubmenuItem[]; // An array of sub-menu items for this route.
};

/**
 * Type definition for a sub-menu item.
 */
export type SubmenuItem = {
	routeName: string; // The name of the sub-menu route.
	component: () => JSX.Element; // The component to render for this sub-menu item.
};

/**
 * Array containing the profile menu items and their routing configuration.
 */
const routes: ProfileMenuItem[] = [
	{
		routeName: 'overview',
		subMenu: [
			{ routeName: 'asd1', component: MockPageComponent },
			{ routeName: 'qwe1', component: MockPageComponent },
		],
		component: MockPageComponent,
	},
	{
		routeName: 'basdsad2',
		subMenu: [
			{ routeName: 'asd2', component: MockPageComponent },
			{ routeName: 'qwe2', component: MockPageComponent },
		],
		component: MockPageComponent,
	},
	{
		routeName: 'basdsad3',
		subMenu: [
			{ routeName: 'asd3', component: MockPageComponent },
			{ routeName: 'qwe3', component: MockPageComponent },
		],
		component: MockPageComponent,
	},
	{
		routeName: 'basdsad4',
		subMenu: [
			{ routeName: 'asd4', component: MockPageComponent },
			{ routeName: 'qwe4', component: MockPageComponent },
		],
		component: MockPageComponent,
	},
	{
		routeName: 'basdsad5',
		subMenu: [
			{ routeName: 'asd5', component: MockPageComponent },
			{ routeName: 'qwe5', component: MockPageComponent },
		],
		component: MockPageComponent,
	},
	{
		routeName: 'basdsad6',
		subMenu: [
			{ routeName: 'asd6', component: MockPageComponent },
			{ routeName: 'qwe6', component: MockPageComponent },
		],
		component: MockPageComponent,
	},
	{
		routeName: 'basdsad7',
		subMenu: [
			{ routeName: 'asd7', component: MockPageComponent },
			{ routeName: 'qwe7', component: MockPageComponent },
		],
		component: MockPageComponent,
	},
	{
		routeName: 'basdsad8',
		subMenu: [
			{ routeName: 'asd8', component: MockPageComponent },
			{ routeName: 'qwe8', component: MockPageComponent },
		],
		component: MockPageComponent,
	},
];

export default routes;
