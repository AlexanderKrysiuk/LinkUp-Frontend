import ButtonComponent from '@components/button/ButtonComponent.tsx';
import React from 'react';

const routes = [
	{ routeName: 'blah1', routeIcon: null, routeAction: null },
	{ routeName: 'blah2', routeIcon: null, routeAction: null },
	{ routeName: 'blah3', routeIcon: null, routeAction: null },
];
const NavbarMenuComponent = () => {
	return (
		<>
			<ul>
				{routes.map((item, index) => {
					return <li key={index}>{item.routeName}</li>;
				})}
			</ul>
			<ButtonComponent text='Test' />
		</>
	);
};

export default NavbarMenuComponent;
