import HamburgerLinkComponent from '@components/hamburger/HamburgerLinkComponent.tsx';
import { AuthContext } from '@contexts/AuthContext';
import routes from '@router/NavMenuItems.ts';

import { setNavbarItems } from '@middleware/helpers/navbarHelper';
import React, { useContext } from 'react';

const HamburgerMenuComponent = (): JSX.Element | null => {
	const { isLogged } = useContext(AuthContext);

	const allowedRoutes = setNavbarItems(isLogged);

	return (
		<ul className='hamburger-sidebar__menu'>
			{routes.map((item, index) => {
				if (allowedRoutes.includes(item.routeName)) {
					return (
						<HamburgerLinkComponent
							key={index}
							item={item}
						/>
					);
				} else {
					return null;
				}
			})}
		</ul>
	);
};

export default HamburgerMenuComponent;
