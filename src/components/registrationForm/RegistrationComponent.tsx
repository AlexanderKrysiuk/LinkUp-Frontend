/**
 * @module RegistrationComponent
 * @description Module containing the component for rendering the registration page.
 */

import ButtonComponent from '@components/formUtils/ButtonComponent';
import DividerComponent from '@components/formUtils/DividerComponent';
import FormRedirect from '@components/formUtils/FormRedirect';
import RegistrationForm from '@components/registrationForm/RegistrationForm';
import '@layouts/FormLayout.css';
import React from 'react';

/**
 * Component for rendering the registration page.
 *
 * This component displays the registration page, which includes the registration form,
 * a divider, a "Sign up" button, and a link to navigate to the sign-in page.
 *
 * @component
 * @returns {JSX.Element} - The rendered RegistrationComponent.
 * @example
 * ```tsx
 * // Example of using RegistrationComponent:
 * <RegistrationComponent />
 * ```
 */
export default function RegistrationComponent(): JSX.Element {
	return (
		<div className='form'>
			<RegistrationForm />
			<DividerComponent message='OR' />
			<ButtonComponent text='Sign up' />
			<FormRedirect
				statement='Already have an account? '
				linkText='Sign in'
			/>
		</div>
	);
}
