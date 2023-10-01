/**
 * @module ProfilePageLayout
 * @description Module containing the profile page layout component.
 */

import ContentComponent from '@components/profile/content/ContentComponent.tsx';
import HeaderComponent from '@components/profile/header/HeaderComponent.tsx';

import SidebarComponent from '@components/profile/sidebar/SidebarComponent.tsx';

import routes, { ProfileMenuItem } from '@router/ProfileMenuItems.ts';

import React, { useEffect, useRef, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import './ProfilePageLayout.css';

// Define a default error route for handling errors.
const errorRoute: ProfileMenuItem = {
	routeName: 'error',
	component: () => <div>Error</div>,
	subMenu: [{ routeName: 'error', component: () => <div>Error</div> }],
};

// Determine the default category and subcategory based on the routes.
const defaultCategory: ProfileMenuItem = routes[0] ? routes[0] : errorRoute;
const defaultSubcategory: string =
	defaultCategory && defaultCategory.subMenu && defaultCategory.subMenu[0]
		? defaultCategory.subMenu[0].routeName
		: 'error';

/**
 * Component for rendering the profile page layout.
 *
 * This component defines the structure and content of the profile page, including the header,
 * sidebar, and content sections. It initializes with the 'overview' route as the default.
 *
 * @component
 * @returns {JSX.Element} - The rendered profile page layout.
 * @example
 * ```tsx
 * <ProfilePageLayout />
 * ```
 */
const ProfilePageLayout = (): JSX.Element => {
	// Initialize React Router's navigation hook.
	const navigate = useNavigate();

	// Use an effect to set the default route to '/profile/overview'.
	useEffect(() => {
		navigate(
			`/profile/${routes[0]?.routeName}/${routes[0]?.subMenu[0]?.routeName}`,
		);
	}, []);

	// Use a ref to store the default category.
	const defaultCategoryRef = useRef(defaultCategory);

	// Initialize state variables for the selected category and subcategory.
	const [selectedCategory, setSelectedCategory] = useState(
		defaultCategoryRef.current,
	);
	const [_, setSelectedSubcategory] = useState(() => defaultSubcategory);

	/**
	 * Handle the selection of a profile category.
	 * @param {ProfileMenuItem} category - The selected profile category.
	 */
	const handleSelectedCategory = (category: ProfileMenuItem) => {
		setSelectedCategory(category);
	};

	/**
	 * Handle the selection of a profile subcategory.
	 * @param {string} subcategory - The selected profile subcategory.
	 */
	const handleSelectedSubcategory = (subcategory: string) => {
		console.log('subcategory', subcategory);
		setSelectedSubcategory(subcategory);
	};

	return (
		<div className='profile'>
			{/* Render the header component with category selection handler */}
			<HeaderComponent clickHandler={handleSelectedCategory} />
			{/* Render the sidebar component with subcategory selection handler */}
			<div className='profile__bottom-container'>
				<SidebarComponent
					selectedCategory={selectedCategory}
					clickHandler={handleSelectedSubcategory}
				/>
				{/* Render the content component */}
				<ContentComponent />
			</div>
		</div>
	);
};

export default ProfilePageLayout;
