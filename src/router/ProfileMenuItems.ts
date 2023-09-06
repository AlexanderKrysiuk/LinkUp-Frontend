import MockPageComponent from '@pages/MockPage.tsx';

export type ProfileMenuItem = {
	routeName: string;
	component: () => JSX.Element;
	subMenu: SubmenuItem[];
};

export type SubmenuItem = {
	routeName: string;
	component: () => JSX.Element;
};

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
