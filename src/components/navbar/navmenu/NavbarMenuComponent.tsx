import React from 'react';
import routes from '../NavMenuItems.ts';
import NavbarIconButtonComponent from '../iconbutton/NavbarIconButtonComponent.tsx';

const NavbarMenuComponent = () => {
	return (
		<ul className='navbar__menu'>
			{routes.map((item, index) => {
				return (
					<NavbarIconButtonComponent
						key={index}
						item={item}
					/>
				);
			})}
		</ul>
	);
};

export default NavbarMenuComponent;
