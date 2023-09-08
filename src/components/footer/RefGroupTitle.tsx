/**
 * @module RefGroupTitle
 * @description Module containing a component for rendering a reference group title.
 */

import React from 'react';

/**
 * Component for rendering a reference group title.
 *
 * This component displays a title for a group of reference links.
 *
 * @component
 * @param {string} title - The title to be displayed.
 * @returns {JSX.Element} - The rendered reference group title.
 * @example
 * ```tsx
 * // Render a reference group title
 * <RefGroupTitle title="Product" />
 * ```
 */
const RefGroupTitle = (title: string): JSX.Element => {
	return (
		<div className='footer__reference-category-title'>
			<h4>{title}</h4>
		</div>
	);
};

export default RefGroupTitle;
