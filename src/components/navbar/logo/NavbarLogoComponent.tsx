/**
 * @module NavbarLogoComponent
 * @description Module containing the navigation bar logo component.
 */

/// <reference types="vite-plugin-svgr/client" />

import { ReactComponent as Logo } from '@icons/temporary-logo.svg';
import React from 'react';

/**
 * Component for rendering the navigation bar logo.
 *
 * This component displays the logo in the navigation bar. It uses the `vite-plugin-svgr`
 * to import the SVG file as a React component, allowing it to be used seamlessly within
 * the application.
 *
 * @component
 * @returns {JSX.Element} - The rendered logo component.
 * @example
 * ```tsx
 * <NavbarLogoComponent />
 * ```
 */
const NavbarLogoComponent = (): JSX.Element => {
	const logoElement: JSX.Element = <Logo className='navbar__logo' />;
	return logoElement;
};

export default NavbarLogoComponent;
