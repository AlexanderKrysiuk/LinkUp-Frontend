import React from 'react';
import CategoriesComponent from './categories/CategoriesComponent.tsx';

import UserDetailsComponent from './userdetails/UserDetailsComponent.tsx';

interface HeaderComponentProps {
	selectedCategory: string;
	onCategoryClick: (category: string) => void;
}

const HeaderComponent = ({
	selectedCategory,
	onCategoryClick,
}: HeaderComponentProps): JSX.Element => {
	return (
		<div className='profile__header'>
			{/* User details component */}
			<UserDetailsComponent />

			{/* Categories navigation */}
			<CategoriesComponent
				selectedCategory={selectedCategory}
				onCategoryClick={onCategoryClick}
			/>
		</div>
	);
};

export default HeaderComponent;
