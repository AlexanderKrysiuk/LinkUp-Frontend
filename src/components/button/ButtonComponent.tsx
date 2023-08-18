import React from 'react';
import ButtonIconComponent from './icon/ButtonIconComponent.tsx';
import ButtonTextComponent from './text/ButtonTextComponent.tsx';

/**
 * Component for rendering a flexible button element.
 *
 * This component allows rendering buttons with icons, text, or both. It accepts icon and
 * text props and conditionally renders the appropriate components. It's used for creating
 * various types of buttons throughout the application.
 *
 * @component
 * @param {Object} props - The props object containing button content.
 * @param {string} [props.text] - The text content to display on the button.
 * @param {string} [props.source] - The source URL of the icon to display on the button.
 * @returns {JSX.Element} - The rendered flexible button.
 * @example
 * ```tsx
 * // Button with both icon and text
 * <ButtonComponent text="Click me" source="icon.svg" />
 *
 * // Button with only text
 * <ButtonComponent text="Click me" />
 *
 * // Button with only icon
 * <ButtonComponent source="icon.svg" />
 * ```
 */
const ButtonComponent = ({
	text,
	source,
}: {
	text?: string;
	source?: string;
}): JSX.Element => {
	return (
		<div className='nav__link-badge'>
			{source && <ButtonIconComponent source={source} />}
			{text && <ButtonTextComponent text={text} />}
		</div>
	);
};

export default ButtonComponent;
