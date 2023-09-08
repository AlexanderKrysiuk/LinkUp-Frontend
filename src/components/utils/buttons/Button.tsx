/**
 * @module Button
 * @description Module containing a generic button component.
 */

import React from 'react';
import './Button.css';

/**
 * Props for the Button component.
 */
interface ButtonProps {
	/**
	 * The text displayed on the button.
	 */
	text: string;

	/**
	 * The function to be called when the button is clicked.
	 */
	onClick: () => void;
}

/**
 * A generic button component.
 *
 * This component displays a button with specified text and an associated click
 * event handler. It's a reusable component for creating buttons with custom
 * functionality.
 *
 * @component
 * @param {ButtonProps} props - The props object containing button properties.
 * @param {string} props.text - The text displayed on the button.
 * @param {() => void} props.onClick - The function to be called when the button is clicked.
 * @returns {JSX.Element} - The rendered button component.
 * @example
 * ```tsx
 * <Button text="Click Me" onClick={() => handleButtonClick()} />
 * ```
 */
const Button = ({ text, onClick }: ButtonProps): JSX.Element => {
	return (
		<button
			className='action-button'
			onClick={onClick}>
			{text}
		</button>
	);
};

export default Button;
