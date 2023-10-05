/**
 * formHandler - Module for handling form submissions and API requests related to forms.
 *
 * This module provides a function for submitting form data and making API requests based on the specified action and method.
 * It handles actions like login, registration, and meeting creation.
 *
 * @module formhandler
 */

//import errorHandler from '@utils/errorHandler';
import { createMeeting, createUser, loginUser } from './apiHandler';

/**
 * Submit form data and make API requests based on the specified action and method.
 *
 * @param {any} payload - The data to be submitted.
 * @param {string} method - The HTTP request method (e.g., 'options', 'post', 'put').
 * @param {string} action - The action to perform (e.g., 'login', 'register', 'addMeeting').
 * @param {any} token - An optional authentication token for requests that require authorization.
 * @returns {object} - An object with a success flag and optional data or error information.
 */
export async function submitFormData(
	payload: any,
	method: string,
	action: string,
	token?: any,
) {
	var response = null;
	try {
		if (method === 'options' && action === 'login') {
			response = await loginUser(payload);
		} else if (method === 'options' && action === 'register') {
			response = await createUser(payload);
		} else if (method === 'post' && action === 'addMeeting') {
			response = await createMeeting(payload, token);
		} else if (method === 'put' && action === 'updateMeeting') {
			//response = await updateMeetingDetails(payload, token);
		}

		if (response && response.ok) {
			return { success: true, data: response };
		} else {
			return {
				success: false,
				error: response?.status,
			};
		}
	} catch (error) {
		console.error('Error submitting form:', error);
		//handle error -> errorHandler.ts ?
		return {
			success: false,
			error: 'An error occurred while submitting the form.',
		};
	}
}
