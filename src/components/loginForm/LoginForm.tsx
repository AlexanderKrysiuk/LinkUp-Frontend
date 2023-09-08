/**
 * @module LoginForm
 * @description Module containing the login form component.
 */

import { LoginData } from '@data/formData';
import { userSchema } from '@data/formSchemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { setTokenToLocalStorage } from '@middleware/authHandler';
import { submitFormData } from '@middleware/formHandler';
import { convertToLoginData } from '@middleware/helpers/dataConverter';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

/**
 * Component for rendering the login form.
 *
 * This component renders a login form that includes email and password fields. It utilizes
 * React Hook Form for form management and validation and communicates with the server to
 * perform user authentication.
 *
 * @returns {JSX.Element} - The rendered login form component.
 * @example
 * ```tsx
 * // Render the login form
 * <LoginForm />
 * ```
 */
export default function LoginForm(): JSX.Element {
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginData>({
		resolver: zodResolver(userSchema),
	});

	var errorMessage: string | number | undefined;

	const login = async (formData: LoginData) => {
		const userLoginData = convertToLoginData(formData);

		const {
			success,
			error,
			data: responseData,
		} = await submitFormData(userLoginData, 'options', 'login');

		if (success && responseData) {
			setTokenToLocalStorage(responseData);
			navigate('/', { replace: true });
		} else {
			// Handle errors
			errorMessage = error;
		}
	};

	return (
		<>
			<form
				className='form'
				onSubmit={handleSubmit(login)}>
				{errorMessage && (
					<span className='form__error-message'>{errorMessage}</span>
				)}
				<div className='form-element'>
					<label className='form-element__label'>Email:</label>
					<input
						className='form-element__input'
						type='email'
						id='email'
						{...register('email')}
					/>
					{errors.email && (
						<span className='form-element__validation-prompt'>
							{errors.email.message}
						</span>
					)}
				</div>
				<div className='form-element'>
					<label className='form-element__label'>Password:</label>
					<input
						className='form-element__input'
						type='password'
						id='password'
						{...register('password')}
					/>
					{errors.password && (
						<span className='form-element__validation-prompt'>
							{errors.password.message}
						</span>
					)}
				</div>
				<button
					className='form__submit-button'
					type='submit'>
					Submit
				</button>
			</form>
		</>
	);
}
