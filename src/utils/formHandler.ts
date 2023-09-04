//import errorHandler from '@utils/errorHandler';
import apiHandler from '@utils/fetchApi';

export async function submitFormData(
	url: string,
	payload: any,
	method: string,
) {
	try {
		const response =
			method === 'options'
				? await apiHandler.apiOptions(url, payload)
				: await apiHandler.apiPost(url, payload);
		if (response.ok) {
			return { success: true, data: response };
		} else {
			return {
				success: false,
				error: response.status,
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
