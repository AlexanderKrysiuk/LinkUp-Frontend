/**
 * @module FormRedirect
 * @description Module containing a component for rendering a form redirect statement.
 */

import { LOCAL_URI } from '@data/links';
import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Props for the `FormRedirect` component.
 */
interface FormRedirectProps {
	/**
	 * The statement text to display.
	 */
	statement: string;
	/**
	 * The text for the link to the destination page.
	 */
	linkText: string;
}

/**
 * Component for rendering a form redirect statement.
 *
 * This component renders a statement along with a link to a destination page.
 *
 * @component
 * @param {FormRedirectProps} props - The component props.
 * @param {string} props.statement - The statement text to display.
 * @param {string} props.linkText - The text for the link to the destination page.
 * @returns {JSX.Element} - The rendered form redirect component.
 * @example
 * ```tsx
 * // Render a form redirect statement with a link
 * <FormRedirect statement="Already have an account?" linkText="Log in" />
 * ```
 */
const FormRedirect = ({
	statement,
	linkText,
}: FormRedirectProps): JSX.Element => {
	var path = linkText === 'Sign up' ? 'register' : 'login';
	return (
		<div className='form-redirect'>
			{statement}
			<Link to={`${LOCAL_URI}/${path}`}>{linkText}</Link>
		</div>
	);
};

export default FormRedirect;
