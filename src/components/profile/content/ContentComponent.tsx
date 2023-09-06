// ContentComponent.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';

const ContentComponent = (): JSX.Element => {
	return (
		<div className='profile__content'>
			<Outlet />
		</div>
	);
};

export default ContentComponent;
