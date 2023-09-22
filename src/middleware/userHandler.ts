import { getUser, getUserRole, postPhoto } from './apiHandler';

export const getUserDetails = async () => {
	const token = localStorage.getItem('token');
	if (token) {
		const response = await getUser(token);
		if (response && response.ok) {
			return await response.json();
		} else {
			//throw new Error("Couldn't get user's meetings.");
			console.error("Couldn't get user's details.");
		}
	} else {
		//throw new Error('You are not authorized!');
		console.error('You are not authorized!');
	}
};

export const getRole = async () => {
	const token = localStorage.getItem('token');
	if (token) {
		const response = await getUserRole(token);
		if (response && response.ok) {
			return await response.text();
		} else {
			//throw new Error("Couldn't access user's role.");
			console.error("Couldn't access user's role.");
		}
	} else {
		//throw new Error('You are not authorized!');
		console.error('You are not authorized!');
	}
};

export const uploadPhoto = async (file: FormData) => {
	const token = localStorage.getItem('token');
	if (token) {
		try {
			const response = await postPhoto(file, token);
			if (response) console.log(response.status, response.statusText);
			return response.status;
		} catch (err) {
			//handle error -> errorHandler.ts ?
			console.error(err);
		}
	}
};
