import {
	API_LOGIN_URL,
	API_MEETINGS_URL,
	API_REGISTER_URL,
} from '@utils/links';

export async function createUser(payload: any) {
	return await apiOptions(API_REGISTER_URL, payload);
}

export async function loginUser(payload: any) {
	return await apiOptions(API_LOGIN_URL, payload);
}

export async function createMeeting(payload: any, token: any) {
	const headers = { Authorization: `Bearer ${token}` };
	return await apiPost(API_MEETINGS_URL, payload, headers);
}

export async function getUserRole(token: any) {
	const headers = { Authorization: `Bearer ${token}` };
	return await apiGet('URL_TO_SET', headers); //add API_USER, +links.ts
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
