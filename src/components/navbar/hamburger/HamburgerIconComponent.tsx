import {
	useHamburgerSidebarToggle,
	useIsHamburgerSidebarOpen,
} from '@hooks/HamburgerSidebarHooks.tsx';
import React from 'react';

const HamburgerIconComponent = ({}): JSX.Element => {
	const { toggleHamburgerSidebar } = useHamburgerSidebarToggle();
	const { isHamburgerSidebarOpen } = useIsHamburgerSidebarOpen();

	const handleButtonClick = () => {
		if (!isHamburgerSidebarOpen) {
			toggleHamburgerSidebar();
			//toggleBackdrop();
		}
	};

	return (
		<div className={`navbar__hamburger-menu`}>
			<button
				className='navbar__hamburger-menu-icon'
				onClick={handleButtonClick}
				onTouchCancel={handleButtonClick}
				disabled={isHamburgerSidebarOpen}>
				<div className='navbar__hamburger-menu-icon-bar'></div>
				<div className='navbar__hamburger-menu-icon-bar'></div>
				<div className='navbar__hamburger-menu-icon-bar'></div>
			</button>
		</div>
	);
};

export default HamburgerIconComponent;
