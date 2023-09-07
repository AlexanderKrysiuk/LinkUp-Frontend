/**
 * @module NavbarMenuComponent
 * @description Module containing the navigation menu component for the navigation bar.
 */

import routes from '@router/NavMenuItems.ts';
import React from 'react';

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
	return (
		<ul className='navbar__menu'>
			{routes.map((item, index) => {
				return (
					<NavbarIconButtonComponent
						key={index}
						item={item}
					/>
				);
			})}
		</ul>
	);
};

export default NavbarMenuComponent;
