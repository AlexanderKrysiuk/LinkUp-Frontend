/**
 * @module NavbarMenuComponent
 * @description Module containing the navigation menu component for the navigation bar.
 */

import { AuthContext } from '@contexts/AuthContext.tsx';
import { setNavbarItems } from '@middleware/helpers/navbarHelper.ts';
import { getRole } from '@middleware/userHandler';
import routes from '@router/NavMenuItems.ts';
import React, { useContext, useEffect, useState } from 'react';
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
	const [userRole, setUserRole] = useState<string | null>(null);

	useEffect(() => {
		const fetchUserRole = async () => {
			const roleToSet: any = await getRole();
			setUserRole(roleToSet);
		};

		fetchUserRole();
	}, [isLogged]);

	const allowedRoutes = isLogged
		? setNavbarItems(userRole)
		: ['home', 'register', 'login'];

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
