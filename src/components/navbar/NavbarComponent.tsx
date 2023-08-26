import React from 'react';
import NavbarLogoComponent from './logo/NavbarLogoComponent.tsx';
import NavbarMenuComponent from './navmenu/NavbarMenuComponent.tsx';

/**
 * A reusable navigation bar component.
 *
 * This component renders a navigation bar with a logo and a menu.
 *
 * @component
 * @returns {JSX.Element} - The rendered navigation bar element.
 * @example
 * ```tsx
 * <NavbarComponent />
 * ```
 */
const NavbarComponent = (): JSX.Element => {
	return (
		<nav className='navbar__container'>
			<NavbarLogoComponent />
			<NavbarMenuComponent />
		</nav>
	);
};

export default NavbarComponent;
