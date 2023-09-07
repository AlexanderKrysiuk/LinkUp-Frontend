/**
 * @module LoginComponent
 * @description Module containing the login component.
 */

import ButtonComponent from '@components/formUtils/ButtonComponent';
import DividerComponent from '@components/formUtils/DividerComponent';
import FormRedirect from '@components/formUtils/FormRedirect';
import LoginForm from '@components/loginForm/LoginForm';
import '@layouts/FormLayout.css';
import React from 'react';

/**
 * Component for rendering the login page.
 *
 * This component renders the login form, a divider, a "Sign in" button, and a form
 * redirection link for new users to sign up.
 *
 * @returns {JSX.Element} - The rendered login component.
 * @example
 * ```tsx
 * // Render the login page
 * <LoginComponent />
 * ```
 */
const LoginComponent = (): JSX.Element => {
	return (
		<div className='form-component'>
			<LoginForm />
			<DividerComponent message='OR' />
			<ButtonComponent text='Sign in' />
			<FormRedirect
				statement='New user? '
				linkText='Sign up'
			/>
		</div>
	);
};

export default LoginComponent;
