import HamburgerSidebarComponent from '@components/HamburgerSidebarComponent';
import {
	useHamburgerSidebarToggle,
	useIsHamburgerSidebarOpen,
} from '@hooks/HamburgerSidebarHooks';

import { AnimatePresence } from 'framer-motion';

import React, { createContext, useEffect, useRef, useState } from 'react';

interface HamburgerSidebarContextValue {
	isHamburgerSidebarOpen: boolean;
}

export const HamburgerSidebarContext: React.Context<HamburgerSidebarContextValue> =
	createContext<HamburgerSidebarContextValue>({
		isHamburgerSidebarOpen: false,
	});

interface HamburgerSidebarToggleContextValue {
	toggleHamburgerSidebar: () => void;
}

export const HamburgerSidebarToggleContext: React.Context<HamburgerSidebarToggleContextValue> =
	createContext<HamburgerSidebarToggleContextValue>({
		toggleHamburgerSidebar: () => {},
	});

interface HamburgerSidebarProviderProps {
	children: React.ReactNode;
}

export const HamburgerSidebarProvider = ({
	children,
}: HamburgerSidebarProviderProps): JSX.Element => {
	const [isHamburgerSidebarOpen, setIsHamburgerSidebarOpen] =
		useState<boolean>(false);

	const toggleHamburgerSidebar = () => {
		setIsHamburgerSidebarOpen(
			(prevIsHamburgerSidebarOpen) => !prevIsHamburgerSidebarOpen,
		);
	};

	return (
		<HamburgerSidebarContext.Provider value={{ isHamburgerSidebarOpen }}>
			<HamburgerSidebarToggleContext.Provider
				value={{ toggleHamburgerSidebar }}>
				{children}
			</HamburgerSidebarToggleContext.Provider>
		</HamburgerSidebarContext.Provider>
	);
};

export const HamburgerSidebar = (): JSX.Element | null => {
	const { isHamburgerSidebarOpen } = useIsHamburgerSidebarOpen();
	const { toggleHamburgerSidebar } = useHamburgerSidebarToggle(); // Use the toggle hook
	const sidebarRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				isHamburgerSidebarOpen &&
				sidebarRef.current &&
				!sidebarRef.current.contains(event.target as Node)
			) {
				toggleHamburgerSidebar();
			}
		};

		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isHamburgerSidebarOpen, toggleHamburgerSidebar]);

	return (
		<AnimatePresence>
			{isHamburgerSidebarOpen ? (
				<div
					ref={sidebarRef}
					className={'hamburger-sidebar-container'}>
					<HamburgerSidebarComponent isVisible={true} />
				</div>
			) : null}
		</AnimatePresence>
	);
};
