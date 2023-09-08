import React from 'react';
import { Link } from 'react-router-dom';
import { LOCAL_URI } from '@utils/links';

type TextProp = {
	statement: string;
	linkText: string;
};

const FormRedirect: React.FC<TextProp> = ({ statement, linkText }) => {
	var path = linkText === 'Sign up' ? 'register' : 'login';
	return (
		<div className='form-redirect'>
			{statement}
			<Link to={`${LOCAL_URI}/${path}`}>{linkText}</Link>
		</div>
	);
};
export default FormRedirect;
