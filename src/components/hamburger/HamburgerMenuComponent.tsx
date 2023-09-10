import HamburgerLinkComponent from '@components/hamburger/HamburgerLinkComponent.tsx';
import routes from '@router/NavMenuItems.ts';

import React from 'react';

const HamburgerMenuComponent = (): JSX.Element | null => {
	return (
		<ul className='hamburger-sidebar__menu'>
			{routes.map((item, index) => {
				return (
					<HamburgerLinkComponent
						key={index}
						item={item}
					/>
				);
			})}
		</ul>
	);
};

export default HamburgerMenuComponent;
