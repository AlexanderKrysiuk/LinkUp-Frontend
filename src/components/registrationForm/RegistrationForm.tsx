import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './RegistrationForm.css';

export default function RegistrationForm() {
	const {
		register,
		getValues,
		handleSubmit,
		formState: { errors, isValid },
		setError,
		clearErrors,
	} = useForm({
		defaultValues: {
			username: '',
			email: '',
			password: '',
			confirmedPassword: '',
		},
		mode: 'onChange',
	});

	const [isFormValid, setFormValid] = useState(false);
	const [isUsernameValid, setUsernameValid] = useState(false);
	const [isEmailValid, setEmailValid] = useState(false);
	const [isPasswordValid, setPasswordValid] = useState(false);
	const [isConfirmedPasswordValid, setConfirmedPasswordValid] =
		useState(false);

	const enableSubmitForm = () => {
		return (
			isFormValid &&
			isUsernameValid &&
			isEmailValid &&
			isPasswordValid &&
			isConfirmedPasswordValid
		);
	};

	// Update form validity on every change
	useEffect(() => {
		setFormValid(isValid);
	}, [isValid]);

	//
	const [serverError, setServerError] = useState();

	const submitForm = async (data: any) => {
		try {
			const response = await fetch(
				'https://localhost:7238/api/users/signup',
				{
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(data),
				},
			);
			if (!response.ok) {
				// const errors = await response.json();
				// handleError(response.status);
				const { messageText } = await response.json();
				const errorType = response.status;
				setServerError({ status: errorType, message: messageText });
			} else {
				prompt('Thank you for registration!');
			}
		} catch (err) {
			//handleError(err);
			console.log(err);
		}
	};

	// const handleError = (error: any) => {
	// 	let messageText = '';
	// 	switch (error) {
	// 		case 400:
	// 			messageText = 'Bad request';
	// 			break;
	// 		case 401:
	// 			messageText = 'Unauthorized';
	// 			break;
	// 		case 409:
	// 			messageText = 'Conflict';
	// 			break;
	// 		case 500:
	// 			messageText = 'Internal server error';
	// 			break;
	// 	}
	// 	setServerError({ status: error, message: messageText });
	// 	prompt(`Error ${serverError.status} : ${serverError.message}`);
	// };

	const validatePasswordConfirmation = () => {
		const confirmedPasswordValue = getValues('confirmedPassword');
		const passwordValue = getValues('password');

		if (confirmedPasswordValue !== passwordValue) {
			setError('confirmedPassword', { message: 'Passwords must match.' });
			setConfirmedPasswordValid(false);
		} else {
			clearErrors('confirmedPassword');
			setConfirmedPasswordValid(true);
		}
	};

	return (
		<form
			className='RegistrationForm'
			onSubmit={handleSubmit(submitForm)}>
			{serverError && (
				<p className='errorMessage'>
					Error {serverError.status}: {serverError.message}
				</p>
			)}
			<div>
				<label>Username:</label>
				<input
					type='text'
					id='username'
					{...register('username', { required: true, minLength: 3 })}
					onBlur={() => {
						if (!errors.username) {
							setUsernameValid(true);
						}
					}}
				/>
				{errors.username && (
					<p className='validationPrompt'>
						Username must be at least 3 characters long.
					</p>
				)}
			</div>
			<div>
				<label>Email:</label>
				<input
					type='email'
					id='email'
					{...register('email', {
						required: true,
						pattern: /^\S+@\S+$/i,
					})}
					onBlur={() => {
						if (!errors.email) {
							setEmailValid(true);
						}
					}}
				/>
				{errors.email && (
					<p className='validationPrompt'>
						Email must be a valid email address.
					</p>
				)}
			</div>
			<div>
				<label>Password:</label>
				<input
					type='password'
					id='password'
					{...register('password', {
						required: true,
						minLength: 8,
						pattern: /^(?=.*[A-Z])(?=.*\d)/,
					})}
					onBlur={() => {
						if (!errors.password) {
							setPasswordValid(true);
						}
					}}
				/>
				{errors.password && (
					<p className='validationPrompt'>
						Password must be at least 8 characters long and contain
						at least one uppercase letter, one special character,
						and one digit.
					</p>
				)}
			</div>
			<div>
				<label>Confirm Password:</label>
				<input
					type='password'
					id='confirmedPassword'
					{...register('confirmedPassword', { required: true })}
					onBlur={() => {
						validatePasswordConfirmation();
						if (
							!errors.password &&
							getValues('password') ===
								getValues('confirmedPassword')
						) {
							setConfirmedPasswordValid(true);
						}
					}}
				/>
				{errors.confirmedPassword && (
					<p className='validationPrompt'>Passwords must match.</p>
				)}
			</div>

			<button
				type='submit'
				disabled={!isFormValid || !enableSubmitForm()}
				onMouseOver={(e) => {
					(e.target as HTMLButtonElement).disabled =
						!enableSubmitForm;
				}}>
				Submit
			</button>
		</form>
	);
}
