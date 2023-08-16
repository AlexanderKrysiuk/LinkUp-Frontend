/// <reference types="vite-plugin-svgr/client" />
import { ReactComponent as Logo } from '@icons/temporary-logo.svg';
import React from 'react';

const NavbarLogoComponent = () => {
	return <Logo className='navbar__logo' />;
};

export default NavbarLogoComponent;
