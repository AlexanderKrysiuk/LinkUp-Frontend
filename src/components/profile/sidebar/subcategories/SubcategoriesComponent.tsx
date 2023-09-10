/**
 * @module SubcategoriesComponent
 * @description Module containing the component for rendering profile subcategories.
 */

import PillComponent from '@components/utils/buttons/PillComponent.tsx';
import { ProfileMenuItem, SubmenuItem } from '@router/ProfileMenuItems.ts';

import React from 'react';

import { NavLink } from 'react-router-dom';

/**
 * Props for the SubcategoriesComponent.
 */
interface SubcategoriesComponentProps {
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
 * Component for rendering profile subcategories.
 *
 * This component displays a list of subcategories within the currently selected category.
 * Users can click on a subcategory to trigger the provided click handler function.
 *
 * @component
 * @param {SubcategoriesComponentProps} props - The props for the SubcategoriesComponent.
 * @param {ProfileMenuItem} props.selectedCategory - The currently selected category.
 * @param {Function} props.clickHandler - A function to handle subcategory item clicks.
 * @returns {JSX.Element} - The rendered SubcategoriesComponent.
 * @example
 * ```tsx
 * // Example of using SubcategoriesComponent:
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
 * <SubcategoriesComponent
 *   selectedCategory={selectedCategory}
 *   clickHandler={handleSubcategoryClick}
 * />
 * ```
 */
const SubcategoriesComponent = ({
	selectedCategory,
	clickHandler,
}: SubcategoriesComponentProps): JSX.Element => {
	return (
		<>
			{selectedCategory.subMenu.map((subItem: SubmenuItem) => (
				<li key={subItem.routeName}>
					<NavLink
						to={`/profile/${selectedCategory.routeName}/${subItem.routeName}`}>
						<PillComponent
							item={subItem.routeName}
							onClick={clickHandler}
						/>
					</NavLink>
				</li>
			))}
		</>
	);
};

export default SubcategoriesComponent;
