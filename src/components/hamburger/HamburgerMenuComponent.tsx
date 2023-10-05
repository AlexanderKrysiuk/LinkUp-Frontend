import HamburgerLinkComponent from '@components/hamburger/HamburgerLinkComponent.tsx';
import { AuthContext } from '@contexts/AuthContext';
import { getRole } from '@middleware/userHandler';
import routes from '@router/NavMenuItems.ts';

import { setNavbarItems } from '@middleware/helpers/navbarHelper';
import React, { useContext, useEffect, useState } from 'react';

const HamburgerMenuComponent = (): JSX.Element | null => {
	const { isLogged } = useContext(AuthContext);
	const [userRole, setUserRole] = useState<string | null>(null);
	const allowedRoutes = isLogged
		? setNavbarItems(userRole)
		: ['home', 'register', 'login'];

	useEffect(() => {
		const fetchUserRole = async () => {
			const roleToSet: any = await getRole();
			setUserRole(roleToSet);
		};

		fetchUserRole();
	}, [isLogged]);

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
