import HamburgerMenuComponent from '@components/HamburgerMenuComponent.tsx';

import { motion } from 'framer-motion';

import './HamburgerSidebarCss.css';

import React from 'react';

interface SidebarProps {
	isVisible: boolean;
}

export const FADE_TIME: number = 0.25;

export const OFFSET_TIME: number = 0;

const Sidebar = ({ isVisible }: SidebarProps): JSX.Element | null => {
	if (!isVisible) {
		return null;
	}
	return (
		<motion.div
			className={'hamburger-sidebar'}
			initial={{ left: -250 }}
			animate={{ left: 0 }}
			exit={{ left: -250 }}
			transition={{ duration: FADE_TIME, delay: OFFSET_TIME }}>
			<HamburgerMenuComponent />
		</motion.div>
	);
};

export default Sidebar;
