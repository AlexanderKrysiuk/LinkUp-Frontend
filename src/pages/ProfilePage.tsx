import ContentComponent from '@components/profile/content/ContentComponent.tsx';
import HeaderComponent from '@components/profile/header/HeaderComponent.tsx';
import SidebarComponent from '@components/profile/sidebar/SidebarComponent.tsx';
import React from 'react';

/**
 * Page component for the profile page.
 *
 * This component represents the profile page of the application. It displays a header
 * indicating the page's title.
 *
 * @component
 * @returns {JSX.Element} - The rendered profile page.
 * @example
 * ```tsx
 * <ProfilePage />
 * ```
 */
const ProfilePage = (): JSX.Element => {
	return (
		<>
			<HeaderComponent />
			<SidebarComponent />
			<ContentComponent />
		</>
	);
};

export default ProfilePage;
