import React from 'react';
import { Link } from 'react-router-dom';

import { NavMenuItem } from '../Types.ts';

type NavbarIconButtonProps = {
	item: NavMenuItem;
};

const NavbarIconButtonComponent = ({ item }: NavbarIconButtonProps) => {
	if (item.routeName !== 'Login/Register' && item.routeName !== 'Logout') {
		return (
			<Link to={item.routeName === 'Home' ? '/' : `/${item.routeName}`}>
				<li className='navbar__menu-button'>
					<item.routeIcon />
					<span>{item.routeName}</span>
				</li>
			</Link>
		);
	} else {
		return (
			<li className='navbar__menu-button'>
				<item.routeIcon />
				<span>{item.routeName}</span>
			</li>
		);
	}
};

export default NavbarIconButtonComponent;
