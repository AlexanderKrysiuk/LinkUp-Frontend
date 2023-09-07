/**
 * @module SplitLine
 * @description Module containing a component for rendering a split line.
 */

import React from 'react';

/**
 * Component for rendering a split line.
 *
 * This component displays a horizontal line used for separating content sections.
 *
 * @component
 * @returns {JSX.Element} - The rendered split line.
 * @example
 * ```tsx
 * // Render a split line
 * <SplitLine />
 * ```
 */
const SplitLine = (): JSX.Element => {
	return (
		<>
			<hr className='footer__copyright-notice_split-line' />
		</>
	);
};

export default SplitLine;
