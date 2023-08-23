import { zodResolver } from '@hookform/resolvers/zod';
import '@layouts/FormLayout.css';
import errorHandler from '@utils/errorHandler';
import apiHandler from '@utils/fetchApi';
import { LoginData } from '@utils/formData';
import { user } from '@utils/formSchemas';
import React from 'react';
import { useForm } from 'react-hook-form';

var errorMessage = '';

export default function LoginForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginData>({
		resolver: zodResolver(user),
	});

	const submitForm = async (data: LoginData) => {
		const userLoginData = {
			email: data.email,
			password: data.password,
		};

		const apiUrl = 'http://localhost:5223/api/login';

		try {
			const response = await apiHandler.apiPost(apiUrl, userLoginData);
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
				className='login-form'
				onSubmit={handleSubmit(submitForm)}>
				{errorMessage && (
					<span className='login-form__error-message'>
						{errorMessage}
					</span>
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
					className='login-form__submit-button'
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
			<div className='outer-login'>
				<button className='outer-login__button'>
					Sign in with Google
				</button>
			</div>
			<div className='registration'>
				<p className='registration__reference-text'>
					New user?
					<a
						href=''
						className='registration__reference-link'>
						Register
					</a>
				</p>
			</div>
		</>
	);
}
