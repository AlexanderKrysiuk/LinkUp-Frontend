//import errorHandler from '@utils/errorHandler';
import { createMeeting, createUser, loginUser } from './apiHandler';

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
