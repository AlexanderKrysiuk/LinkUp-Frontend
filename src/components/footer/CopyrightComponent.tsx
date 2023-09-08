/**
 * @module CopyrightComponent
 * @description Component for rendering the copyright section.
 */

import Copyright from '@components/footer/Copyright.tsx';
import SplitLine from '@components/footer/SplitLine.tsx';
import React from 'react';

/**
 * Component for rendering the copyright section.
 *
 * This component combines the `Copyright` component and a `SplitLine` component
 * to create a styled section displaying the copyright notice.
 *
 * @component
 * @returns {JSX.Element} - The rendered copyright section.
 * @example
 * // Import and use the component to display the copyright section
 * <CopyrightComponent />
 */
const CopyrightComponent = () => {
	return (
		<div className='footer__copyright-notice'>
			<SplitLine />
			<Copyright />
			<SplitLine />
		</div>
	);
};

export default CopyrightComponent;
