/**
 * @module PolicyComponent
 * @description Component for rendering policy links in the footer.
 */

import React from 'react';
import { PolicySection as references } from '@router/ReferenceLinks';

import { NavLink } from 'react-router-dom';

/**
 * Component for rendering policy links in the footer.
 *
 * This component maps through the `PolicySection` references and generates `NavLink`
 * elements for each policy item, rendering them within the footer.
 *
 * @component
 * @returns {JSX.Element} - The rendered policy links section.
 * @example
 * // Import and use the component to display policy links in the footer
 * <PolicyComponent />
 */
const PolicyComponent = () => {
	return (
		<div className='footer__policy'>
			{references.map((item, index) => {
				return (
					<div key={index}>
						<NavLink
							className='footer__link'
							to={`${item.path}`}>{`${item.title}`}</NavLink>
					</div>
				);
			})}
		</div>
	);
};

export default PolicyComponent;
