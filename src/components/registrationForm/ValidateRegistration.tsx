export function validateUsername(
	errors: {
		username: { value: boolean; message: string };
		email: { value: boolean; message: string };
		password: { value: boolean; message: string };
		confirmedPassword: { value: boolean; message: string };
	},
	username: string,
) {
	const usernameRegex = /^[a-zA-Z0-9]{1}[\w\d]{2,}$/;
	if (!usernameRegex.test(username)) {
		errors.username.value = true;
		return false;
	}
	return true;
}

export function validateEmail(
	errors: {
		username: { value: boolean; message: string };
		email: { value: boolean; message: string };
		password: { value: boolean; message: string };
		confirmedPassword: { value: boolean; message: string };
	},
	email: string,
) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) {
		errors.email.value = true;
		return false;
	}
	return true;
}

export function validatePassword(
	errors: {
		username: { value: boolean; message: string };
		email: { value: boolean; message: string };
		password: { value: boolean; message: string };
		confirmedPassword: { value: boolean; message: string };
	},
	password: string,
) {
	const passwordRegex =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
	if (!passwordRegex.test(password)) {
		errors.password.value = true;
		return false;
	}
	return true;
}

export function arePasswordsEqual(
	errors: {
		username: { value: boolean; message: string };
		email: { value: boolean; message: string };
		password: { value: boolean; message: string };
		confirmedPassword: { value: boolean; message: string };
	},
	password: string,
	confirmedPassword: string,
) {
	if (password !== confirmedPassword) {
		errors.confirmedPassword.value = true;
		return false;
	}
	return true;
}
