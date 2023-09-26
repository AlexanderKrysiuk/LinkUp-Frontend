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

export async function createUser(payload: any) {
	return await apiOptions(API_REGISTER_URL, payload);
}

export async function loginUser(payload: any) {
	return await apiOptions(API_LOGIN_URL, payload);
}

export async function getMeetingsFromOrganizator(contractorEmail: any) {
	return await apiGet(`${API_MEETINGS_FROM_ORGANIZATOR}/${contractorEmail}`);
}

export async function createMeeting(payload: any, token: string) {
	const headers = getAuthHeader(token);
	return await apiPost(API_MEETINGS_URL, payload, headers);
}

export async function getUserRole(token: string) {
	const headers = getAuthHeader(token);
	return await apiGet(API_USER_ROLE, headers);
}

export async function getUser(token: string) {
	const headers = getAuthHeader(token);
	return await apiGet(API_USER_DETAILS, headers);
}

export async function getUserMeetings(token: string) {
	const headers = getAuthHeader(token);
	return await apiGet(API_MEETINGS_BY_USER, headers);
}

export async function getUpcomingMeetings(token: string) {
	const headers = getAuthHeader(token);
	return await apiGet(API_UPCOMING_MEETINGS, headers);
}

export async function getArchivedMeetings(token: string) {
	const headers = getAuthHeader(token);
	return await apiGet(API_ARCHIVED_MEETINGS, headers);
}

export async function getContractors() {
	return await apiGet(API_CONTRACTORS);
}

export async function postPhoto(payload: FormData, token: string) {
	const headers = getAuthHeader(token);
	return await apiPostFile(API_USER_PHOTO, payload, headers);
}

export async function getPhoto(token: string) {
	const headers = getAuthHeader(token);
	return await apiGet(API_USER_PHOTO, headers);
}

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