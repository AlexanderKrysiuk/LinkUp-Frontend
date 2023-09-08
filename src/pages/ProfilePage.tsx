/**
 * @module ProfilePage
 * @description Page component for the profile page.
 */

import ProfilePageLayout from '@layouts/profile/ProfilePageLayout.tsx';
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
			<ProfilePageLayout />
		</>
	);
};

export default ProfilePage;
