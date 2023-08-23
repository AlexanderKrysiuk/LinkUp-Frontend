import Copyright from '@components/footer/Copyright.tsx';
import SplitLine from '@components/footer/SplitLine.tsx';
import React from 'react';

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
