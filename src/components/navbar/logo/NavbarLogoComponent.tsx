/// <reference types="vite-plugin-svgr/client" />

import { ReactComponent as Logo } from '@icons/temporary-logo.svg';
import React from 'react';

/**
 * A reusable logo component for the navigation bar.
 *
 * This component renders a logo using the provided SVG icon.
 *
 * @component
 * @returns {JSX.Element} - The rendered logo element.
 * @example
 * ```tsx
 * <NavbarLogoComponent />
 * ```
 */
const NavbarLogoComponent = (): JSX.Element => {
	/**
	 * The SVG logo icon rendered with the specified CSS class.
	 * @type {JSX.Element}
	 */
	const logoElement: JSX.Element = <Logo className='navbar__logo' />;

	return logoElement;
};

export default NavbarLogoComponent;
