import ContentComponent from '@components/profile/content/ContentComponent.tsx';
import HeaderComponent from '@components/profile/header/HeaderComponent.tsx';

import SidebarComponent from '@components/profile/sidebar/SidebarComponent.tsx';

import React from 'react';

import './ProfilePageLayout.css';

const ProfilePageLayout = (): JSX.Element => {
	return (
		<div className='profile'>
			<HeaderComponent />
			<SidebarComponent />
			<ContentComponent />
		</div>
	);
};

export default ProfilePageLayout;
