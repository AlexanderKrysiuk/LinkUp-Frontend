import React from 'react';
import LogoComponent from './logo/LogoComponent.tsx';
import NavbarMenuComponent from './navmenu/NavbarMenuComponent.tsx';

const NavbarComponent = () => {
	return (
		<nav className='navbar__container'>
			<LogoComponent />
			<NavbarMenuComponent />
		</nav>
	);
};

export default NavbarComponent;
