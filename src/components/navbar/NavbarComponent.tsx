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
const NavbarComponent = () => {
	return (
		<nav className='navbar__container'>
			{/* Render logo component */}
			<NavbarLogoComponent />

			{/* Render menu component */}
			<NavbarMenuComponent />
		</nav>
	);
};

export default NavbarComponent;
