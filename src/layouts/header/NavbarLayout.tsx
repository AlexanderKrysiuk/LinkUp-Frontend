import NavbarComponent from '@components/navbar/NavbarComponent.tsx';
import React from 'react';
import './NavbarLayoutCss.css';

const NavbarLayout = () => {
	return (
		<header className='navbar'>
			<NavbarComponent />
		</header>
	);
};

export default NavbarLayout;
