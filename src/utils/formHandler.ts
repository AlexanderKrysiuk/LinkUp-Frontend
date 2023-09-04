import apiHandler from '@utils/fetchApi';
import { useNavigate } from 'react-router-dom';

export async function submitUserForm(url: string, payload: any) {
	const navigate = useNavigate();
	try {
		const response = await apiHandler.apiOptions(url, payload);
		if (response.ok) {
			navigate('/', { replace: true });
		} else {
			console.log('User is not authorized.');
			//handle statuses
		}
	} catch (error) {
		//handle errors -> errorhandler.ts
		console.error('Error submitting form:', error);
	}
}
