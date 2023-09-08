import {
	LoginData,
	NewMeetingData,
	RegistrationData,
} from '../../data/formData';
import { convertToUTCDateTime } from './dateTimeHelper';

export function convertToMeetingData(data: NewMeetingData) {
	const dateTime = convertToUTCDateTime(data.date, data.time);
	return {
		datetime: dateTime,
		duration: +data.duration,
		maxParticipants: +data.participants,
		description: data.description,
	};
}

export function convertToRegistrationData(data: RegistrationData) {
	return {
		username: `${data.firstName} ${data.lastName}`,
		email: data.email,
		password: data.password,
		role: data.userType,
	};
}

export function convertToLoginData(data: LoginData) {
	return {
		email: data.email,
		password: data.password,
	};
}
