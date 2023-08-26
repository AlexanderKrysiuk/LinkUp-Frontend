import ContentComponent from '@components/profile/content/ContentComponent.tsx';
import HeaderComponent from '@components/profile/header/HeaderComponent.tsx';
import SidebarComponent from '@components/profile/sidebar/SidebarComponent.tsx';
import React from 'react';

const ProfilePage = () => {
	return (
		<>
			<HeaderComponent />
			<SidebarComponent />
			<ContentComponent />
		</>
	);
};

export default ProfilePage;
