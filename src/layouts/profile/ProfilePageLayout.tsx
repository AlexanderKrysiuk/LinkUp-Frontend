import ContentComponent from '@components/profile/content/ContentComponent.tsx';
import HeaderComponent from '@components/profile/header/HeaderComponent.tsx';

import SidebarComponent from '@components/profile/sidebar/SidebarComponent.tsx';

import routes, {
	SubmenuItem,
} from '@components/profile/header/ProfileMenuItems.ts';

import React, { useEffect, useState } from 'react';

import { Route, Routes, useNavigate } from 'react-router-dom';

const ProfilePageLayout = (): JSX.Element => {
	const [selectedHeaderCategory, setSelectedHeaderCategory] = useState('');
	const [selectedSidebarSubcategory, setSelectedSidebarSubcategory] =
		useState('');

	const navigate = useNavigate();

	useEffect(() => {
		// Set the initial selected category and subcategory
		const initialCategory = routes[0]?.routeName || '';
		const initialSubcategory = routes[0]?.subMenu[0]?.routeName || '';

		setSelectedHeaderCategory(initialCategory);
		setSelectedSidebarSubcategory(initialSubcategory);

		// Navigate to the initial URL
		navigate(`/Profile/${initialCategory}/${initialSubcategory}`);
	}, [navigate]);

	const handleHeaderCategoryClick = (category: string) => {
		setSelectedHeaderCategory(category);
		setSelectedSidebarSubcategory('');
		navigate(`/Profile/${category}`);
	};

	const handleSidebarSubcategoryClick = (subcategory: string) => {
		const category = selectedHeaderCategory;
		setSelectedSidebarSubcategory(subcategory);
		navigate(`/Profile/${category}/${subcategory}`);
	};
	``;
	const findSubRoutes = (categoryName: string = selectedHeaderCategory) => {
		let subRoutes: SubmenuItem[] | undefined = routes.find(
			(category) => category.routeName === categoryName,
		);
		if (!subRoutes) {
			subRoutes = [];
		}
		return subRoutes;
	};

	return (
		<div className='profile'>
			<HeaderComponent
				selectedCategory={selectedHeaderCategory}
				onCategoryClick={handleHeaderCategoryClick}
			/>
			<SidebarComponent
				selectedCategory={selectedHeaderCategory}
				selectedSubcategory={selectedSidebarSubcategory}
				subRoutes={findSubRoutes}
				onSubcategoryClick={handleSidebarSubcategoryClick}
			/>

			<ContentComponent
				selectedHeaderCategory={selectedHeaderCategory}
				selectedSidebarSubcategory={selectedSidebarSubcategory}>
				<Routes>
					{routes.map((item) => (
						<Route
							key={item.routeName}
							path={`/Profile/${item.routeName}`}
						/>
					))}
				</Routes>
			</ContentComponent>
		</div>
	);
};

export default ProfilePageLayout;
