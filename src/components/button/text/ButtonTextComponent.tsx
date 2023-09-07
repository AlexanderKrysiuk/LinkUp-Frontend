/**
 * @module ButtonTextComponent
 * @description Component for rendering text inside a button.
 */

import React from 'react';

/**
 * Props for the `ButtonTextComponent`.
 *
 * @typedef {Object} TextProps
 * @property {string} [text] - The text content to display inside the button.
 */
interface TextProps {
	/**
	 * The text content to display inside the button.
	 */
	text?: string;
}
/**
 * Component for rendering text inside a button.
 *
 * This component represents text content rendered inside a button element. It takes a
 * `text` prop, which should be the text to display inside the button.
 *
 * @component
 * @param {TextProps} props - The component props.
 * @param {string} [props.text] - The text content to display inside the button.
 * @returns {JSX.Element} - The rendered text component.
 * @example
 * // Import and use the component with text content
 * <ButtonTextComponent text="Click me" />
 *
 * // Import and use the component without specifying text content
 * <ButtonTextComponent />
 */

const ButtonTextComponent = ({ text }: TextProps): JSX.Element => {
	return <p className='navbar__badge-text'>{text}</p>;
};

export default ButtonTextComponent;
