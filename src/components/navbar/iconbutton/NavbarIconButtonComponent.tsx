import React from 'react';
import { NavMenuItem } from '../Types.ts';

type NavbarIconButtonProps = {
	item: NavMenuItem;
};

const NavbarIconButtonComponent = ({ item }: NavbarIconButtonProps) => {
	const handler = item.routeAction;
	return (
		<li
			className='navbar__menu-button'
			onClick={handler}>
			<item.routeIcon />
			<span>{item.routeName}</span>
		</li>
	);
};

export default NavbarIconButtonComponent;
