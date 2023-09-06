import { zodResolver } from '@hookform/resolvers/zod';
import '@layouts/FormLayout.css';
import { loginUser } from '@utils/apiHandler';
import { setTokenToLocalStorage } from '@utils/auth';
import { RegistrationData } from '@utils/formData';
import { submitFormData } from '@utils/formHandler';
import { newUserSchema } from '@utils/formSchemas';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

var errorMessage: string | number | undefined;

export default function RegistrationForm() {
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegistrationData>({
		resolver: zodResolver(newUserSchema),
	});

	const submitForm = async (formData: RegistrationData) => {
		const userToRegister = {
			username: `${formData.firstName} ${formData.lastName}`,
			email: formData.email,
			password: formData.password,
			role: formData.userType,
		};

		const { success, error } = await submitFormData(
			userToRegister,
			'options',
			'register',
		);

		if (success) {
			//ZALOGUJ OD RAZU
			const userToLogin = {
				email: formData.email,
				password: formData.password,
			};
			const loginResult = await loginUser(userToLogin);

			if (loginResult.ok) {
				setTokenToLocalStorage(loginResult);
				navigate('/', { replace: true });
			}
		} else {
			// Obsługa błędów
			errorMessage = error;
		}
	};

	return (
		<>
			<form
				className='form'
				onSubmit={handleSubmit(submitForm)}>
				{errorMessage && (
					<span className='form__error-message'>{errorMessage}</span>
				)}
				<div className='form-element'>
					<label className='form-element__label'>Account:</label>
					<select
						className='form-element__input'
						id='userType'
						{...register('userType')}>
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
					{errors.userType && (
						<span className='form-element__validation-prompt'>
							{errors.userType.message}
						</span>
					)}
				</div>
				<div className='form-element'>
					<label className='form-element__label'>First name:</label>
					<input
						className='form-element__input'
						type='text'
						id='firstName'
						{...register('firstName')}
					/>
					{errors.firstName && (
						<span className='form-element__validation-prompt'>
							{errors.firstName.message}
						</span>
					)}
				</div>
				<div className='form-element'>
					<label className='form-element__label'>Last name:</label>
					<input
						className='form-element__input'
						type='text'
						id='lastName'
						{...register('lastName')}
					/>
					{errors.lastName && (
						<span className='form-element__validation-prompt'>
							{errors.lastName.message}
						</span>
					)}
				</div>
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
					{errors.confirmedPassword && (
						<span className='form-element__validation-prompt'>
							{errors.confirmedPassword.message}
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
