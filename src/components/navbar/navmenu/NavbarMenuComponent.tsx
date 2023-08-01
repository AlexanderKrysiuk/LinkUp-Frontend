import React from 'react';
import NavbarIconButtonComponent from '../iconbutton/NavbarIconButtonComponent.tsx';

const routes = [
	{ routeName: 'blah1', routeIcon: null, routeAction: null },
	{ routeName: 'blah2', routeIcon: null, routeAction: null },
	{ routeName: 'blah3', routeIcon: null, routeAction: null },
];
const NavbarMenuComponent = () => {
	return (
		<ul className='navbar__menu'>
			{routes.map((item, index) => {
				return (
					<NavbarIconButtonComponent
						key={index}
						item={item}
					/>
				);
			})}
		</ul>
	);
};

export default NavbarMenuComponent;
