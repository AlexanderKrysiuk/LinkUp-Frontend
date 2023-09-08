export type RegistrationData = {
	userType: string;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	confirmedPassword: string;
};

export type LoginData = {
	email: string;
	password: string;
};

export interface NewMeetingData {
	date: string;
	time: string;
	duration: string;
	participants: string;
	description: string | null;
}
