import { NavigateFunction } from 'react-router-dom';

export const getAuthHeader = (token: string) => {
	return { Authorization: `Bearer ${token}` };
};

export const setTokenToLocalStorage = async (data: Response) => {
	try {
		const responseData = await data.json();
		if ('token' in responseData) {
			const responseToken = responseData.token;
			localStorage.setItem('token', responseToken);
		} else {
			console.error('You are not authorized!');
		}
	} catch (error) {
		console.error('There has been an issue while processing JSON: ', error);
	}
};

export const removeTokenFromLocalStorage = (navigate: NavigateFunction) => {
	localStorage.removeItem('token');
	navigate('/', { replace: true });
};
