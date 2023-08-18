import { zodResolver } from '@hookform/resolvers/zod';
import FormData from '@utils/registrationFormData';
import newUser from '@utils/registrationFormSchema';
import React from 'react';
import { useForm } from 'react-hook-form';
import './RegistrationForm.css';

export default function RegistrationForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(newUser),
	});

	const submitForm = (data: FormData) => {
		const formData = {
			fullName: `${data.firstName} ${data.lastName}`,
			email: data.email,
			password: data.password,
			userType: data.userType,
		};

		console.log(formData);
		// try {
		// 	const response = await fetch(
		// 		'https://localhost:7238/api/users/signup',
		// 		{
		// 			method: 'POST',
		// 			headers: { 'Content-Type': 'application/json' },
		// 			body: JSON.stringify(data),
		// 		},
		// 	)
		// 		.then((res) => {
		// 			if (res.ok) {
		// 				alert("You're registered!");
		// 				setServerError(null);
		// 			} else {
		// 				return res.json();
		// 			}
		// 		})
		// 		.then((data) => {
		// 			switch (data.code) {
		// 				case 400:
		// 					setServerError(
		// 						`${data.message} [${data.code} Bad request]`,
		// 					);
		// 					break;
		// 				case 401:
		// 					setServerError(
		// 						`${data.message} [${data.code} Unauthorized]`,
		// 					);
		// 					break;
		// 				case 409:
		// 					setServerError(
		// 						`${data.message} [${data.code} Conflict]`,
		// 					);
		// 					break;
		// 			}
		// 		});
		// } catch (err) {
		// 	//TODO: check error after registration: TypeError
		// 	//setServerError(`${err}`);
		// }
	};

	return (
		<form
			className='registration-form'
			onSubmit={handleSubmit(submitForm)}>
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
				<label className='form-element__label'>Confirm Password:</label>
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
	);
}
