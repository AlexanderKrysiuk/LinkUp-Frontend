import React from 'react';

/**
 * Component for rendering text inside a button.
 *
 * This component represents text rendered inside a button element. It takes a
 * `text` prop, which should be the text to be displayed.
 *
 * @component
 * @param {object} props - The component props.
 * @param {string} props.text - The text to be displayed.
 * @returns {JSX.Element} - The rendered text component.
 * @example
 * ```tsx
 * <ButtonTextComponent text='Click me' />
 * ```
 */

/**
 * Props for the ButtonTextComponent.
 */
interface TextProps {
	/**
	 * The text to be displayed.
	 */
	text?: string;
}

const ButtonTextComponent = ({ text }: TextProps): JSX.Element => {
	return <p className='navbar__badge-text'>{text}</p>;
};

export default ButtonTextComponent;
