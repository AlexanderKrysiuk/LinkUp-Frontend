/**
 * @module PillComponent
 * @description Module containing a pill-like button component.
 */

import { ProfileMenuItem } from '@router/ProfileMenuItems.ts';
import React from 'react';

// import './PillComponent.css';

/**
 * Type for the props of the PillComponent.
 *
 * @internal
 * @typedef {Object} PillComponentProps
 * @description Props for the PillComponent.
 * @property {(string | ProfileMenuItem)} item - The item to be displayed on the pill button.
 * @property {Function} [onClick] - The optional click event handler for the pill button.
 * This property can accept one of the following types:
 * - `((text: string) => void)`: A function that takes a string as an argument and does not return anything.
 * - `((obj: ProfileMenuItem) => void)`: A function that takes a `ProfileMenuItem` object as an argument and does not return anything.
 * - `undefined`: If this property is not provided, it will be undefined.
 *
 * Depending on the type of item provided to the component, the appropriate function type will be invoked when the pill button is clicked.
 */

interface PillComponentProps {
	/**
	 * The item to be displayed on the pill button. This can be a string or a ProfileMenuItem object.
	 */
	item: string | ProfileMenuItem;

	/**
	 * The optional click event handler for the pill button.
	 *
	 * @typedef {Function} PillClickHandler
	 */
	onClick?:
		| PillClickHandler // Document the internal function type
		| undefined;
}

/**
 * Type for the click event handler of the PillComponent.
 * This type represents a function that can accept either a string or a ProfileMenuItem as an argument.
 *
 * @internal
 * @typedef {((text: string) => void )| ((obj: ProfileMenuItem) => void)} PillClickHandler
 */
type PillClickHandler =
	| ((text: string) => void)
	| ((obj: ProfileMenuItem) => void);

/**
 * A pill-like button component.
 *
 * This component displays a pill-shaped button with either a string or a ProfileMenuItem object.
 * Depending on the type of item, it can invoke an optional click event handler when clicked.
 *
 * @component
 * @param {PillComponentProps} props - The props object containing pill button properties.
 * @param {(string | ProfileMenuItem)} props.item - The item to be displayed on the pill button.
 * @param {Function} props.onClick - The optional click event handler for the pill button.
 * @returns {JSX.Element} - The rendered pill button component.
 * @example
 * ```tsx
 * // String example
 * <PillComponent item="Category" onClick={(text) => handlePillClick(text)} />
 *
 * // ProfileMenuItem object example
 * const menuItem = {
 *   routeName: 'Home',
 *   routeIcon: HomeIcon,
 *   routeAction: null,
 * };
 * <PillComponent item={menuItem} onClick={(item) => handlePillClick(item)} />
 * ```
 */
const PillComponent = ({ item, onClick }: PillComponentProps): JSX.Element => {
	const checkItemIsString = typeof item === 'string';
	return (
		<button
			className='pill-button'
			onClick={
				!checkItemIsString
					? () => (onClick as (obj: ProfileMenuItem) => void)(item)
					: undefined
			}>
			{checkItemIsString ? item : item.routeName}
		</button>
	);
};

export default PillComponent;
