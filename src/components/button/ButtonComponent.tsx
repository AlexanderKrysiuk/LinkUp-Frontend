/**
 * @module ButtonComponent
 * @description Component for rendering a flexible button element.
 */

import React from 'react';
import ButtonIconComponent from './icon/ButtonIconComponent.tsx';
import ButtonTextComponent from './text/ButtonTextComponent.tsx';

/**
 * Props for the `ButtonComponent`.
 *
 * @interface ButtonProps
 */
interface ButtonProps {
	/**
	 * The text content to display on the button.
	 */
	text?: string;
	/**
	 * The source URL of the icon to display on the button.
	 */
	source?: string;
}

/**
 * Component for rendering a flexible button element.
 *
 * This component allows rendering buttons with icons, text, or both. It accepts icon and
 * text props and conditionally renders the appropriate components. It's used for creating
 * various types of buttons throughout the application.
 *
 * @component
 * @param {ButtonProps} props - The component props.
 * @param {string} [props.text] - The text content to display on the button.
 * @param {string} [props.source] - The source URL of the icon to display on the button.
 * @returns {JSX.Element} - The rendered flexible button.
 * @example
 * // Import and use the component with both icon and text
 * <ButtonComponent text="Click me" source="icon.svg" />
 *
 * // Import and use the component with only text
 * <ButtonComponent text="Click me" />
 *
 * // Import and use the component with only icon
 * <ButtonComponent source="icon.svg" />
 */
const ButtonComponent = ({ text, source }: ButtonProps): JSX.Element => {
	return (
		<div className='nav__link-badge'>
			{source && <ButtonIconComponent source={source} />}
			{text && <ButtonTextComponent text={text} />}
		</div>
	);
};

export default ButtonComponent;
