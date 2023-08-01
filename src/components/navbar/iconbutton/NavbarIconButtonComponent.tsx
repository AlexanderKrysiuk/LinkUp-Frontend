import React from 'react';

type Item = {
	routeName: string;
	routeIcon: string | null;
	routeAction: (() => void) | null;
};

type NavbarIconButtonProps = {
	item: Item;
};

const NavbarIconButtonComponent = ({ item }: NavbarIconButtonProps) => {
	return <li className='navbar__menu-button'>{item.routeName}</li>;
};

export default NavbarIconButtonComponent;
