/**
 * @module RefSection
 * @description A React component for rendering reference sections in the footer.
 */

import RefGroup from '@components/footer/RefGroup';
import { ReferenceItem, ReferenceLinks } from '@router/ReferenceLinks';
import React from 'react';

/**
 * A React component for rendering reference sections in the footer.
 *
 * This component maps over an array of `ReferenceLinks` and renders each section using the `RefGroup` component.
 *
 * @component
 * @returns {JSX.Element} - The rendered reference section component.
 * @example
 * // Import and use the component to render reference sections in the footer
 * <RefSection />
 */
const RefSection = (): JSX.Element => {
	return (
		<div className='footer__reference-section'>
			{ReferenceLinks.map((item: ReferenceItem, index: number) => {
				return (
					<RefGroup
						item={item}
						key={index}
					/>
				);
			})}
		</div>
	);
};

export default RefSection;
