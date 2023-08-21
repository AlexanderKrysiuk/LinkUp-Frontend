import React from 'react';
import { Link } from 'react-router-dom';

const LinkComponent = (component: string, header: string) => {
	return (
		<div className='footer__link'>
			<Link to={`/${component}`}>{header}</Link>
		</div>
	);
};

export default LinkComponent;
