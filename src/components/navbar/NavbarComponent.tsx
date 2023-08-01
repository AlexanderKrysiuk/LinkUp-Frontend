import React from 'react';
import NavbarLogoComponent from './logo/NavbarLogoComponent.tsx';
import NavbarMenuComponent from './navmenu/NavbarMenuComponent.tsx';

const NavbarComponent = () => {
	return (
		<nav className='navbar__container'>
			<NavbarLogoComponent />
			<NavbarMenuComponent />
		</nav>
	);
};

export default NavbarComponent;
