import NewMeetingComponent from '@components/meetingForm/NewMeetingComponent';
import { AuthContext } from '@contexts/AuthContext';
import { useBackdrop } from '@hooks/BackdropHooks.tsx';
import { useHamburgerSidebarToggle } from '@hooks/HamburgerSidebarHooks.tsx';
import { useModal } from '@hooks/ModalHooks';
import { removeTokenFromLocalStorage } from '@middleware/authHandler';
import { NavMenuItem } from '@router/NavMenuItems.ts';
import React, { useContext } from 'react';

import { NavLink, useNavigate } from 'react-router-dom';

type HamburgerLinkComponentProps = {
	item: NavMenuItem;
};

const HamburgerLinkComponent = ({
	item,
}: HamburgerLinkComponentProps): JSX.Element => {
	const { toggleHamburgerSidebar } = useHamburgerSidebarToggle();
	const { setIsLogged } = useContext(AuthContext);
	const navigate = useNavigate();
	const { toggleBackdrop } = useBackdrop();
	const { setModal } = useModal();

	const handleToggle = () => {
		setModal(<NewMeetingComponent />);
		toggleBackdrop();
	};

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
	} else if (item.routeName === 'logout') {
		return (
			<NavLink
				to={'/'}
				onClick={() => {
					removeTokenFromLocalStorage(navigate);
					setIsLogged(false);
				}}>
				<li className='hamburger-sidebar__menu-link'>
					{/* <item.routeIcon /> */}
					<span>{item.routeName}</span>
				</li>
			</NavLink>
		);
	} else if (item.routeName === 'new meeting') {
		return (
			<li
				className='hamburger-sidebar__menu-link'
				onClick={handleToggle}>
				<span>{item.routeName}</span>
			</li>
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
