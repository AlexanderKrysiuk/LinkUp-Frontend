/**
 * @module NavbarMenuComponent
 * @description Module containing the navigation menu component for the navigation bar.
 */

import { AuthContext } from '@contexts/AuthContext.tsx';
import routes from '@router/NavMenuItems.ts';
import React, { useContext } from 'react';

import { setNavbarItems } from '@middleware/helpers/navbarHelper.ts';
import NavbarIconButtonComponent from '../iconbutton/NavbarIconButtonComponent.tsx';

/**
 * Component for rendering the navigation menu in the navigation bar.
 *
 * This component generates a list of navigation menu items based on the routes defined
 * in the `NavMenuItems.ts` file. It maps over each item and renders the
 * `NavbarIconButtonComponent` for each route.
 *
 * @component
 * @returns {JSX.Element} - The rendered navigation menu component.
 * @example
 * ```tsx
 * <NavbarMenuComponent />
 * ```
 */
const NavbarMenuComponent = (): JSX.Element => {
	const { isLogged } = useContext(AuthContext);

	// const allowedRoutes = isLogged
	// 	? ['home', 'new meeting', 'profile', 'logout']
	// 	: ['home', 'register', 'login'];

	const allowedRoutes = setNavbarItems(isLogged);

	return (
		<ul className='navbar__menu'>
			{routes.map((item, index) => {
				if (allowedRoutes.includes(item.routeName)) {
					return (
						<NavbarIconButtonComponent
							key={index}
							item={item}
						/>
					);
				} else {
					return null;
				}
			})}
		</ul>
	);
};

export default NavbarMenuComponent;
