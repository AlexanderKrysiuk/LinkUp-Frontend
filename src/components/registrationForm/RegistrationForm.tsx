import { zodResolver } from '@hookform/resolvers/zod';
import '@layouts/FormLayout.css';
import errorHandler from '@utils/errorHandler';
import apiHandler from '@utils/fetchApi';
import { RegistrationData } from '@utils/formData';
import { newUser } from '@utils/formSchemas';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

var errorMessage = '';

export default function RegistrationForm() {
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegistrationData>({
		resolver: zodResolver(newUser),
	});

	const submitForm = async (data: RegistrationData) => {
		const userToRegister = {
			username: `${data.firstName} ${data.lastName}`,
			email: data.email,
			password: data.password,
			role: data.userType,
		};

		const apiUrl = 'https://localhost:7099/api/Users';

		try {
			const response = await apiHandler.apiPost(apiUrl, userToRegister);
			if (response.ok) {
				navigate('/', { replace: true });
			} else {
				//errorMessage = errorHandler.handleFetchError(error);
				errorMessage = `E-mail in use. Register with another e-mail address or sign in.`;
				console.error(response.status, response.statusText);
			}
		} catch (error) {
			errorMessage = errorHandler.handleFetchError(error);
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
