import React from 'react';
import './RegistrationForm.css';

export default function RegistrationForm() {
	return (
		<form
			className='RegistrationForm'
			onSubmit={() => alert('OK!')}>
			<label>Username</label>
			<input type='text' />
			<label>E-mail</label>
			<input type='email' />
			<label>Password</label>
			<input type='password' />
			<label>Confirm password</label>
			<input type='password' />
			<button type='submit'>Sign up</button>
		</form>
	);
}
