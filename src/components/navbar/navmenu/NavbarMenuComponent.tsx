import React from 'react';
import routes from '../NavMenuItems.ts';

import NavbarIconButtonComponent from '../iconbutton/NavbarIconButtonComponent.tsx';

const allCookies = document.cookie;
const cookieArray = allCookies.split('; ');
const verifiedCookie = cookieArray.find((cookie) =>
	cookie.startsWith('verified='),
);
const verifiedValue = verifiedCookie ? verifiedCookie.split('=')[1] : null;
const login: string = 'Login/Register';
const logout: string = 'Logout';
console.log(verifiedValue);

const NavbarMenuComponent = () => {
	return (
		<ul className='navbar__menu'>
			{routes.map((item, index) => {
				if (item.routeName !== login && item.routeName !== logout) {
					return (
						<NavbarIconButtonComponent
							key={index}
							item={item}
						/>
					);
				} else if (
					verifiedValue === 'true' &&
					item.routeName === login
				) {
					null;
				} else if (!verifiedValue && item.routeName === login) {
					return (
						<NavbarIconButtonComponent
							key={index}
							item={item}
						/>
					);
				} else if (
					verifiedValue === 'true' &&
					item.routeName === logout
				) {
					return (
						<NavbarIconButtonComponent
							key={index}
							item={item}
						/>
					);
				} else if (!verifiedValue && item.routeName === logout) {
					null;
				}
			})}
		</ul>
	);
};

export default NavbarMenuComponent;
