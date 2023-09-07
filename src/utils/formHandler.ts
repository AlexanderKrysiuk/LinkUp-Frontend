/**
 * @module formHandler
 * @description Module containing functions for handling form submissions.
 */

import { createMeeting, createUser, loginUser } from '@utils/apiHandler';

/**
 * Submits form data to the server based on the specified method and action.
 *
 * @param {any} payload - The data to be submitted.
 * @param {string} method - The HTTP method to use for the submission (e.g., 'options', 'post', 'put').
 * @param {string} action - The action to perform (e.g., 'login', 'register', 'addMeeting', 'updateMeeting').
 * @param {any} token - Optional authorization token for protected requests.
 * @returns {Promise<{ success: boolean, data?: any, error?: number | string }>} - A promise that resolves with submission status.
 */
export async function submitFormData(
	payload: any,
	method: string,
	action: string,
	token?: any,
): Promise<{ success: boolean; data?: any; error?: number | string }> {
	var response = null;
	try {
		if (method === 'options' && action === 'login') {
			response = await loginUser(payload);
		} else if (method === 'options' && action === 'register') {
			response = await createUser(payload);
		} else if (method === 'post' && action === 'addMeeting') {
			response = await createMeeting(payload, token);
		} else if (method === 'put' && action === 'updateMeeting') {
			// Uncomment and implement updateMeetingDetails when needed.
			// response = await updateMeetingDetails(payload, token);
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
		// Handle error - You can add error handling logic here, possibly using errorHandler.ts.
		return {
			success: false,
			error: 'An error occurred while submitting the form.',
		};
	}
}
