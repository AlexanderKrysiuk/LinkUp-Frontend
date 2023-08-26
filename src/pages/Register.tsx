import RegistrationComponent from '@components/registrationForm/RegistrationComponent';
import React from 'react';

/**
 * Page component for the register page.
 *
 * This component represents the registration page of the application. It displays registration form.
 *
 * @component
 * @returns {JSX.Element} - The rendered contact page.
 * @example
 * ```tsx
 * <Register />
 * ```
 */
const Register = (): JSX.Element => {
	return <RegistrationComponent />;
};

export default Register;
