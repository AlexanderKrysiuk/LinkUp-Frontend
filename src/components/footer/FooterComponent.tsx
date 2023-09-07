/**
 * @module FooterComponent
 * @description Component for rendering the footer section.
 */

import CopyrightComponent from '@components/footer/CopyrightComponent.tsx';
import PolicyComponent from '@components/footer/PolicyComponent.tsx';
import RefSection from '@components/footer/RefSection.tsx';
import React from 'react';

/**
 * Component for rendering the footer section.
 *
 * This component combines the `RefSection`, `PolicyComponent`, and `CopyrightComponent`
 * components to create a complete footer section for the application.
 *
 * @component
 * @returns {JSX.Element} - The rendered footer section.
 * @example
 * // Import and use the component to display the footer section
 * <FooterComponent />
 */
const FooterComponent = () => {
	return (
		<div className='footer__container'>
			<RefSection />
			<PolicyComponent />
			<CopyrightComponent />
		</div>
	);
};

export default FooterComponent;
