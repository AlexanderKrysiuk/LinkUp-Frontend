/**
 * apiHandler - Module for handling API requests and interactions.
 *
 * This module provides functions for making API requests to various endpoints
 * such as user registration, login, fetching meetings, and more. It includes
 * functions for creating, reading, updating, and deleting data from the server.
 * The functions handle authentication headers and response processing.
 *
 * @module apiHandler
 */

import {
	API_ARCHIVED_MEETINGS,
	API_CONTRACTORS,
	API_LOGIN_URL,
	API_MEETINGS_BY_USER,
	API_MEETINGS_FROM_ORGANIZATOR,
	API_MEETINGS_URL,
	API_REGISTER_URL,
	API_UPCOMING_MEETINGS,
	API_USER_DETAILS,
	API_USER_PHOTO,
	API_USER_ROLE,
} from '@data/links';
import { getAuthHeader } from './authHandler';

/**
 * Create a new user by sending registration data to the server.
 *
 * @param {object} payload - The user registration data.
 * @returns {Promise<Response>} - A Promise containing the API response.
 */
export async function createUser(payload: any) {
	return await apiOptions(API_REGISTER_URL, payload);
}

/**
 * Log in a user by sending login credentials to the server.
 *
 * @param {object} payload - The user login credentials.
 * @returns {Promise<Response>} - A Promise containing the API response.
 */
export async function loginUser(payload: any) {
	return await apiOptions(API_LOGIN_URL, payload);
}

/**
 * Fetch meetings organized by a specific contractor.
 *
 * @param {string} contractorEmail - The email of the contractor.
 * @returns {Promise<Response>} - A Promise containing the API response.
 */
export async function getMeetingsFromOrganizator(contractorEmail: any) {
	return await apiGet(`${API_MEETINGS_FROM_ORGANIZATOR}/${contractorEmail}`);
}

/**
 * Create a new meeting by sending meeting data to the server.
 *
 * @param {object} payload - The meeting data to be created.
 * @param {string} token - The user's authentication token.
 * @returns {Promise<Response>} - A Promise containing the API response.
 */
export async function createMeeting(payload: any, token: string) {
	const headers = getAuthHeader(token);
	return await apiPost(API_MEETINGS_URL, payload, headers);
}

/**
 * Get the user's role from the server.
 *
 * @param {string} token - The user's authentication token.
 * @returns {Promise<Response>} - A Promise containing the API response.
 */
export async function getUserRole(token: string) {
	const headers = getAuthHeader(token);
	return await apiGet(API_USER_ROLE, headers);
}

/**
 * Get user details from the server.
 *
 * @param {string} token - The user's authentication token.
 * @returns {Promise<Response>} - A Promise containing the API response.
 */
export async function getUser(token: string) {
	const headers = getAuthHeader(token);
	return await apiGet(API_USER_DETAILS, headers);
}

/**
 * Get meetings associated with the user from the server.
 *
 * @param {string} token - The user's authentication token.
 * @returns {Promise<Response>} - A Promise containing the API response.
 */
export async function getUserMeetings(token: string) {
	const headers = getAuthHeader(token);
	return await apiGet(API_MEETINGS_BY_USER, headers);
}

/**
 * Get upcoming meetings associated with the user from the server.
 *
 * @param {string} token - The user's authentication token.
 * @returns {Promise<Response>} - A Promise containing the API response.
 */
export async function getUpcomingMeetings(token: string) {
	const headers = getAuthHeader(token);
	return await apiGet(API_UPCOMING_MEETINGS, headers);
}

/**
 * Get archived meetings associated with the user from the server.
 *
 * @param {string} token - The user's authentication token.
 * @returns {Promise<Response>} - A Promise containing the API response.
 */
export async function getArchivedMeetings(token: string) {
	const headers = getAuthHeader(token);
	return await apiGet(API_ARCHIVED_MEETINGS, headers);
}

/**
 * Get a list of contractors from the server.
 *
 * @returns {Promise<Response>} - A Promise containing the API response.
 */
export async function getContractors() {
	return await apiGet(API_CONTRACTORS);
}

/**
 * Upload a photo to the server.
 *
 * @param {FormData} payload - The photo data to be uploaded.
 * @param {string} token - The user's authentication token.
 * @returns {Promise<Response>} - A Promise containing the API response.
 */
export async function postPhoto(payload: FormData, token: string) {
	const headers = getAuthHeader(token);
	return await apiPostFile(API_USER_PHOTO, payload, headers);
}

/**
 * Get the user's photo from the server.
 *
 * @param {string} token - The user's authentication token.
 * @returns {Promise<Response>} - A Promise containing the API response.
 */
export async function getPhoto(token: string) {
	const headers = getAuthHeader(token);
	return await apiGet(API_USER_PHOTO, headers);
}

/**
 * Delete a user meeting from the server.
 *
 * @param {string} id - The ID of the meeting to be deleted.
 * @returns {Promise<Response>} - A Promise containing the API response.
 */
export async function deleteUserMeeting(id: string) {
	return await apiDelete(`${API_MEETINGS_URL}/${id}`, id);
}

async function apiOptions(url: string, payload: any): Promise<Response> {
	const response = await fetch(url, {
		method: 'OPTIONS',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(payload),
		credentials: 'include',
	});
	return response;
}

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

async function apiDelete(url: string, payload: any): Promise<Response> {
	const response = await fetch(url, {
		method: 'DELETE',
		body: JSON.stringify(payload),
	});
	return response;
}

async function apiPostFile(
	url: string,
	file: FormData,
	headers?: Record<string, string>,
): Promise<Response> {
	const requestHeaders = {
		...(headers || {}),
	};
	const response = await fetch(url, {
		method: 'POST',
		headers: requestHeaders,
		body: file,
	});
	return response;
}
