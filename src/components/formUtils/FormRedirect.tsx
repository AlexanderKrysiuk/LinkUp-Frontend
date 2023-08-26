import React from 'react';
import { Link } from 'react-router-dom';

type TextProp = {
	statement: string;
	linkText: string;
};

const FormRedirect: React.FC<TextProp> = ({ statement, linkText }) => {
	return (
		<div className='form-redirect'>
			{statement}
			<Link to=''>{linkText}</Link>
		</div>
	);
};
export default FormRedirect;
