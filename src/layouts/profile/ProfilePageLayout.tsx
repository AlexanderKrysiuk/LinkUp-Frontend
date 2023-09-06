import ContentComponent from '@components/profile/content/ContentComponent.tsx';
import HeaderComponent from '@components/profile/header/HeaderComponent.tsx';

import SidebarComponent from '@components/profile/sidebar/SidebarComponent.tsx';

import routes, { ProfileMenuItem } from '@router/ProfileMenuItems.ts';

import React, { useEffect, useRef, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import './ProfilePageLayout.css';

const errorRoute: ProfileMenuItem = {
	routeName: 'error',
	component: () => <div>Error</div>,
	subMenu: [{ routeName: 'error', component: () => <div>Error</div> }],
};

const defaultCategory: ProfileMenuItem = routes[0] ? routes[0] : errorRoute;
const defaultSubcategory: string =
	defaultCategory && defaultCategory.subMenu && defaultCategory.subMenu[0]
		? defaultCategory.subMenu[0].routeName
		: 'error';

const ProfilePageLayout = (): JSX.Element => {
	const navigate = useNavigate();

	useEffect(() => {
		navigate('/profile/overview');
	}, []);
	const defaultCategoryRef = useRef(defaultCategory);
	const [selectedCategory, setSelectedCategory] = useState(
		defaultCategoryRef.current,
	);
	const [selectedSubcategory, setSelectedSubcategory] = useState(
		() => defaultSubcategory,
	);
	const handleSelectedCategory = (category: ProfileMenuItem) => {
		setSelectedCategory(category);
	};

	const handleSelectedSubcategory = (subcategory: string) => {
		console.log('subcategory', subcategory);
		setSelectedSubcategory(subcategory);
	};
	return (
		<div className='profile'>
			<HeaderComponent clickHandler={handleSelectedCategory} />
			<SidebarComponent
				selectedCategory={selectedCategory}
				clickHandler={handleSelectedSubcategory}
			/>
			<ContentComponent />
		</div>
	);
};

export default ProfilePageLayout;
