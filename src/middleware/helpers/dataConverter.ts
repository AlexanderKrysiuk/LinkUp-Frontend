/**
 * dataConverter - Module for converting data between different formats.
 *
 * This module provides functions for converting data between different formats
 * and structures. It includes functions for converting data related to meetings,
 * user registration, and user login. Additionally, it provides a function for
 * converting a role string to a RoleEnum value.
 *
 * @module dataConverter
 */

import { LoginData, NewMeetingData, RegistrationData } from '@data/formData';
import { RoleEnum } from '@router/SecuredRoute.tsx';
import { convertToDateTime } from './dateTimeHelper';

/**
 * Convert data from a NewMeetingData object to a meeting data object.
 *
 * @param {NewMeetingData} data - The NewMeetingData object to convert.
 * @returns {object} - The converted meeting data object.
 */
export function convertToMeetingData(data: NewMeetingData) {
	const dateTime = convertToDateTime(data.date, data.time);
	return {
		datetime: dateTime,
		duration: +data.duration,
		maxParticipants: +data.participants,
		description: data.description,
	};
}

/**
 * Convert data from a RegistrationData object to a user registration data object.
 *
 * @param {RegistrationData} data - The RegistrationData object to convert.
 * @returns {object} - The converted user registration data object.
 */
export function convertToRegistrationData(data: RegistrationData) {
	return {
		username: `${data.firstName} ${data.lastName}`,
		email: data.email,
		password: data.password,
		role: data.userType,
	};
}

/**
 * Convert data from a LoginData object to a user login data object.
 *
 * @param {LoginData} data - The LoginData object to convert.
 * @returns {object} - The converted user login data object.
 */
export function convertToLoginData(data: LoginData) {
	return {
		email: data.email,
		password: data.password,
	};
}

/**
 * Convert a role string to a RoleEnum value.
 *
 * @param {string} role - The role string to convert.
 * @returns {RoleEnum} - The converted RoleEnum value.
 */
export const convertRoleStringToRoleEnum = (role: string): RoleEnum => {
	const convertedRole = RoleEnum[role as keyof typeof RoleEnum];
	return convertedRole;
};
