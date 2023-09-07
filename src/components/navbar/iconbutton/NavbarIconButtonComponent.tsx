/**
 * @module NavbarIconButtonComponent
 * @description Module containing the navigation menu icon button component.
 */

import { NavMenuItem } from '@router/NavMenuItems.ts';
import React from 'react';

import { NavLink } from 'react-router-dom';

/**
 * Props for the `NavbarIconButtonComponent` component.
 *
 * @internal
 * @typedef {Object} NavbarIconButtonComponentProps
 * @property {NavMenuItem} item - The navigation menu item object.
 */
type NavbarIconButtonComponentProps = {
	/**
	 * The navigation menu item object.
	 */
	item: NavMenuItem;
};

/**
 * Component for rendering an icon button in the navigation menu.
 *
 * This component displays an icon button in the navigation menu. It receives a navigation
 * menu item as a prop, which includes the route name, icon, and action associated with the
 * button. The component conditionally renders the icon button based on the route name, and
 * handles navigation using React Router's NavLink component.
 *
 * @component
 * @param {NavbarIconButtonComponentProps} props - The component props.
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
}: NavbarIconButtonComponentProps): JSX.Element => {
	if (item.routeName === 'profile') {
		return (
			<NavLink to={item.routeName}>
				<li className='navbar__menu-button'>
					<item.routeIcon />
					<span>{`${item.routeName}`}</span>
				</li>
			</NavLink>
		);
	} else if (
		item.routeName !== 'login' &&
		item.routeName !== 'register' &&
		item.routeName !== 'logout'
	) {
		return (
			<NavLink
				to={item.routeName === 'home' ? '/' : `/${item.routeName}`}>
				<li className='navbar__menu-button'>
					<item.routeIcon />
					<span>{item.routeName}</span>
				</li>
			</NavLink>
		);
	} else {
		return (
			<NavLink to={item.routeName}>
				<li className='navbar__menu-button'>
					<item.routeIcon />
					<span>{item.routeName}</span>
				</li>
			</NavLink>
		);
	}
};

export default NavbarIconButtonComponent;
