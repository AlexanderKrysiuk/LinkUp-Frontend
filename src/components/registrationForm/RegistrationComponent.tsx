import ButtonComponent from '@components/formUtils/ButtonComponent';
import DividerComponent from '@components/formUtils/DividerComponent';
import RegistrationForm from '@components/registrationForm/RegistrationForm';
import React from 'react';
import FormRedirect from '@components/formUtils/FormRedirect';
import '@layouts/FormLayout.css';

export default function RegistrationComponent() {
	return (
		<div className='form-component'>
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
