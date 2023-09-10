import { UserContext } from '@contexts/AuthContext';
import { useContext, useEffect, useState } from 'react';
import { NavigateFunction } from 'react-router-dom';
import { getUserRole } from './apiHandler';

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

export const getRole = async () => {
	const token = localStorage.getItem('token');
	if (token) {
		const response = await getUserRole(token);
		if (response && response.ok) {
			return await response.text();
		} else {
			//throw new Error("Couldn't access user's role.");
			console.error("Couldn't access user's role.");
		}
	} else {
		//throw new Error('You are not authorized!');
		console.error('You are not authorized!');
	}
};

export const removeTokenFromLocalStorage = (navigate: NavigateFunction) => {
	localStorage.removeItem('token');
	navigate('/', { replace: true });
};