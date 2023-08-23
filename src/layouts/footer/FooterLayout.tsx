import FooterComponent from '@components/footer/FooterComponent.tsx';
import React from 'react';
import './FooterLayoutCss.css';

/**
 * Component for rendering the footer layout.
 *
 * This component defines the structure and content of the footer section in the application.
 *
 * @component
 * @returns {JSX.Element} - The rendered footer layout.
 * @example
 * ```tsx
 * <FooterLayout />
 * ```
 */
const FooterLayout = (): JSX.Element => {
	return <footer
	id='footer'
	className='footer'>
	<FooterComponent />
</footer>;
};

export default FooterLayout;
