/**
 * @module NavbarLayout
 * @description Module containing the navbar layout component.
 */

import NavbarComponent from '@components/navbar/NavbarComponent.tsx';
import React from 'react';
import './NavbarLayoutCss.css';

/**
 * Component for rendering the navbar layout.
 *
 * This component defines the structure and content of the header section in the application,
 * including the navigation bar.
 *
 * @component
 * @returns {JSX.Element} - The rendered navbar layout.
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
			{/* Render the navbar component */}
			<NavbarComponent />
		</header>
	);
};

export default NavbarLayout;
