import React from 'react';
import SubcategoriesComponent from './subcategories/SubcategoriesComponent.tsx';

interface SidebarComponentProps {
	subRoutes: submenuItem[];
	selectedCategory: string;
	selectedSubcategory: string;
	onSubcategoryClick: (selectedSubcategory: string) => void;
}

type submenuItem = {
	routeName: string;
};

const SidebarComponent = ({
	selectedCategory,
	selectedSubcategory,
	subRoutes,
	onSubcategoryClick,
}: SidebarComponentProps): JSX.Element => {
	return (
		<div className='profile__sidebar'>
			{selectedCategory && (
				<SubcategoriesComponent
					selectedCategory={selectedCategory} // Pass the routeName prop here
					selectedSubcategory={selectedSubcategory}
					subRoutes={subRoutes}
					onSubcategoryClick={onSubcategoryClick}
				/>
			)}
		</div>
	);
};

export default SidebarComponent;
