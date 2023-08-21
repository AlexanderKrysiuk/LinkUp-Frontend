import CopyrightComponent from '@components/footer/CopyrightComponent.tsx';
import PolicyComponent from '@components/footer/PolicyComponent.tsx';
import RefSection from '@components/footer/RefSection.tsx';
import React from 'react';

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
