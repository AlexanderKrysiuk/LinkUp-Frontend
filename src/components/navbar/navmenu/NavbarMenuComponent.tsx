import React from 'react';
import routes from '../NavMenuItems.ts';

import NavbarIconButtonComponent from '../iconbutton/NavbarIconButtonComponent.tsx';

/**
 * Component for rendering the navigation menu.
 *
 * This component displays the navigation menu, which includes a list of navigation items.
 * It maps over the `routes` array to render each navigation item as an icon button using
 * the `NavbarIconButtonComponent` component.
 *
 * @component
 * @returns {JSX.Element} - The rendered navigation menu.
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
