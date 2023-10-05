/**
 * @module ProfileMenuItems
 * @description Module containing the profile menu items and routing configuration.
 */

import ArchivedMeetingsComponent from '@components/meeting/ArchivedMeetingsComponent';
import UpcomingMeetingsComponent from '@components/meeting/UpcomingMeetingsComponent';
import MockPageComponent from '@pages/MockPage.tsx';

/**
 * Type definition for a profile menu item.
 */
export type ProfileMenuItem = {
	routeName: string; // The name of the route.
	component?: JSX.Element | null;
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
		routeName: 'Overview',
		subMenu: [
			{ routeName: 'Calendar', component: MockPageComponent },
			{ routeName: 'Statistics', component: MockPageComponent },
		],
	},
	{
		routeName: 'My meetings',
		subMenu: [
			{ routeName: 'Upcoming', component: UpcomingMeetingsComponent },
			{ routeName: 'Archived', component: ArchivedMeetingsComponent },
		],
	},
	{
		routeName: 'Finances',
		subMenu: [
			{ routeName: 'Invoices', component: MockPageComponent },
			{ routeName: 'Statistics', component: MockPageComponent },
		],
	},
	// {
	// 	routeName: 'Analysis',
	// 	subMenu: [
	// 		{ routeName: '1', component: MockPageComponent },
	// 		{ routeName: '2', component: MockPageComponent },
	// 	],
	// },
];

export default routes;
