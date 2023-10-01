/**
 * @module ProfilePage
 * @description Page component for the profile page.
 */

import ProfilePageLayout from '@layouts/profile/ProfilePageLayout.tsx';
import routes from '@router/ProfileMenuItems.ts';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
	const navigate = useNavigate();

	// Use an effect to set the default route to '/profile/overview'.
	useEffect(() => {
		navigate(
			`/profile/${routes[0]?.routeName}/${routes[0]?.subMenu[0]?.routeName}`,
		);
	}, []);
	return (
		<>
			<ProfilePageLayout />
		</>
	);
};

export default ProfilePage;
