import DividerComponent from '@components/divider/DividerComponent';
import LoginForm from '@components/loginForm/LoginForm';
import '@layouts/FormLayout.css';
import React from 'react';

export default function LoginComponent() {
	return (
		<>
			<LoginForm />
			<DividerComponent message='OR' />
		</>
	);
}
