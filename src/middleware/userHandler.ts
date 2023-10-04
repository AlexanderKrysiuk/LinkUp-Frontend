/**
 * userhandler - Module for handling user-related operations and user data retrieval.
 *
 * This module provides functions for retrieving user details, user roles, user profile photos,
 * and for uploading a new user profile photo. It relies on API request functions from the 'apiHandler.ts'
 * module to interact with the backend and perform these operations.
 *
 * @module userhandler
 */

import { getPhoto, getUser, getUserRole, postPhoto } from './apiHandler';

/**
 * Retrieve user details based on the user's authentication token.
 *
 * @returns {Promise<any>} - A promise that resolves to the user's details if successful.
 */
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

/**
 * Retrieve the user's role based on the user's authentication token.
 *
 * @returns {Promise<string>} - A promise that resolves to the user's role as a string if successful.
 */
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

/**
 * Upload a new user profile photo.
 *
 * @param {FormData} file - The file to be uploaded as the user's profile photo.
 * @returns {Promise<number | undefined>} - A promise that resolves to the HTTP status code if successful, or undefined if an error occurs.
 */
export const uploadPhoto = async (file: FormData) => {
	const token = localStorage.getItem('token');
	if (token) {
		try {
			const response = await postPhoto(file, token);
			if (!response.ok) {
				return response.status;
			}
			return response.status;
		} catch (err) {
			//handle error -> errorHandler.ts ?
			console.error(err);
		}
	}
};

/**
 * Retrieve the user's profile photo as a File object.
 *
 * @returns {Promise<File | undefined>} - A promise that resolves to the user's profile photo as a File object if successful, or undefined if an error occurs.
 */
export const getUserPhoto = async () => {
	const token = localStorage.getItem('token');
	if (token) {
		try {
			const response = await getPhoto(token);
			if (response && response.ok) {
				const blob = await response.blob();
				return new File([blob], 'profilePicture', {
					type: 'image/jpeg',
				});
			} else {
				console.error("Couldn't get user's picture.");
			}
		} catch (err) {
			//handle error -> errorHandler.ts ?
			console.error(err);
		}
	}
};
