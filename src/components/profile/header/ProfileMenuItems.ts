type ProfileMenuItem = {
	routeName: string;
	subMenu: submenuItem[];
};
type submenuItem = {
	routeName: string;
};

const routes: ProfileMenuItem[] = [
	{
		routeName: 'basdsad1',
		subMenu: [{ routeName: 'asd1' }, { routeName: 'qwe1' }],
	},
	{
		routeName: 'basdsad2',
		subMenu: [{ routeName: 'asd2' }, { routeName: 'qwe2' }],
	},
	{
		routeName: 'basdsad3',
		subMenu: [{ routeName: 'asd3' }, { routeName: 'qwe3' }],
	},
	{
		routeName: 'basdsad4',
		subMenu: [{ routeName: 'asd4' }, { routeName: 'qwe4' }],
	},
	{
		routeName: 'basdsad5',
		subMenu: [{ routeName: 'asd5' }, { routeName: 'qwe5' }],
	},
	{
		routeName: 'basdsad6',
		subMenu: [{ routeName: 'asd6' }, { routeName: 'qwe6' }],
	},
	{
		routeName: 'basdsad7',
		subMenu: [{ routeName: 'asd7' }, { routeName: 'qwe7' }],
	},
	{
		routeName: 'basdsad8',
		subMenu: [{ routeName: 'asd8' }, { routeName: 'qwe8' }],
	},
];

export default routes;
