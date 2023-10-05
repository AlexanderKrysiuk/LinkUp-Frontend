/**
 * @module CategoriesComponent
 * @description Module containing the component for rendering profile categories.
 */

import PillComponent from '@components/utils/buttons/PillComponent.tsx';
import React from 'react';

import { NavLink } from 'react-router-dom';

import routes, { ProfileMenuItem } from '@router/ProfileMenuItems.ts';

/**
 * Props for the CategoriesComponent.
 */
interface CategoriesComponentProps {
	/**
	 * A function to handle category item clicks.
	 *
	 * @param {ProfileMenuItem} category - The clicked category item.
	 */
	clickHandler: (category: ProfileMenuItem) => void;
}

/**
 * Component for rendering profile categories.
 *
 * This component displays a list of profile categories using navigation links. Each
 * category is represented as a `PillComponent` within a `NavLink`. It allows users
 * to click on a category item, triggering the provided click handler function.
 *
 * @component
 * @param {CategoriesComponentProps} props - The props for the CategoriesComponent.
 * @param {Function} props.clickHandler - A function to handle category item clicks.
 * @returns {JSX.Element} - The rendered CategoriesComponent.
 * @example
 * ```tsx
 * // Example of using CategoriesComponent:
 * const handleCategoryClick = (category) => {
 *   // Handle category click logic
 * };
 *
 * <CategoriesComponent clickHandler={handleCategoryClick} />
 * ```
 */
const CategoriesComponent = ({
	clickHandler,
}: CategoriesComponentProps): JSX.Element => {
	return (
		<div className='profile__header_categories'>
			{routes.map((item, index) => (
				<NavLink
					to={item.routeName + `/` + item.subMenu[0]?.routeName}
					key={index}>
					<PillComponent
						key={index}
						item={item}
						onClick={clickHandler}
					/>
				</NavLink>
			))}
		</div>
	);
};

export default CategoriesComponent;
