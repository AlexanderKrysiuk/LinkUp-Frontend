import apiHandler from '@utils/fetchApi';
import { useNavigate } from 'react-router-dom';

export async function submitUserData(url: string, payload: any) {
	const navigate = useNavigate();
	try {
		const response = await apiHandler.apiPost(url, payload);
		if (response.ok) {
			navigate('/', { replace: true });
		} else {
			return 'User is not authorized.';
			//handle statuses
		}
	} catch (error) {
		//handle errors -> errorhandler.ts
		console.error('Error submitting form:', error);
		return error;
	}
}
