import { useBackdrop } from '@hooks/BackdropHooks.tsx';
import { useHamburgerSidebarToggle } from '@hooks/HamburgerSidebarHooks.tsx';
import { NavMenuItem } from '@router/NavMenuItems.ts';
import React from 'react';

import { NavLink } from 'react-router-dom';

type HamburgerLinkComponentProps = {
	item: NavMenuItem;
};

const HamburgerLinkComponent = ({
	item,
}: HamburgerLinkComponentProps): JSX.Element => {
	const { toggleHamburgerSidebar } = useHamburgerSidebarToggle();
	const { toggleBackdrop } = useBackdrop();

	const clickHandler = (): void => {
		toggleHamburgerSidebar();
		toggleBackdrop();
	};

	if (item.routeName === 'home') {
		return (
			<NavLink
				to={'/'}
				onClick={clickHandler}>
				<li className='hamburger-sidebar__menu-link'>
					{/* <item.routeIcon /> */}
					<span>{item.routeName}</span>
				</li>
			</NavLink>
		);
	} else {
		return (
			<NavLink
				to={item.routeName}
				onClick={clickHandler}>
				<li className='hamburger-sidebar__menu-link'>
					{/* <item.routeIcon /> */}
					<span>{item.routeName}</span>
				</li>
			</NavLink>
		);
	}
};

export default HamburgerLinkComponent;
