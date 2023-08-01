/// <reference types="vite-plugin-svgr/client" />
import { ReactComponent as AddressCard } from '@icons/address-card-regular.svg';
import { ReactComponent as House } from '@icons/house-solid.svg';
import { ReactComponent as User } from '@icons/user-secret-solid.svg';
import { NavMenuItem } from './Types.ts';

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
		routeName: 'blah3',
		routeIcon: User,
		routeAction: null,
	},
];

export default routes;
