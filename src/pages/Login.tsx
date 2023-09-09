import LoginComponent from '@components/loginForm/LoginComponent';
import React from 'react';

/**
 * Page component for the login page.
 *
 * This component represents the login page of the application. It displays login form.
 *
 * @component
 * @returns {JSX.Element} - The rendered contact page.
 * @example
 * ```tsx
 * <Login />
 * ```
 */
const Login = (): JSX.Element => {
	return <LoginComponent />;
};

export default Login;
