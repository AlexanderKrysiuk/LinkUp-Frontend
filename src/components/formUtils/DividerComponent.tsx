/**
 * @module DividerComponent
 * @description Module containing a component for rendering a divider with a message.
 */

import SplitText from '@components/formUtils/SplitText';
import React from 'react';

/**
 * Props for the `DividerComponent` component.
 */
interface DividerProps {
	/**
	 * The message to display in the divider.
	 */
	message: string;
}

/**
 * Component for rendering a divider with a message.
 *
 * This component renders a divider element with a message in the middle.
 *
 * @component
 * @param {DividerProps} props - The component props.
 * @param {string} props.message - The message to display in the divider.
 * @returns {JSX.Element} - The rendered divider component.
 * @example
 * ```tsx
 * // Render a divider with a message
 * <DividerComponent message="Or" />
 * ```
 */
const DividerComponent = ({ message }: DividerProps): JSX.Element => {
	return (
		<div className='divider'>
			<SplitText message={message} />
		</div>
	);
};

export default DividerComponent;
