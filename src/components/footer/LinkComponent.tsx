import React from 'react';
import { Link } from 'react-router-dom';

const LinkComponent = (path: any, header: string) => {
	return (
		<div className='footer__link'>
			<Link to={`/${path}`}>{header}</Link>
		</div>
	);
};

export default LinkComponent;
