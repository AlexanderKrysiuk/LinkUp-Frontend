/**
 * @module apiHandler
 * @description Module for handling API requests and interactions.
 */

import {
	API_LOGIN_URL,
	API_MEETINGS_URL,
	API_REGISTER_URL,
} from '@utils/links';

/**
 * Create a new user using the provided payload.
 *
 * @param {object} payload - User registration data.
 * @returns {Promise<Response>} - A Promise that resolves to the API response.
 */
export async function createUser(payload: any): Promise<Response> {
	return await apiOptions(API_REGISTER_URL, payload);
}

/**
 * Log in a user using the provided payload.
 *
 * @param {object} payload - User login data.
 * @returns {Promise<Response>} - A Promise that resolves to the API response.
 */
export async function loginUser(payload: any): Promise<Response> {
	return await apiOptions(API_LOGIN_URL, payload);
}

/**
 * Create a new meeting using the provided payload and authentication token.
 *
 * @param {object} payload - Meeting data.
 * @param {string} token - User authentication token.
 * @returns {Promise<Response>} - A Promise that resolves to the API response.
 */
export async function createMeeting(
	payload: any,
	token: string,
): Promise<Response> {
	const headers = { Authorization: `Bearer ${token}` };
	return await apiPost(API_MEETINGS_URL, payload, headers);
}

/**
 * Get the user role using the provided authentication token.
 *
 * @param {string} token - User authentication token.
 * @returns {Promise<Response>} - A Promise that resolves to the API response.
 */
export async function getUserRole(token: string): Promise<Response> {
	const headers = { Authorization: `Bearer ${token}` };
	return await apiGet('URL_TO_SET', headers); // Replace 'URL_TO_SET' with the appropriate URL
}

/**
 * Send an OPTIONS request to the specified URL with the provided payload.
 *
 * @param {string} url - The API endpoint URL.
 * @param {object} payload - The data to send in the request.
 * @returns {Promise<Response>} - A Promise that resolves to the API response.
 */
async function apiOptions(url: string, payload: any): Promise<Response> {
	const response = await fetch(url, {
		method: 'OPTIONS',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(payload),
		credentials: 'include',
	});
	return response;
}

/**
 * Send a POST request to the specified URL with the provided payload and headers.
 *
 * @param {string} url - The API endpoint URL.
 * @param {object} payload - The data to send in the request.
 * @param {object} headers - Additional headers for the request.
 * @returns {Promise<Response>} - A Promise that resolves to the API response.
 */
async function apiPost(
	url: string,
	payload: any,
	headers?: Record<string, string>,
): Promise<Response> {
	const requestHeaders = {
		...(headers || {}),
		'Content-Type': 'application/json',
	};
	const response = await fetch(url, {
		method: 'POST',
		headers: requestHeaders,
		body: JSON.stringify(payload),
	});
	return response;
}

/**
 * Send a GET request to the specified URL with the provided headers.
 *
 * @param {string} url - The API endpoint URL.
 * @param {object} headers - Additional headers for the request.
 * @returns {Promise<Response>} - A Promise that resolves to the API response.
 */
async function apiGet(
	url: string,
	headers?: Record<string, string>,
): Promise<Response> {
	const requestHeaders = { ...(headers || {}) };
	const response = await fetch(url, {
		method: 'GET',
		headers: requestHeaders,
	});
	return response;
}
