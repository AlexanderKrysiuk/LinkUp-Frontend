import React from 'react';
import { NavMenuItem } from '../Types.ts';

type NavbarIconButtonProps = {
	item: NavMenuItem;
};

const NavbarIconButtonComponent = ({ item }: NavbarIconButtonProps) => {
	return (
		<li className='navbar__menu-button'>
			<item.routeIcon />
			<span>{item.routeName}</span>
		</li>
	);
};

export default NavbarIconButtonComponent;
