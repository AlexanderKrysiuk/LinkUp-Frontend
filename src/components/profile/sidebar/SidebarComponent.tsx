import React from 'react';
import SubcategoriesComponent from './subcategories/SubcategoriesComponent.tsx';

import { ProfileMenuItem } from '@router/ProfileMenuItems.ts';

interface SidebarComponentProps {
	selectedCategory: ProfileMenuItem;
	clickHandler: (text: string) => void;
}
const SidebarComponent = ({
	selectedCategory,
	clickHandler,
}: SidebarComponentProps): JSX.Element => {
	return (
		<div className='profile__sidebar'>
			<SubcategoriesComponent
				clickHandler={clickHandler}
				selectedCategory={selectedCategory}
			/>
		</div>
	);
};

export default SidebarComponent;
