/**
 * @module ButtonComponent
 * @description Module containing a component for rendering a button with text.
 */

import React from 'react';

/**
 * Props for the `ButtonComponent` component.
 */
interface ButtonProps {
	/**
	 * The text to display on the button.
	 */
	text: string;
}

/**
 * Component for rendering a button with text.
 *
 * This component renders a button element with the provided text and a "with Google" suffix.
 *
 * @component
 * @param {ButtonProps} props - The component props.
 * @param {string} props.text - The text to display on the button.
 * @returns {JSX.Element} - The rendered button component.
 * @example
 * ```tsx
 * // Render a button with text
 * <ButtonComponent text="Sign in" />
 * ```
 */
const ButtonComponent = ({ text }: ButtonProps): JSX.Element => {
	return (
		<div className='button'>
			<button className='google-button'>{`${text}`} with Google</button>
		</div>
	);
};

export default ButtonComponent;
