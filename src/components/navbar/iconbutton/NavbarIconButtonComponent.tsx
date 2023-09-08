import React from 'react';
import { Link } from 'react-router-dom';

import { removeTokenFromLocalStorage } from '@utils/auth.ts';
import { useNavigate } from 'react-router-dom';
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
	const navigate = useNavigate();

	if (item.routeName === 'profile') {
		return (
			<Link to={`${item.routeName}/overview`}>
				<li className='navbar__menu-button'>
					<item.routeIcon />
					<span>{`${item.routeName}`}</span>
				</li>
			</Link>
		);
	} else if (item.routeName == 'logout') {
		return (
			<li
				className='navbar__menu-button'
				onClick={() => removeTokenFromLocalStorage(navigate)}>
				<item.routeIcon />
				<span>{item.routeName}</span>
			</li>
		);
	} else if (
		item.routeName !== 'login' &&
		item.routeName !== 'register' &&
		item.routeName !== 'logout'
	) {
		return (
			<Link to={item.routeName === 'home' ? '/' : `/${item.routeName}`}>
				<li className='navbar__menu-button'>
					<item.routeIcon />
					<span>{item.routeName}</span>
				</li>
			</Link>
		);
	} else {
		return (
			<Link to={item.routeName}>
				<li className='navbar__menu-button'>
					<item.routeIcon />
					<span>{item.routeName}</span>
				</li>
			</Link>
		);
	}
};

export default NavbarIconButtonComponent;
