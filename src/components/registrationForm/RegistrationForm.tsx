/**
 * @module RegistrationForm
 * @description Module containing the component for rendering the registration form.
 */

import { RegistrationData } from '@data/formData';
import { newUserSchema } from '@data/formSchemas';
import { zodResolver } from '@hookform/resolvers/zod';
import '@layouts/FormLayout.css';
import { loginUser } from '@middleware/apiHandler';
import { setTokenToLocalStorage } from '@middleware/authHandler';
import { submitFormData } from '@middleware/formHandler';
import {
	convertToLoginData,
	convertToRegistrationData,
} from '@middleware/helpers/dataConverter';
import React from 'react';

import { useForm } from 'react-hook-form';

import { useNavigate } from 'react-router-dom';

var errorMessage: string | number | undefined;

/**
 * Component for rendering the registration form.
 *
 * This component displays the registration form, which includes fields for account type,
 * first name, last name, email, password, and confirmed password. It also handles form submission.
 *
 * @component
 * @returns {JSX.Element} - The rendered RegistrationForm.
 * @example
 * ```tsx
 * // Example of using RegistrationForm:
 * <RegistrationForm />
 * ```
 */
export default function RegistrationForm() {
	// React Router hook for navigation
	const navigate = useNavigate();

	// React Hook Form hook for managing form state
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegistrationData>({
		resolver: zodResolver(newUserSchema), // Using Zod schema for form validation
	});

	/**
	 * Handles form submission.
	 *
	 * This function is called when the registration form is submitted. It collects the
	 * user's registration data, validates it using Zod schema, and submits it to the server for registration.
	 *
	 * @param {RegistrationData} data - The registration data submitted by the user.
	 */
	const submitForm = async (formData: RegistrationData) => {
		// Prepare the user data to be sent to the server
		const userToRegister = convertToRegistrationData(formData);

		// Submit the user data to the server using a utility function (submitFormData)
		// This function should handle the API request to register the user
		const { success, error } = await submitFormData(
			userToRegister,
			'options',
			'register',
		);

		// If the registration is successful, redirect the user to the homepage
		if (success) {
			const userToLogin = convertToLoginData(formData);
			const loginResult = await loginUser(userToLogin);

			if (loginResult.ok) {
				setTokenToLocalStorage(loginResult);
				navigate('/', { replace: true });
			}
		} else {
			// If there is an error during registration, display an error message
			errorMessage = error;
		}
	};

	return (
		<>
			{/* Registration form */}
			<form
				className='form'
				onSubmit={handleSubmit(submitForm)}>
				{/* Display an error message if there is an error */}
				{errorMessage && (
					<span className='form__error-message'>{errorMessage}</span>
				)}

				{/* Account type dropdown */}
				<div className='form-element'>
					<label className='form-element__label'>Account:</label>
					<select
						className='form-element__input'
						id='userType'
						{...register('userType')}>
						<option
							className='form-element__select-option'
							value='Admin'>
							Admin
						</option>
						<option
							className='form-element__select-option'
							value='Client'>
							Client
						</option>
						<option
							className='form-element__select-option'
							value='Contractor'>
							Contractor
						</option>
					</select>

					{/* Display a validation prompt if there is an error */}
					{errors.userType && (
						<span className='form-element__validation-prompt'>
							{errors.userType.message}
						</span>
					)}
				</div>

				{/* First name field */}
				<div className='form-element'>
					<label className='form-element__label'>First name:</label>
					<input
						className='form-element__input'
						type='text'
						id='firstName'
						{...register('firstName')}
					/>

					{/* Display a validation prompt if there is an error */}
					{errors.firstName && (
						<span className='form-element__validation-prompt'>
							{errors.firstName.message}
						</span>
					)}
				</div>

				{/* Last name field */}
				<div className='form-element'>
					<label className='form-element__label'>Last name:</label>
					<input
						className='form-element__input'
						type='text'
						id='lastName'
						{...register('lastName')}
					/>

					{/* Display a validation prompt if there is an error */}
					{errors.lastName && (
						<span className='form-element__validation-prompt'>
							{errors.lastName.message}
						</span>
					)}
				</div>

				{/* Email field */}
				<div className='form-element'>
					<label className='form-element__label'>Email:</label>
					<input
						className='form-element__input'
						type='email'
						id='email'
						{...register('email')}
					/>

					{/* Display a validation prompt if there is an error */}
					{errors.email && (
						<span className='form-element__validation-prompt'>
							{errors.email.message}
						</span>
					)}
				</div>

				{/* Password field */}
				<div className='form-element'>
					<label className='form-element__label'>Password:</label>
					<input
						className='form-element__input'
						type='password'
						id='password'
						{...register('password')}
					/>

					{/* Display a validation prompt if there is an error */}
					{errors.password && (
						<span className='form-element__validation-prompt'>
							{errors.password.message}
						</span>
					)}
				</div>

				{/* Confirm Password field */}
				<div className='form-element'>
					<label className='form-element__label'>
						Confirm Password:
					</label>
					<input
						className='form-element__input'
						type='password'
						id='confirmedPassword'
						{...register('confirmedPassword')}
					/>

					{/* Display a validation prompt if there is an error */}
					{errors.confirmedPassword && (
						<span className='form-element__validation-prompt'>
							{errors.confirmedPassword.message}
						</span>
					)}
				</div>

				{/* Submit button */}
				<button
					className='form__submit-button'
					type='submit'>
					Submit
				</button>
			</form>
		</>
	);
}
