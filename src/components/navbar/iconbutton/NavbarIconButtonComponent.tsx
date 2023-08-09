import React from 'react';
import { Link } from 'react-router-dom';

import { NavMenuItem } from '../Types.ts';

type NavbarIconButtonProps = {
	item: NavMenuItem;
};

const NavbarIconButtonComponent = ({ item }: NavbarIconButtonProps) => {
	return (
		<Link to={item.routeName === 'Home' ? '/' : `/${item.routeName}`}>
			<li className='navbar__menu-button'>
				<item.routeIcon />
				<span>{item.routeName}</span>
			</li>
		</Link>
	);
};

export default NavbarIconButtonComponent;
