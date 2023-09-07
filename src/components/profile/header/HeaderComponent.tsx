/**
 * @module HeaderComponent
 * @description Module containing the component for rendering the profile header.
 */

import React from 'react';
import CategoriesComponent from './categories/CategoriesComponent.tsx';

import { ProfileMenuItem } from '@router/ProfileMenuItems.ts';
import UserDetailsComponent from './userdetails/UserDetailsComponent.tsx';

/**
 * Props for the HeaderComponent.
 */
interface HeaderComponentProps {
	/**
	 * A function to handle category item clicks.
	 *
	 * @param {ProfileMenuItem} category - The clicked category item.
	 */
	clickHandler: (category: ProfileMenuItem) => void;
}

/**
 * Component for rendering the profile header.
 *
 * This component displays the user details and profile categories using the
 * `UserDetailsComponent` and `CategoriesComponent`. It allows users to click on a
 * category item, triggering the provided click handler function.
 *
 * @component
 * @param {HeaderComponentProps} props - The props for the HeaderComponent.
 * @param {Function} props.clickHandler - A function to handle category item clicks.
 * @returns {JSX.Element} - The rendered HeaderComponent.
 * @example
 * ```tsx
 * // Example of using HeaderComponent:
 * const handleCategoryClick = (category) => {
 *   // Handle category click logic
 * };
 *
 * <HeaderComponent clickHandler={handleCategoryClick} />
 * ```
 */
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
