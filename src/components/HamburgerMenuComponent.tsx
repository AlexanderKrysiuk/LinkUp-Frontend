import routes from '@router/NavMenuItems.ts';
import React from 'react';

const HamburgerMenuComponent = (): JSX.Element | null => {
	return (
		<div className={`hamburger-sidebar__container}`}>
			<ul className='hamburger-sidebar__container-menu'>
				{routes.map((item, index) => (
					<li
						className='hamburger-sidebar__menu-link'
						key={index}>
						{item.routeName}
					</li>
				))}
			</ul>
		</div>
	);
};

export default HamburgerMenuComponent;
