import NavbarComponent from '@components/navbar/NavbarComponent.tsx';
import React from 'react';
import './NavbarLayoutCss.css';

/**
 * Layout component for the navigation bar.
 *
 * This component represents the navigation bar layout. It includes the `NavbarComponent`
 * component responsible for rendering the logo and navigation menu.
 *
 * @component
 * @returns {JSX.Element} - The rendered navigation bar layout.
 * @example
 * ```tsx
 * <NavbarLayout />
 * ```
 */
const NavbarLayout = (): JSX.Element => {
	return (
		<header
			id='navbar'
			className='navbar'>
			<NavbarComponent />
		</header>
	);
};

export default NavbarLayout;
