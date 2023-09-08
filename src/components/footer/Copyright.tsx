/**
 * @module Copyright
 * @description Component for rendering the copyright notice.
 */

import React from 'react';

const currentYear = new Date().getFullYear();
/**
 * Component for rendering the copyright notice.
 *
 * This component displays the copyright notice with the current year and the project name "LinkUp".
 *
 * @component
 * @returns {JSX.Element} - The rendered copyright notice.
 * @example
 * // Import and use the component to display the copyright notice
 * <Copyright />
 */

const Copyright = () => {
	return (
		<div className='footer__copyright-notice_text'>
			<span className='footer__copyright-notice_message'>
				&copy; Copyright {currentYear} LinkUp
			</span>
		</div>
	);
};

export default Copyright;
