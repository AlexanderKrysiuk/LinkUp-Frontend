/**
 * @module SplitText
 * @description Module containing a component for rendering split text.
 */

import React from 'react';

/**
 * Props for the SplitText component.
 */
interface TextProp {
	/**
	 * The text message to be displayed.
	 */
	message: string;
}

/**
 * Component for rendering split text.
 *
 * This component renders a text message that can be used to label or describe content
 * separated by a split line.
 *
 * @component
 * @param {TextProp} props - The component props.
 * @returns {JSX.Element} - The rendered split text component.
 * @example
 * ```tsx
 * // Render split text to label or describe content
 * <SplitText message="Section Title" />
 * ```
 */
const SplitText = ({ message }: TextProp): JSX.Element => {
	return <div className='divider__divider-text'>{message}</div>;
};

export default SplitText;
