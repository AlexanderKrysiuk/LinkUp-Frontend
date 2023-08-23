import React from 'react';
import { Link } from 'react-router-dom';

import { NavMenuItem } from '../Types.ts';

/**
 * Component for rendering an icon button in the navigation menu.
 *
 * This component displays an icon button in the navigation menu. It receives a navigation
 * menu item as a prop, which includes the route name, icon, and action associated with the
 * button. The component conditionally renders the icon button based on the route name, and
 * handles navigation using React Router's Link component.
 *
 * @component
 * @param {Object} props - The props object containing the navigation menu item.
 * @param {NavMenuItem} props.item - The navigation menu item object.
 * @returns {JSX.Element} - The rendered icon button component.
 * @example
 * ```tsx
 * const menuItem = {
 *   routeName: 'Home',
 *   routeIcon: HomeIcon,
 *   routeAction: null,
 * };
 *
 * <NavbarIconButtonComponent item={menuItem} />
 * ```
 */
const NavbarIconButtonComponent = ({
	item,
}: {
	item: NavMenuItem;
}): JSX.Element => {
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
