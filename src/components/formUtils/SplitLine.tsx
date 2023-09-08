/**
 * @module SplitLine
 * @description Module containing a component for rendering a split line.
 */

import React from 'react';

/**
 * Component for rendering a split line.
 *
 * This component renders a horizontal line, typically used as a visual divider.
 *
 * @component
 * @returns {JSX.Element} - The rendered split line component.
 * @example
 * ```tsx
 * // Render a split line to visually divide content
 * <SplitLine />
 * ```
 */
export default function SplitLine() {
	return (
		<div className='divider__divider-line'>
			<hr></hr>
		</div>
	);
}
