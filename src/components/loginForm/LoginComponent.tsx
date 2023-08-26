import ButtonComponent from '@components/formUtils/ButtonComponent';
import DividerComponent from '@components/formUtils/DividerComponent';
import FormRedirect from '@components/formUtils/FormRedirect';
import LoginForm from '@components/loginForm/LoginForm';
import '@layouts/FormLayout.css';
import React from 'react';

export default function LoginComponent() {
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
}
