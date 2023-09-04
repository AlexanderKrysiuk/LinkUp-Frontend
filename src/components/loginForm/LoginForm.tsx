import { zodResolver } from '@hookform/resolvers/zod';
import { LoginData } from '@utils/formData';
import { submitFormData } from '@utils/formHandler';
import { userSchema } from '@utils/formSchemas';
import { API_LOGIN_URL } from '@utils/links';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

var errorMessage: string | number | undefined;

export default function LoginForm() {
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginData>({
		resolver: zodResolver(userSchema),
	});

	const login = async (data: LoginData) => {
		const userLoginData = {
			email: data.email,
			password: data.password,
		};

		const apiUrl = API_LOGIN_URL;

		const { success, error } = await submitFormData(
			apiUrl,
			userLoginData,
			'options',
		);

		if (success) {
			navigate('/', { replace: true });
		} else {
			// Obsługa błędów
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
