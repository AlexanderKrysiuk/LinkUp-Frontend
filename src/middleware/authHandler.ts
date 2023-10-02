/**
 * authHandler - Module for handling authentication-related operations.
 *
 * This module provides functions for managing user authentication and
 * authorization. It includes functions for setting and removing tokens from
 * local storage, generating authentication headers, and checking user roles
 * for authorization purposes.
 *
 * @module authHandler
 */

import { RoleEnum } from '@router/SecuredRoute';
import { NavigateFunction } from 'react-router-dom';

/**
 * Generate an authentication header with the provided token.
 *
 * @param {string} token - The user's authentication token.
 * @returns {object} - The authentication header.
 */
export const getAuthHeader = (token: string) => {
	return { Authorization: `Bearer ${token}` };
};

/**
 * Set the user's authentication token to local storage.
 *
 * @param {Response} data - The API response containing the token.
 */
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

/**
 * Remove the user's authentication token from local storage and navigate to a specified route.
 *
 * @param {NavigateFunction} navigate - The function used to navigate to a route.
 */
export const removeTokenFromLocalStorage = (navigate: NavigateFunction) => {
	localStorage.removeItem('token');
	navigate('/', { replace: true });
};

/**
 * Check if a user has the required role for authorization.
 *
 * @param {RoleEnum} user - The user's role.
 * @param {RoleEnum} requiredRole - The required role for authorization.
 * @returns {boolean} - True if the user has the required role; otherwise, false.
 */
export const checkRoleAuthorization = (
	user: RoleEnum,
	requiredRole: RoleEnum,
): boolean => {
	return user >= requiredRole;
};
