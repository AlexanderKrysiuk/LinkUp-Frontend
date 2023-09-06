import React from 'react';
import CategoriesComponent from './categories/CategoriesComponent.tsx';

import { ProfileMenuItem } from '@router/ProfileMenuItems.ts';
import UserDetailsComponent from './userdetails/UserDetailsComponent.tsx';

interface HeaderComponentProps {
	clickHandler: (category: ProfileMenuItem) => void;
}
const HeaderComponent = ({
	clickHandler,
}: HeaderComponentProps): JSX.Element => {
	return (
		<div className='profile__header'>
			<UserDetailsComponent />
			<CategoriesComponent clickHandler={clickHandler} />
		</div>
	);
};

export default HeaderComponent;
