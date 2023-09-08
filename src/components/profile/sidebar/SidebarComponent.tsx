/**
 * @module SidebarComponent
 * @description Module containing the component for rendering a profile sidebar.
 */

import React from 'react';
import SubcategoriesComponent from './subcategories/SubcategoriesComponent.tsx';

import { ProfileMenuItem } from '@router/ProfileMenuItems.ts';

/**
 * Props for the SidebarComponent.
 */
interface SidebarComponentProps {
	/**
	 * The currently selected category.
	 */
	selectedCategory: ProfileMenuItem;

	/**
	 * A function to handle subcategory item clicks.
	 *
	 * @param {string} text - The text of the clicked subcategory item.
	 */
	clickHandler: (text: string) => void;
}

/**
 * Component for rendering a profile sidebar.
 *
 * This component displays a sidebar for a profile page, including a list of subcategories
 * within the currently selected category. Users can click on a subcategory to trigger the
 * provided click handler function.
 *
 * @component
 * @param {SidebarComponentProps} props - The props for the SidebarComponent.
 * @param {ProfileMenuItem} props.selectedCategory - The currently selected category.
 * @param {Function} props.clickHandler - A function to handle subcategory item clicks.
 * @returns {JSX.Element} - The rendered SidebarComponent.
 * @example
 * ```tsx
 * // Example of using SidebarComponent:
 * const handleSubcategoryClick = (text) => {
 *   // Handle subcategory click logic
 * };
 *
 * const selectedCategory = {
 *   routeName: 'category1',
 *   subMenu: [
 *     { routeName: 'subcategory1' },
 *     { routeName: 'subcategory2' },
 *   ],
 * };
 *
 * <SidebarComponent
 *   selectedCategory={selectedCategory}
 *   clickHandler={handleSubcategoryClick}
 * />
 * ```
 */
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
