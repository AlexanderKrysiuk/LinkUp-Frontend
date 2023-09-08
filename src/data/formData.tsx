/**
 * @module formData
 * @description Module containing type definitions for form data.
 */

/**
 * Type definition for user registration data.
 */
export type RegistrationData = {
	userType: string;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	confirmedPassword: string;
};

/**
 * Type definition for user login data.
 */
export type LoginData = {
	email: string;
	password: string;
};

/**
 * Type definition for new meeting data.
 */
export interface NewMeetingData {
	date: string;
	time: string;
	duration: string;
	participants: string;
	description: string | null;
}
