/**
 * The base URI for the local development environment.
 */
export const LOCAL_URI = 'https://localhost:5173';

/**
 * The base URI for the API in the local development environment.
 */
export const API_URI = 'https://localhost:7190/api';

/**
 * The URL for user registration in the API.
 */
export const API_REGISTER_URL = `${API_URI}/register`;

/**
 * The URL for user login in the API.
 */
export const API_LOGIN_URL = `${API_URI}/login`;

/**
 * The URL for user-related API endpoints.
 */
export const API_USER_ROLE = `${API_URI}/user-role`;
export const API_USER_DETAILS = `${API_URI}/user-details`;
export const API_USER_PHOTO = `${API_URI}/user-photo`;

/**
 * The URL for meetings-related API endpoints.
 */
export const API_MEETINGS_URL = `${API_URI}/Meetings`;

/**
 * The URL for recieving all contractors
 */
export const API_CONTRACTORS = `${API_URI}/contractors`;

export const API_MEETINGS_BY_USER = `${API_MEETINGS_URL}/organizator/my-meetings`;
