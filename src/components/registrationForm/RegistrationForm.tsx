import { zodResolver } from '@hookform/resolvers/zod';
import errorHandler from '@utils/errorHandler';
import apiHandler from '@utils/fetchApi';
import FormData from '@utils/registrationFormData';
import newUser from '@utils/registrationFormSchema';
import React from 'react';
import { useForm } from 'react-hook-form';
import './RegistrationForm.css';

var errorMessage = '';

export default function RegistrationForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(newUser),
	});

	const submitForm = async (data: FormData) => {
		const newUser = {
			name: `${data.firstName} ${data.lastName}`,
			email: data.email,
			password: data.password,
		};

		const apiUrl =
			data.userType === 'Client'
				? 'http://localhost:5223/api/Clients'
				: 'http://localhost:5223/api/Contractors';

		try {
			const response = await apiHandler.apiPost(apiUrl, newUser);
			if (response.ok) {
				//TODO => redirect?
			} else {
				//return response.json();
				//console.log(`Error ${response.status}: ${response.statusText}`);
				errorMessage = `Error ${response.status}: ${response.statusText}`;
			}
		} catch (error) {
			console.error('Error submitting form:', error);
			errorMessage = errorHandler.handleFetchError(error);
		}
	};

	return (
		<>
			<form
				className='registration-form'
				onSubmit={handleSubmit(submitForm)}>
				{errorMessage && (
					<span className='registration-form__error-message'>
						{errorMessage}
					</span>
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
					className='registration-form__submit-button'
					type='submit'>
					Submit
				</button>
			</form>
			<div className='divider'>
				<div className='divider__divider-line'>
					<hr></hr>
				</div>
				<div className='divider__divider-text'>OR</div>
				<div className='divider__divider-line'>
					<hr></hr>
				</div>
			</div>
			{/* <div className='outer-registration'><button className='outer-registration__button'>Sign up with Google</button></div> */}
			<div className='login'>
				<p className='login__reference-text'>
					Already have an account?{' '}
					<a
						href=''
						className='login__reference-link'>
						Log in
					</a>
				</p>
			</div>
		</>
	);
}
