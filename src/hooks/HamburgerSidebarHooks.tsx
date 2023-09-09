import { useContext } from 'react';

import {
	HamburgerSidebarContext,
	HamburgerSidebarToggleContext,
} from '@contexts/HamburgerSidebarContext';

interface UseHamburgerSidebarToggleResult {
	toggleHamburgerSidebar: () => void;
}

interface UseIsHamburgerSidebarOpenResult {
	isHamburgerSidebarOpen: boolean;
}

export const useHamburgerSidebarToggle =
	(): UseHamburgerSidebarToggleResult => {
		const { toggleHamburgerSidebar } = useContext(
			HamburgerSidebarToggleContext,
		);
		return { toggleHamburgerSidebar };
	};

export const useIsHamburgerSidebarOpen =
	(): UseIsHamburgerSidebarOpenResult => {
		const { isHamburgerSidebarOpen } = useContext(HamburgerSidebarContext);
		return { isHamburgerSidebarOpen };
	};
