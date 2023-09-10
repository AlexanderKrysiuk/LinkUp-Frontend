/**
 * @module NavbarMenuComponent
 * @description Module containing the navigation menu component for the navigation bar.
 */

import { UserContext } from '@contexts/AuthContext.ts';
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
	//const { isLogged } = useContext(UserContext);
	const [user, setUser] = useState<boolean | undefined>(undefined);

	useEffect(() => {
			const storedToken = localStorage.getItem('token');
			if (storedToken) {
				setUser(true);
			}
			else{setUser(false);}
		});
	
	const allowedRoutes = user
		? ['home', 'contact', 'profile', 'logout']
		: ['home', 'contact', 'register', 'login'];

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
