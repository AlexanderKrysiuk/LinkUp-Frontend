import FooterComponent from '@components/footer/FooterComponent.tsx';
import React from 'react';
import './FooterLayoutCss.css';

const FooterLayout = () => {
	return (
		<footer
			id='footer'
			className='footer'>
			<FooterComponent />
		</footer>
	);
};

export default FooterLayout;
